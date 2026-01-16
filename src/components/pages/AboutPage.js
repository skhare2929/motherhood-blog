import ReactMarkdown from 'react-markdown';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';
import aboutContent from '../../content/about.md';

const AboutPage = () => {
  usePageSEO(pageSEO.about.title, pageSEO.about.description);

  return (
    <div className="page">
      <section className="content-section">
        <ReactMarkdown>{aboutContent}</ReactMarkdown>
      </section>
    </div>
  );
};

export default AboutPage;
