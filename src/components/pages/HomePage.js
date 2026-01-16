import ReactMarkdown from 'react-markdown';
import DisclaimerBanner from '../common/DisclaimerBanner';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';
import homeContent from '../../content/home.md';

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
        <ReactMarkdown>{homeContent}</ReactMarkdown>
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
