import React from 'react';
import HighlightBox from '../common/HighlightBox';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';

const TermsPage = () => {
  usePageSEO(pageSEO.terms.title, pageSEO.terms.description);

  return (
    <div className="page">
      <section className="content-section">
        <h2>Terms of Use</h2>
        <p>
          Welcome! By using this blog, you agree to these terms. I've tried to keep them simple and straightforward
          because we're all busy parents here!
        </p>

        <h3>Copyright & Content Ownership</h3>
        <p>
          All content on this blog—including blog posts, photos, graphics, and personal stories—is my original
          work and is protected by copyright law.
        </p>

        <h4>What You CAN Do:</h4>
        <ul>
          <li>Read and enjoy the content</li>
          <li>Share links to my blog posts on social media</li>
          <li>Quote brief excerpts (1-2 sentences) with proper attribution and a link back to the original post</li>
          <li>Print articles for personal, non-commercial use</li>
        </ul>

        <h4>What You CANNOT Do:</h4>
        <ul>
          <li>Copy entire blog posts or substantial portions and republish them elsewhere</li>
          <li>Use my photos, especially any photos of my children, without explicit written permission</li>
          <li>Claim my content as your own</li>
          <li>Use my content for commercial purposes without permission</li>
          <li>Modify my content and present it as if I wrote the modified version</li>
        </ul>

        <HighlightBox>
          <strong>SPECIAL NOTE:</strong> Photos of my children are absolutely off-limits. Please do not save,
          share, or repost any images containing my children. Their privacy and safety are my top priority.
        </HighlightBox>

        <h3>Comment Policy: Keeping Our Space Kind</h3>
        <p>
          I want this blog to be a supportive community where parents can feel safe sharing and connecting.
          To maintain that environment, I have a few guidelines for comments and interactions.
        </p>

        <h4>What I Welcome:</h4>
        <ul>
          <li>Respectful discussion and differing viewpoints</li>
          <li>Sharing your own experiences and what worked for your family</li>
          <li>Supportive and encouraging words</li>
          <li>Constructive questions and conversations</li>
        </ul>

        <h4>What I Don't Allow:</h4>
        <ul>
          <li>Hate speech, discrimination, or bullying of any kind</li>
          <li>Spam or promotional content</li>
          <li>Giving medical advice to other readers</li>
          <li>Mom-shaming or judging other parents' choices</li>
          <li>Inappropriate or offensive content</li>
          <li>Personal attacks</li>
        </ul>

        <HighlightBox>
          <strong>The Golden Rule:</strong> We're all doing our best as parents. Let's support each other
          rather than tear each other down. If you wouldn't say it to a friend who's having a rough day,
          don't say it here.
        </HighlightBox>

        <p>
          I reserve the right to delete comments that violate these guidelines and to block users who
          repeatedly disregard them.
        </p>

        <h3>User-Generated Content</h3>
        <p>
          If you comment on this blog or submit content, you grant me permission to use, modify, and display
          that content on this blog and related social media. You retain ownership of your content, but you're
          giving me a license to use it.
        </p>

        <h3>Links to Other Websites</h3>
        <p>
          This blog may contain links to other websites. I'm not responsible for the content, privacy practices,
          or terms of use of external sites. Please review their policies before engaging with them.
        </p>

        <h3>Product Recommendations</h3>
        <p>
          When I recommend products, it's based on my genuine experience. Some links may be affiliate links,
          meaning I may earn a small commission if you make a purchase (at no extra cost to you). I only
          recommend products I actually use and believe in.
        </p>

        <h3>Changes to Terms</h3>
        <p>
          I may update these terms occasionally. Significant changes will be noted on the blog. Continued use
          of the blog after changes means you accept the updated terms.
        </p>

        <h3>Termination</h3>
        <p>
          I reserve the right to terminate access to this blog for anyone who violates these terms or engages
          in behavior that's harmful to the community.
        </p>

        <h3>Questions?</h3>
        <p>
          If you have questions about these terms or anything else, please feel free to contact me through
          the Contact page.
        </p>

        <HighlightBox>
          <strong>Thank you</strong> for being part of this community and for helping keep it a positive,
          supportive space for all parents!
        </HighlightBox>
      </section>
    </div>
  );
};

export default TermsPage;
