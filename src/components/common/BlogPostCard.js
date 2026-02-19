import { useNavigate } from 'react-router-dom';

const BlogPostCard = ({ postId, title, date, readTime, tags, excerpt }) => {
  const navigate = useNavigate();

  return (
    <article className="blog-post-card" onClick={() => navigate(`/blog/${postId}`)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate(`/blog/${postId}`)}>
      <h2>{title}</h2>
      <div className="post-meta">
        <span className="post-date">{date}</span>
        <span className="separator">•</span>
        <span className="post-read-time">{readTime}</span>
      </div>
      {tags && tags.length > 0 && (
        <div className="post-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
      <p className="post-excerpt">{excerpt}</p>
      <span className="read-more-btn">Read More →</span>
    </article>
  );
};

export default BlogPostCard;
