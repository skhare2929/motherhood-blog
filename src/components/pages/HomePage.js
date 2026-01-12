import React from 'react';
import DisclaimerBanner from '../common/DisclaimerBanner';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';

const HomePage = ({ setCurrentPage }) => {
  usePageSEO(pageSEO.home.title, pageSEO.home.description);
  const topics = [
    { icon: '💤', title: 'Sleep & Routines', description: 'Bedtime battles, sleep training, and finding what works for your family' },
    { icon: '🍼', title: 'Feeding Journey', description: 'Breastfeeding, formula feeding, starting solids, and picky eaters' },
    { icon: '💗', title: 'Postpartum Life', description: 'The realities of recovery, mental health, and finding yourself again' },
    { icon: '🌱', title: 'Milestones', description: 'First smiles, first steps, and celebrating every precious moment' }
  ];

  return (
    <div className="page">
      <DisclaimerBanner />

      <section className="content-section">
        <h2>Welcome to My Motherhood Journey!</h2>
        <p>
          Hi there! I'm so glad you're here. This little corner of the internet is where I share the real, unfiltered
          experiences of motherhood—the beautiful moments, the challenging days, and everything in between. Whether
          you're a new parent looking for reassurance or a seasoned pro who just needs to know you're not alone,
          I hope you'll find comfort and community here.
        </p>
        <p>
          This blog is my personal diary of navigating the wonderful chaos of raising little ones. I share what's
          worked for us, what hasn't, and the lessons I'm learning along the way. Remember, every family is different,
          and what works for mine might not work for yours—and that's perfectly okay!
        </p>
      </section>

      <section className="content-section">
        <h2>What You'll Find Here</h2>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <div className="topic-icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-section">
        <button
          className="cta-button"
          onClick={() => {
            setCurrentPage('blog');
            window.scrollTo(0, 0);
          }}
        >
          Read the Blog
        </button>
      </div>
    </div>
  );
};

export default HomePage;
