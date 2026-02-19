import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FaWhatsapp, FaPinterest, FaLink, FaCheck } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { getPostById } from '../../blogs/blogData';

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
  const post = getPostById(postId);

  useEffect(() => {
    setIsLoading(true);
    import(`../../blogs/${postId}.md`)
      .then(module => {
        setContent(module.default);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading blog post:', err);
        setIsLoading(false);
      });
  }, [postId]);

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
        {post.tags && post.tags.length > 0 && (
          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}

        <div className="post-full-content">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ReactMarkdown>{content}</ReactMarkdown>
          )}
        </div>

        <ShareButtons title={post.title} />
      </article>
    </div>
  );
};

export default BlogPostPage;
