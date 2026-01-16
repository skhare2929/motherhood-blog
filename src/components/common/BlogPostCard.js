import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPostCard = ({ postId, title, date, readTime, tags }) => {
  const [fullContent, setFullContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the markdown file based on the post ID
    // With raw-loader, the module.default is the text content directly
    import(`../../blogs/${postId}.md`)
      .then(module => {
        setFullContent(module.default);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error importing blog file:', err);
        setIsLoading(false);
      });
  }, [postId]);

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

      <div className="post-full-content">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ReactMarkdown>{fullContent}</ReactMarkdown>
        )}
      </div>
    </article>
  );
};

export default BlogPostCard;
