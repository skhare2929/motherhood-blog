# Blog Posts

This folder contains all blog post content and metadata for the motherhood blog.

## Current Blog Posts

1. **The Joy I Forgot to Mention** (`the-joy-i-forgot-to-mention.md`)
   - Date: March 17, 2026
   - Topics: Joy in the newborn phase, gratitude, the moments we forget to mention
   - Tags: Motherhood, Newborn, Gratitude, Postpartum

2. **The Sleep Chapter** (`the-sleep-chapter.md`)
   - Date: March 9, 2026
   - Topics: Newborn sleep, sleep training decision, finding a rhythm
   - Tags: Motherhood, New Parents, Baby Sleep, Postpartum

3. **The Debt That Was Never Theirs to Carry** (`why-the-debt.md`)
   - Date: March 2, 2026
   - Topics: Cultural expectations, parenting philosophy, gratitude
   - Tags: Motherhood, Parenting, Culture, Breaking Stereotypes

4. **The Silent Efforts of a Partner** (`the-silent-partner.md`)
   - Date: February 22, 2026
   - Topics: Partnership, postpartum support, relationship dynamics
   - Tags: Motherhood, Relationships, Postpartum, Parenting Journey

5. **The Isolation** (`the-isolation.md`)
   - Date: February 17, 2026
   - Topics: Postpartum isolation, breastfeeding, mental health
   - Tags: Motherhood, Postpartum, Breastfeeding, Mental Health

6. **The Day ONE...** (`the-day-one.md`)
   - Date: January 23, 2026
   - Topics: Bringing baby home, first-time parenting, early days
   - Tags: Motherhood, New Parents, First Baby, Parenting Journey

7. **Lost Me; Found Me** (`lost-me-found-me.md`)
   - Date: January 14, 2026
   - Topics: Identity, self-discovery, personal journey through parenting
   - Tags: Motherhood, Self-Discovery, Personal Journey, Parenting

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
