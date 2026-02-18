import BlogPostCard from '../common/BlogPostCard';
import { getSortedPosts } from '../../blogs/blogData';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';

const BlogPage = ({ navigateToPost }) => {
  usePageSEO(pageSEO.blog.title, pageSEO.blog.description);
  const blogPosts = getSortedPosts();

  return (
    <div className="page">
      <div className="blog-posts-container">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            postId={post.id}
            title={post.title}
            date={post.date}
            readTime={post.readTime}
            tags={post.tags}
            excerpt={post.excerpt}
            navigateToPost={navigateToPost}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
