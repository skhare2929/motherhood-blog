import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaPinterest, FaLink, FaCheck, FaHeart, FaEye } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { getPostById } from '../../blogs/blogData';
import { supabase } from '../../supabaseClient';

const EMAILJS_SERVICE_ID = 'service_v6ad6hr';
const EMAILJS_COMMENT_TEMPLATE_ID = 'template_yzkpkyn';
const EMAILJS_PUBLIC_KEY = 'eW7dpXqv9gX-l9Bqb';

const ShareButtons = ({ title }) => {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="share-section">
      <span className="share-label">Share:</span>
      <div className="share-buttons">
        <a href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="share-icon-btn whatsapp" aria-label="Share on WhatsApp">
          <FaWhatsapp />
        </a>
        <a href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="share-icon-btn twitter" aria-label="Share on X">
          <FaXTwitter />
        </a>
        <a href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="share-icon-btn pinterest" aria-label="Share on Pinterest">
          <FaPinterest />
        </a>
        <button onClick={copyLink} className="share-icon-btn copy-link" aria-label="Copy link">
          {copied ? <FaCheck /> : <FaLink />}
        </button>
      </div>
    </div>
  );
};

const BlogPostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [views, setViews] = useState(null);
  const [likes, setLikes] = useState(null);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [commentStatus, setCommentStatus] = useState('idle'); // idle | submitting | success | error

  const post = getPostById(postId);

  // Load markdown content
  useEffect(() => {
    setIsLoading(true);
    import(`../../blogs/${postId}.md`)
      .then(module => { setContent(module.default); setIsLoading(false); })
      .catch(err => { console.error('Error loading blog post:', err); setIsLoading(false); });
  }, [postId]);

  // Track view and fetch stats
  useEffect(() => {
    let ignore = false;

    const trackView = async () => {
      const { data, error } = await supabase
        .from('post_stats')
        .select('views, likes')
        .eq('blog_id', postId)
        .maybeSingle();

      if (ignore || error) return;

      if (!data) {
        const { data: inserted } = await supabase
          .from('post_stats')
          .insert({ blog_id: postId, views: 1, likes: 0 })
          .select('views, likes')
          .maybeSingle();
        if (!ignore && inserted) { setViews(inserted.views); setLikes(inserted.likes); }
      } else {
        const newViews = data.views + 1;
        await supabase
          .from('post_stats')
          .update({ views: newViews })
          .eq('blog_id', postId);
        if (!ignore) { setViews(newViews); setLikes(data.likes); }
      }
    };

    trackView();
    return () => { ignore = true; };
  }, [postId]);

  // Check if this post was already liked in this browser
  useEffect(() => {
    setHasLiked(!!localStorage.getItem(`liked_${postId}`));
  }, [postId]);

  // Fetch approved comments
  useEffect(() => {
    let ignore = false;

    const fetchComments = async () => {
      const { data } = await supabase
        .from('comments')
        .select('id, name, message, created_at')
        .eq('blog_id', postId)
        .eq('approved', true)
        .order('created_at', { ascending: true });
      if (!ignore && data) setComments(data);
    };

    fetchComments();
    return () => { ignore = true; };
  }, [postId]);

  const handleLike = async () => {
    if (hasLiked || likes === null) return;
    const newLikes = likes + 1;
    const { error } = await supabase
      .from('post_stats')
      .update({ likes: newLikes })
      .eq('blog_id', postId);
    if (!error) {
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem(`liked_${postId}`, 'true');
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setCommentStatus('submitting');
    const { error } = await supabase
      .from('comments')
      .insert({ blog_id: postId, name: form.name, email: form.email, message: form.message });
    if (error) {
      setCommentStatus('error');
      return;
    }
    setCommentStatus('success');
    setForm({ name: '', email: '', message: '' });
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_COMMENT_TEMPLATE_ID,
      {
        commenter_name: form.name,
        commenter_email: form.email,
        blog_post: postId,
        comment_message: form.message,
      },
      EMAILJS_PUBLIC_KEY
    ).catch(err => {
      console.error('Comment notification email failed (non-critical):', err);
    });
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  if (!post) {
    return (
      <div className="page">
        <p>Post not found.</p>
        <button className="back-to-blog-btn" onClick={() => navigate('/blog')}>← Back to Blog</button>
      </div>
    );
  }

  return (
    <div className="page blog-post-page">
      <button className="back-to-blog-btn" onClick={() => navigate('/blog')}>
        ← Back to Blog
      </button>

      <article className="blog-post-full">
        <h1>{post.title}</h1>

        <div className="post-meta">
          <span className="post-date">{post.date}</span>
          <span className="separator">•</span>
          <span className="post-read-time">{post.readTime}</span>
        </div>

        <div className="post-stats">
          {views !== null && (
            <span className="views-count">
              <FaEye aria-hidden="true" /> {views.toLocaleString()} views
            </span>
          )}
          <button
            className={`like-btn${hasLiked ? ' liked' : ''}`}
            onClick={handleLike}
            disabled={hasLiked || likes === null}
            aria-label={hasLiked ? 'Already liked' : 'Like this post'}
          >
            <FaHeart aria-hidden="true" />
            {likes !== null ? likes.toLocaleString() : '…'}
          </button>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}

        <div className="post-full-content">
          {isLoading ? <p>Loading...</p> : <ReactMarkdown>{content}</ReactMarkdown>}
        </div>

        <ShareButtons title={post.title} />

        <div className="comments-section">
          <h3>Comments{comments.length > 0 && ` (${comments.length})`}</h3>
          {comments.length === 0 ? (
            <p className="no-comments">No comments yet. Be the first to share your thoughts!</p>
          ) : (
            comments.map(comment => (
              <div key={comment.id} className="comment-card">
                <div className="comment-meta">
                  <span className="comment-author">{comment.name}</span>
                  <span className="comment-date">{formatDate(comment.created_at)}</span>
                </div>
                <p className="comment-message">{comment.message}</p>
              </div>
            ))
          )}
        </div>

        <div className="comment-form-section">
          <h3>Leave a Comment</h3>
          <p className="comment-form-note">Comments are reviewed before being published.</p>
          {commentStatus === 'success' ? (
            <div className="success-message">
              Thank you! Your comment will appear here once approved.
            </div>
          ) : (
            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="comment-name">Name *</label>
                  <input
                    id="comment-name"
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="comment-email">
                    Email * <span className="email-note">(not displayed)</span>
                  </label>
                  <input
                    id="comment-email"
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="comment-message">Comment *</label>
                <textarea
                  id="comment-message"
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  placeholder="Share your thoughts..."
                />
              </div>
              {commentStatus === 'error' && (
                <div className="error-message">Something went wrong. Please try again.</div>
              )}
              <button
                type="submit"
                className="submit-button"
                disabled={commentStatus === 'submitting'}
              >
                {commentStatus === 'submitting' ? 'Submitting…' : 'Submit Comment'}
              </button>
            </form>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
