// Blog post metadata and excerpts
export const blogPosts = [
  {
    id: 'sleep-training-journey',
    title: 'Sleep Training: Our Journey to Peaceful Nights',
    date: 'January 8, 2026',
    readTime: '5 min read',
    tags: ['Sleep', 'Baby Sleep', 'Sleep Training', 'Parenting Tips'],
    excerpt: `After months of sleepless nights and countless wake-ups, we finally decided to try sleep training.
    I'll be honest—I was terrified. Would my baby cry for hours? Would I be able to stick to it? Would it damage
    our bond? These questions kept me up at night (ironically, when I should have been sleeping!).

    Here's what I learned: sleep training isn't a one-size-fits-all solution, and it's not about letting your baby
    "cry it out" endlessly. We found a gentle method that worked for our family, and I'm sharing our experience—the
    good, the challenging, and the surprising moments—in hopes it might help other exhausted parents out there...`,
    fullContent: null // We'll load this dynamically if needed
  },
  {
    id: 'baby-led-weaning',
    title: 'First Foods: Our Baby-Led Weaning Experience',
    date: 'January 5, 2026',
    readTime: '4 min read',
    tags: ['Feeding', 'Baby-Led Weaning', 'First Foods', 'Starting Solids'],
    excerpt: `When it came time to introduce solids, I found myself overwhelmed by all the different approaches.
    Purees? Baby-led weaning? A combination? After doing research and talking to our pediatrician, we decided to
    try baby-led weaning, and it's been such an adventure!

    Watching my little one explore different textures and flavors has been absolutely delightful (and yes, incredibly
    messy). From avocado smeared everywhere to sweet potato in places I didn't know existed, our kitchen has become
    a food-splattered laboratory of tiny taste tests. Here's what we've learned so far and what I wish I'd known
    before we started...`,
    fullContent: null
  },
  {
    id: 'postpartum-reality',
    title: 'Postpartum Reality: What I Wish I Had Known',
    date: 'January 2, 2026',
    readTime: '6 min read',
    tags: ['Postpartum', 'Mental Health', 'Motherhood', 'Recovery', 'Real Talk'],
    excerpt: `Nobody really prepares you for postpartum. Sure, people mention that you'll be tired and that recovery
    takes time, but the reality is so much more complex than that. The physical changes, the emotional rollercoaster,
    the identity shift—it's all so overwhelming, and yet we're expected to just "bounce back" and know exactly what
    to do with this tiny human.

    In this post, I'm getting real about my postpartum experience. From the parts that surprised me to the things I
    wish someone had told me beforehand, I'm sharing it all. If you're currently in the postpartum trenches, please
    know: what you're feeling is valid, you're not alone, and it does get better. Here's what I learned during those
    first few months...`,
    fullContent: null
  },
  {
    id: 'mom-guilt-survival',
    title: 'Mom Guilt: Learning to Give Myself Grace',
    date: 'December 28, 2025',
    readTime: '5 min read',
    tags: ['Mom Guilt', 'Mental Health', 'Self-Care', 'Parenting'],
    excerpt: `Can we talk about mom guilt? Because it's been eating me alive lately, and I'm willing to bet I'm not alone.
    Mom guilt is that nagging voice that tells you you're never doing enough. That you're failing your child in a
    thousand tiny ways every single day. That everyone else has it figured out except you.

    Let me tell you about my week of peak mom guilt—ordering takeout, needing breaks, losing my patience, giving
    screen time. Everything made me feel like I was failing. But here's what I'm learning about giving myself grace,
    talking back to the guilt, and remembering what really matters at the end of the day...`,
    fullContent: null
  },
  {
    id: 'first-year-milestones',
    title: 'The First Year: Milestones, Tears, and Triumph',
    date: 'December 20, 2025',
    readTime: '5 min read',
    tags: ['Milestones', 'First Year', 'Baby Development', 'Reflections'],
    excerpt: `We're approaching my baby's first birthday, and I'm a mess of emotions. How did we go from a tiny,
    helpless newborn to this curious, mobile, babbling little person in just 12 months? Everyone told me it would
    go fast. I didn't believe them during those endless 3 AM wake-ups. But here we are, and they were right.

    Let me take you through our first year—from survival mode in month one to those first wobbly steps at month
    twelve. The milestones (official and unofficial), the challenges, the sleep regressions, and the unexpected
    moments that made it all worthwhile. Here's what this incredible, exhausting, beautiful year taught me...`,
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
