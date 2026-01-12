import React from 'react';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';

const AboutPage = () => {
  usePageSEO(pageSEO.about.title, pageSEO.about.description);

  return (
    <div className="page">
      <section className="content-section">
        <h2>About Me</h2>

        <h3>My Story</h3>
        <p>
          Hello! I'm a mom sharing my journey through the beautiful chaos of parenthood. From sleepless nights
          to heartwarming milestones, I'm documenting it all here. I believe in honest conversations about
          motherhood—the good, the challenging, and everything in between.
        </p>
        <p>
          Before becoming a mother, I never imagined how transformative this journey would be. Now, I can't
          imagine life any other way. This blog is my way of processing the experience, connecting with other
          parents, and creating a space where we can all feel a little less alone in this adventure.
        </p>

        <h3>Why I Started This Blog</h3>
        <p>
          I started this blog because I wanted to share the real side of motherhood. Not the perfectly filtered
          Instagram version, but the messy, beautiful, exhausting, joyful reality. When I was a new mom, I felt
          so isolated and wondered if everyone else had it more together than I did. Spoiler alert: they didn't!
        </p>
        <p>
          My hope is that by sharing my experiences—both the wins and the struggles—other parents will feel
          less alone. Whether you're dealing with sleep regression, figuring out feeding, or just trying to
          survive the toddler years, I want you to know: you're doing great, and it's okay to not have all
          the answers.
        </p>

        <h3>What You'll Find Here</h3>
        <p>On this blog, I share:</p>
        <ul>
          <li><strong>Personal experiences</strong> from my motherhood journey</li>
          <li><strong>Real talk</strong> about the challenges we don't always discuss</li>
          <li><strong>What's worked for us</strong> (and what hasn't!)</li>
          <li><strong>Resources and tips</strong> I've found helpful along the way</li>
          <li><strong>A supportive community</strong> where all parents are welcome</li>
        </ul>

        <h3>My Approach</h3>
        <p>
          I want to be clear: <strong>I am not a medical professional, child development expert, or certified
          anything.</strong> I'm just a mom sharing what I've learned through experience, research, and
          (let's be honest) a lot of trial and error.
        </p>
        <p>
          Everything I share here is my personal experience and perspective. What worked for my family might
          not work for yours, and that's completely normal. Every child is different, every family is different,
          and there's no one "right" way to parent.
        </p>
        <p>
          If you ever have concerns about your child's health, development, or well-being, please consult with
          qualified healthcare professionals. They have the training and expertise to provide proper guidance
          for your specific situation.
        </p>

        <h3>Let's Connect!</h3>
        <p>
          I'd love to hear from you! Whether you want to share your own experiences, ask questions, or just
          say hello, please don't hesitate to reach out. We're all in this together, and I truly believe that
          supporting one another makes the journey so much better.
        </p>
        <p>
          Thank you for being here and for being part of this community. Here's to embracing the beautiful
          mess of motherhood, one day at a time!
        </p>
        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          With love,<br />
          [Your Name]
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
