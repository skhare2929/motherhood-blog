import React from 'react';

const BlogPostCard = ({ title, date, readTime, excerpt, tags }) => {
  // Format excerpt - handle both string and JSX
  const formattedExcerpt = typeof excerpt === 'string'
    ? excerpt.split('\n\n').slice(0, 2).map((para, idx) => <p key={idx}>{para}</p>)
    : excerpt;

  return (
    <article className="blog-post">
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
      <div className="post-excerpt">
        {formattedExcerpt}
      </div>
      <a href="#read-more" className="read-more-link" onClick={(e) => e.preventDefault()}>
        Read More →
      </a>
    </article>
  );
};

export default BlogPostCard;
