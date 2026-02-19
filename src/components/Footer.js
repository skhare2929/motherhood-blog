import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-title">
          <h3>My Motherhood Journey</h3>
          <p>Sharing the joys, challenges, and beautiful chaos of raising little ones</p>
        </div>

        <div className="footer-disclaimer-box">
          <strong>Disclaimer:</strong> I am a mother sharing my personal journey. The content on this blog is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 My Motherhood Journey. All personal experiences shared are not medical advice.</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/disclaimer">Disclaimer</Link>
            <span className="separator" aria-hidden="true">|</span>
            <Link to="/terms">Terms of Use</Link>
            <span className="separator" aria-hidden="true">|</span>
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator" aria-hidden="true">|</span>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
