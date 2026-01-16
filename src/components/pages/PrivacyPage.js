import React from 'react';
import HighlightBox from '../common/HighlightBox';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';

const PrivacyPage = () => {
  usePageSEO(pageSEO.privacy.title, pageSEO.privacy.description);

  return (
    <div className="page">
      <section className="content-section">
        <h2>Privacy Policy</h2>
        <p>
          Your privacy matters to me. This policy explains what information I collect and how I use it.
          I've kept it as simple and jargon-free as possible!
        </p>

        <h3>Information I Collect</h3>
        <h4>Information You Provide:</h4>
        <ul>
          <li><strong>Contact Form:</strong> When you contact me, I collect your name and email address</li>
          <li><strong>Newsletter Signup:</strong> If you subscribe to my newsletter, I collect your email address</li>
          <li><strong>Comments:</strong> If you leave comments, I may collect your name and email</li>
        </ul>

        <h4>Information Collected Automatically:</h4>
        <ul>
          <li><strong>Usage Data:</strong> Like most websites, I collect basic information about how visitors use the blog (pages visited, time spent, etc.)</li>
          <li><strong>Technical Information:</strong> Your IP address, browser type, and device information may be collected</li>
          <li><strong>Cookies:</strong> Small files stored on your device to help the website function properly</li>
        </ul>

        <h3>How I Use Your Information</h3>
        <p>I use the information I collect to:</p>
        <ul>
          <li>Send you my newsletter (only if you've subscribed)</li>
          <li>Respond to your messages and questions</li>
          <li>Improve the blog and create content you'll find helpful</li>
          <li>Prevent spam and abuse</li>
          <li>Understand which content is most valuable to readers</li>
        </ul>

        <h3>Email Newsletter</h3>
        <p>
          If you sign up for my newsletter, I'll send you updates about new blog posts and occasional parenting
          resources I think you'll find helpful. That's it!
        </p>
        <ul>
          <li>I will NEVER sell your email address</li>
          <li>I will NEVER spam you</li>
          <li>You can unsubscribe at any time with one click</li>
        </ul>

        <h3>Cookies</h3>
        <p>
          This website uses cookies to function properly and improve your experience. Cookies are small text
          files stored on your device. You can control cookies through your browser settings, but disabling
          them may affect website functionality.
        </p>

        <h3>Third-Party Services</h3>
        <p>
          I may use third-party services like Google Analytics to understand how visitors use the blog. These
          services have their own privacy policies, and I encourage you to review them.
        </p>

        <h3>Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information I have about you</li>
          <li>Request corrections to your information</li>
          <li>Request deletion of your information</li>
          <li>Unsubscribe from my newsletter at any time</li>
          <li>Opt out of certain data collection</li>
        </ul>

        <h3>Children's Privacy</h3>
        <p>
          This blog is written by a parent for parents, but it's not directed at children under 13. I don't
          knowingly collect information from children. If you're under 13, please don't submit any personal
          information to this website.
        </p>

        <h3>Changes to This Policy</h3>
        <p>
          I may update this privacy policy from time to time. If I make significant changes, I'll post a notice
          on the blog. Your continued use of the blog after changes means you accept the updated policy.
        </p>

        <h3>Contact Me</h3>
        <p>
          If you have questions about this privacy policy or how I handle your information, please feel free to contact me through the Contact page.
      
        </p>

        <HighlightBox>
          <strong>My Privacy Commitment:</strong> I respect your privacy as much as I value my own family's
          privacy. I'll never share, sell, or misuse your personal information. Period.
        </HighlightBox>
      </section>
    </div>
  );
};

export default PrivacyPage;
