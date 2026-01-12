# SEO Launch Checklist

Use this checklist before deploying your motherhood blog to production.

## Pre-Launch Customization

### Domain & URLs
- [ ] Replace all `https://yourdomain.com` in `public/index.html`
- [ ] Update canonical URL in `public/index.html` (line 15)
- [ ] Update all `<loc>` URLs in `public/sitemap.xml`
- [ ] Update sitemap URL in `public/robots.txt`

### Author & Contact Information
- [ ] Update `"Your Name"` in `src/utils/seoConfig.js`
- [ ] Replace `[Your Name]` in `src/components/pages/AboutPage.js`
- [ ] Replace `[your-email@example.com]` in `src/components/pages/PrivacyPage.js`
- [ ] Add real social media URLs in `src/components/pages/ContactPage.js`

### Images & Branding
- [ ] Create Open Graph image (1200x630px)
- [ ] Save as `public/og-image.jpg`
- [ ] Update image URLs in `public/index.html` (lines 22, 31)
- [ ] Create `public/favicon.ico`
- [ ] Create `public/logo192.png`
- [ ] Create `public/logo512.png`

### SEO Content
- [ ] Review all page titles (max 60 characters)
- [ ] Review all meta descriptions (max 160 characters)
- [ ] Customize keywords in `public/index.html` if needed
- [ ] Update blog posts with real content
- [ ] Add alt text to any images you add

## Testing

### Functionality
- [ ] Test all 7 pages load correctly
- [ ] Test navigation between pages
- [ ] Test contact form submission
- [ ] Verify page titles change when navigating
- [ ] Test all footer links work

### SEO Tools
- [ ] Test with Facebook Sharing Debugger
- [ ] Test with Twitter Card Validator
- [ ] Test with LinkedIn Post Inspector
- [ ] Validate structured data with Google Rich Results Test
- [ ] Run Google Mobile-Friendly Test
- [ ] Run PageSpeed Insights (aim for 90+ scores)

### Accessibility
- [ ] Test with WAVE accessibility tool
- [ ] Verify keyboard navigation works
- [ ] Check color contrast ratios
- [ ] Test with screen reader (if possible)

### Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Edge

## Post-Launch Setup

### Search Engines
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Request indexing for homepage
- [ ] Set up email notifications in Search Console

### Analytics
- [ ] Set up Google Analytics 4
- [ ] Add tracking code to site
- [ ] Verify Analytics is receiving data
- [ ] Set up conversion goals (form submissions, etc.)

### Social Media
- [ ] Share launch post on all platforms
- [ ] Join parenting blogger communities
- [ ] Set up social media accounts if you haven't

### Ongoing Monitoring (First 30 Days)
- [ ] Check Search Console weekly for issues
- [ ] Monitor page indexing status
- [ ] Review Analytics weekly for traffic
- [ ] Check for broken links
- [ ] Monitor Core Web Vitals
- [ ] Track target keyword rankings

## Monthly Maintenance

- [ ] Review Search Console performance
- [ ] Check for crawl errors
- [ ] Update sitemap if you added pages
- [ ] Review and improve underperforming pages
- [ ] Check backlinks
- [ ] Update old blog posts if needed
- [ ] Add new blog posts regularly (aim for 2-4/month)

---

## Quick Reference: What To Update

| Item | File Location | What to Change |
|------|---------------|----------------|
| Domain URLs | `public/index.html` | All `yourdomain.com` references |
| Page Titles/Descriptions | `src/utils/seoConfig.js` | `pageSEO` object |
| Author Name | `src/utils/seoConfig.js` | `websiteStructuredData.author.name` |
| Sitemap | `public/sitemap.xml` | All `<loc>` URLs |
| Social Images | `public/index.html` | `og:image` and `twitter:image` |
| Blog Posts | `src/blogs/` | Add new `.md` files |
| Blog Metadata | `src/blogs/blogData.js` | Add post objects |

---

## Need Help?

Refer to [SEO-GUIDE.md](SEO-GUIDE.md) for detailed instructions on any of these items.

---

**Pro Tip:** Don't launch until you've completed at least 80% of the "Pre-Launch Customization" and "Testing" sections!
