# My Motherhood Journey - React Blog

A beautiful, fully-functional motherhood blog built with React. This single-page application features warm, inviting design with complete content management for a personal parenting blog.

## Features

- **Single-Page Application**: Smooth navigation without page reloads
- **7 Complete Pages**: Home, About Me, Blog, Disclaimer, Terms of Use, Privacy Policy, and Contact
- **5 Complete Blog Posts**: Ready-to-use dummy content organized in markdown files
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **Warm Design Theme**: Soft peach/pink colors with brown accents
- **Working Contact Form**: Client-side validation and success messaging
- **Reusable Components**: Modular architecture for easy customization
- **No External Dependencies**: Pure React with no UI libraries needed
- **Fully SEO Optimized**: Meta tags, Open Graph, structured data, sitemap, and more

## Color Scheme

- Soft peach/pink: `#f8e8e0`, `#f0d4c8`, `#d4a5a5`
- Brown accents: `#6b4e4e`, `#8a6d6d`
- Warning/disclaimer: `#fff3e0` background, `#ff9800` border, `#e65100` text
- Info highlights: `#f0f8ff` background, `#4a90e2` border

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd motherhood-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will reload when you make changes.

## Project Structure

```
motherhood-blog/
├── public/
│   └── index.html
├── src/
│   ├── blogs/                     # Blog posts as markdown files
│   │   ├── sleep-training-journey.md
│   │   ├── baby-led-weaning.md
│   │   ├── postpartum-reality.md
│   │   ├── mom-guilt-survival.md
│   │   ├── first-year-milestones.md
│   │   └── blogData.js           # Blog metadata and management
│   ├── components/
│   │   ├── common/
│   │   │   ├── BlogPostCard.js
│   │   │   ├── DisclaimerBanner.js
│   │   │   └── HighlightBox.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── AboutPage.js
│   │   │   ├── BlogPage.js
│   │   │   ├── DisclaimerPage.js
│   │   │   ├── TermsPage.js
│   │   │   ├── PrivacyPage.js
│   │   │   └── ContactPage.js
│   │   ├── Header.js
│   │   ├── Navigation.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Personalizing Content

1. **Update Your Name**: Search for `[Your Name]` in [AboutPage.js](src/components/pages/AboutPage.js) and replace with your actual name
2. **Update Email**: Search for `[your-email@example.com]` in [PrivacyPage.js](src/components/pages/PrivacyPage.js) and replace with your email
3. **Add Your Story**: Edit the content in [AboutPage.js](src/components/pages/AboutPage.js) to tell your personal story
4. **Add Real Blog Posts**: Update the blog posts array in [BlogPage.js](src/components/pages/BlogPage.js) with your actual content

### Adding Blog Posts

Blog posts are organized in two parts:

1. **Full blog content**: Create a new `.md` file in [src/blogs/](src/blogs/)
2. **Blog metadata**: Add an entry in [src/blogs/blogData.js](src/blogs/blogData.js)

#### To add a new blog post:

1. Create a markdown file in `src/blogs/` (e.g., `my-new-post.md`)
2. Add the post metadata to `blogData.js`:

```javascript
{
  id: 'my-new-post',
  title: 'Your Post Title',
  date: 'Month Day, Year',
  readTime: 'X min read',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  excerpt: `First paragraph of your post...

  Second paragraph with more details...`,
  fullContent: null // Can be used to load the full .md file if needed
}
```

The blog posts will automatically appear sorted by date (newest first) on the Blog page.

### Connecting the Contact Form

The contact form currently displays a success message without sending data. To make it functional:

1. Set up a backend API endpoint or use a service like Formspree, EmailJS, or Netlify Forms
2. Update the `handleSubmit` function in [ContactPage.js](src/components/pages/ContactPage.js)
3. Add your API endpoint or service configuration

Example with EmailJS:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  // Send email using your service
  await emailjs.send('service_id', 'template_id', formData, 'user_id');

  setShowSuccess(true);
  setFormData({ name: '', email: '', subject: '', message: '' });
};
```

### Changing Colors

Update the CSS variables in [App.css](src/App.css):

```css
:root {
  --peach-light: #f8e8e0;
  --peach-medium: #f0d4c8;
  --rose: #d4a5a5;
  --brown-dark: #6b4e4e;
  --brown-medium: #8a6d6d;
}
```

### Adding Social Media Links

In [ContactPage.js](src/components/pages/ContactPage.js), update the social media links with your actual profiles:

```javascript
<a href="https://instagram.com/yourprofile">Instagram</a>
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

## SEO Features

This blog is fully optimized for search engines:

- **Dynamic Page Titles**: Each page has a unique, keyword-rich title
- **Meta Descriptions**: SEO-friendly descriptions for all pages
- **Open Graph Tags**: Optimized for Facebook, LinkedIn, and Twitter sharing
- **Structured Data**: Schema.org markup for better search results
- **Sitemap & Robots.txt**: Help search engines crawl and index your site
- **Semantic HTML**: Proper HTML5 tags and ARIA labels for accessibility
- **Mobile Optimized**: Responsive design with mobile-first approach

See [SEO-GUIDE.md](SEO-GUIDE.md) for complete SEO documentation and customization instructions.

## Acknowledgments

- Built with React
- Typography: Georgia serif font
- Design: Custom motherhood blog theme

---

**Happy Blogging!** Remember to customize the content to make it your own!

For SEO best practices and launch checklist, see the [SEO Guide](SEO-GUIDE.md).
