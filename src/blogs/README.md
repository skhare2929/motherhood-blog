# Blog Posts

This folder contains all blog post content and metadata for the motherhood blog.

## Current Blog Posts

1. **Sleep Training: Our Journey to Peaceful Nights** (`sleep-training-journey.md`)
   - Date: January 8, 2026
   - Topics: Sleep training methods, our experience, tips for success
   - Tags: Sleep, Baby Sleep, Sleep Training, Parenting Tips

2. **First Foods: Our Baby-Led Weaning Experience** (`baby-led-weaning.md`)
   - Date: January 5, 2026
   - Topics: Baby-led weaning vs purees, safety, first foods, the mess
   - Tags: Feeding, Baby-Led Weaning, First Foods, Starting Solids

3. **Postpartum Reality: What I Wish I Had Known** (`postpartum-reality.md`)
   - Date: January 2, 2026
   - Topics: Physical recovery, emotional changes, identity shifts, support
   - Tags: Postpartum, Mental Health, Motherhood, Recovery, Real Talk

4. **Mom Guilt: Learning to Give Myself Grace** (`mom-guilt-survival.md`)
   - Date: December 28, 2025
   - Topics: Dealing with mom guilt, self-compassion, impossible standards
   - Tags: Mom Guilt, Mental Health, Self-Care, Parenting

5. **The First Year: Milestones, Tears, and Triumph** (`first-year-milestones.md`)
   - Date: December 20, 2025
   - Topics: Month-by-month milestones, challenges, reflections on year one
   - Tags: Milestones, First Year, Baby Development, Reflections

## How Blog Posts Work

### Markdown Files (.md)
Each blog post has a full markdown file with complete content, headers, formatting, etc. These files are for reference and can be used if you want to build a full blog post viewer in the future.

### Blog Data (blogData.js)
The `blogData.js` file contains:
- Blog post metadata (title, date, read time, tags)
- Excerpts for the blog listing page
- Helper functions to sort and filter posts

## Adding a New Blog Post

1. **Create the markdown file**:
   - Name it with kebab-case (e.g., `my-new-post.md`)
   - Include a header section with title, date, read time, and tags
   - Write your full blog content

2. **Add metadata to blogData.js**:
   ```javascript
   {
     id: 'my-new-post',
     title: 'My New Post Title',
     date: 'Month Day, Year',
     readTime: 'X min read',
     tags: ['Tag1', 'Tag2'],
     excerpt: `First 1-2 paragraphs...`,
     fullContent: null
   }
   ```

3. **The post will automatically appear** on the blog page, sorted by date (newest first)

## Blog Post Structure

Each markdown file should follow this structure:

```markdown
# Blog Post Title

**Date:** Month Day, Year
**Read Time:** X min read
**Tags:** Tag1, Tag2, Tag3

---

Introduction paragraph...

## Section Heading

Content...

## Another Section

More content...

---

*Closing thoughts or call to action*

**Disclaimer:** Standard disclaimer text
```

## Future Enhancements

Ideas for extending the blog functionality:

- Add individual blog post pages (click "Read More" to view full post)
- Implement tag filtering on blog page
- Add search functionality
- Include featured images for each post
- Add comment section (using a service like Disqus)
- Create an RSS feed
- Add social sharing buttons
- Implement pagination for many posts
