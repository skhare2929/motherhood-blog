import React from 'react';
import BlogPostCard from '../common/BlogPostCard';
import { getSortedPosts } from '../../blogs/blogData';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';

const BlogPage = () => {
  usePageSEO(pageSEO.blog.title, pageSEO.blog.description);
  const blogPosts = getSortedPosts();

  return (
    <div className="page">
      <section className="content-section">
        <h2>Blog Posts</h2>
        <p>
          Welcome to the blog! Here you'll find honest stories from my motherhood journey. I hope these posts
          make you feel less alone, more empowered, and remind you that we're all figuring this out together.
        </p>
      </section>

      <div className="blog-posts-container">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            date={post.date}
            readTime={post.readTime}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
