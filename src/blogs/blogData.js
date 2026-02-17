// Blog post metadata and excerpts
// Example posts have been archived to src/blogs/archived/
// Add your own blog posts here following this format:
/*
{
  id: 'your-blog-post-slug',
  title: 'Your Blog Post Title',
  date: 'Month Day, Year',
  readTime: 'X min read',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  excerpt: `Your blog post excerpt or summary...`,
  fullContent: null
}
*/

export const blogPosts = [
  {
    id: 'the-day-one',
    title: 'The Day ONE...',
    date: 'January 23, 2026',
    readTime: '3 min read',
    tags: ['Motherhood', 'New Parents', 'First Baby', 'Parenting Journey'],
    excerpt: `I remember, when we first got the two double solid lines - our world changed for real... in a happy way of course. We started preparing for everything: financial aspects, our home, how to manage home and work, researching everything. Things hit hard when we brought the baby home...`,
    fullContent: null
  },
  {
    id: 'lost-me-found-me',
    title: 'Lost Me; Found Me',
    date: 'January 14, 2026',
    readTime: '3 min read',
    tags: ['Motherhood', 'Self-Discovery', 'Personal Journey', 'Parenting'],
    excerpt: `When I thought about writing about my journey, these words echoed in my mind, like giving me some direction or nudging me towards something. I think this was it—a journey, a sense of belonging. Through my years of parenting, I felt like I literally lost me, faded somewhere; around many people but still isolated. But, for the past one year, I found a new me; renewed, invigorated me...`,
    fullContent: null
  }
];

// Sort posts by date (newest first)
export const getSortedPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Get posts by tag
export const getPostsByTag = (tag) => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

// Get single post by ID
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};
