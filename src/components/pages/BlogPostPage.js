import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPostById } from '../../blogs/blogData';

const BlogPostPage = ({ postId, setCurrentPage }) => {
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
        <button className="back-to-blog-btn" onClick={() => setCurrentPage('blog')}>← Back to Blog</button>
      </div>
    );
  }

  return (
    <div className="page blog-post-page">
      <button className="back-to-blog-btn" onClick={() => setCurrentPage('blog')}>
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
      </article>
    </div>
  );
};

export default BlogPostPage;
