// SEO configuration for each page
export const pageSEO = {
  home: {
    title: 'My Motherhood Journey - Honest Stories About Parenting, Sleep, and Real Life',
    description: 'A motherhood blog sharing real experiences with sleep training, baby-led weaning, postpartum recovery, and the beautiful chaos of raising little ones. No perfect Instagram moments - just honest parenting stories.'
  },
  about: {
    title: 'About Me - My Motherhood Journey',
    description: 'Learn about the mom behind the blog. My personal journey through motherhood, why I started sharing my experiences, and what you can expect from this honest parenting blog.'
  },
  blog: {
    title: 'Blog - Real Motherhood Stories & Parenting Tips',
    description: 'Browse honest blog posts about sleep training, baby-led weaning, postpartum recovery, mom guilt, first year milestones, and the real side of motherhood. Personal experiences and practical tips.'
  },
  disclaimer: {
    title: 'Disclaimer - My Motherhood Journey',
    description: 'Important disclaimer: This blog shares personal motherhood experiences and is not professional medical advice. Always consult healthcare professionals for your child\'s health and development.'
  },
  terms: {
    title: 'Terms of Use - My Motherhood Journey',
    description: 'Terms of use for My Motherhood Journey blog. Information about content ownership, comment policy, and keeping our parenting community supportive and kind.'
  },
  privacy: {
    title: 'Privacy Policy - My Motherhood Journey',
    description: 'Privacy policy for My Motherhood Journey. Learn how we collect, use, and protect your information when you visit our motherhood blog.'
  },
  contact: {
    title: 'Contact Me - My Motherhood Journey',
    description: 'Get in touch! Share your own motherhood experiences, ask questions, or just say hello. I love connecting with other parents navigating this beautiful chaos together.'
  }
};

// Structured data for the website
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "My Motherhood Journey",
  "description": "A motherhood blog sharing honest experiences about parenting, sleep training, baby-led weaning, and postpartum life",
  "url": "https://yourdomain.com",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "My Motherhood Journey",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  }
};

// Generate structured data for individual blog posts
export const generateBlogPostStructuredData = (post) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt.substring(0, 160),
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": "Your Name"
    },
    "publisher": {
      "@type": "Organization",
      "name": "My Motherhood Journey",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/logo.png"
      }
    },
    "keywords": post.tags.join(', '),
    "articleSection": "Parenting",
    "inLanguage": "en-US"
  };
};
