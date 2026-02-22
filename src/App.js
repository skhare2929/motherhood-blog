import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import BlogPage from './components/pages/BlogPage';
import BlogPostPage from './components/pages/BlogPostPage';
import DisclaimerPage from './components/pages/DisclaimerPage';
import TermsPage from './components/pages/TermsPage';
import PrivacyPage from './components/pages/PrivacyPage';
import ContactPage from './components/pages/ContactPage';
import StructuredData from './components/common/StructuredData';
import { websiteStructuredData } from './utils/seoConfig';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.gtag) {
      window.gtag('event', 'page_view', { page_path: pathname });
    }
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <StructuredData data={websiteStructuredData} />
      <Header />
      <Navigation />
      <main className="main-content" role="main" id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
