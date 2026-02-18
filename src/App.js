import React, { useState, useEffect } from 'react';
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

const getInitialStateFromURL = () => {
  const path = window.location.pathname;
  if (path.startsWith('/blog/')) {
    const postId = path.replace('/blog/', '');
    return { page: 'blog-post', postId };
  }
  const pageMap = { '/blog': 'blog', '/about': 'about', '/contact': 'contact', '/disclaimer': 'disclaimer', '/terms': 'terms', '/privacy': 'privacy' };
  return { page: pageMap[path] || 'home', postId: null };
};

function App() {
  const initial = getInitialStateFromURL();
  const [currentPage, setCurrentPage] = useState(initial.page);
  const [currentPostId, setCurrentPostId] = useState(initial.postId);

  const navigateTo = (page, postId = null) => {
    setCurrentPage(page);
    setCurrentPostId(postId);
    const url = page === 'blog-post' ? `/blog/${postId}` : page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page, postId }, '', url);
    window.scrollTo(0, 0);
  };

  const navigateToPost = (postId) => navigateTo('blog-post', postId);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state) {
        setCurrentPage(e.state.page || 'home');
        setCurrentPostId(e.state.postId || null);
      } else {
        setCurrentPage('home');
        setCurrentPostId(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={(p) => navigateTo(p)} />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage navigateToPost={navigateToPost} />;
      case 'blog-post':
        return <BlogPostPage postId={currentPostId} setCurrentPage={(p) => navigateTo(p)} />;
      case 'disclaimer':
        return <DisclaimerPage />;
      case 'terms':
        return <TermsPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={(p) => navigateTo(p)} />;
    }
  };

  return (
    <div className="App">
      <StructuredData data={websiteStructuredData} />
      <Header />
      <Navigation currentPage={currentPage} navigateTo={navigateTo} />
      <main className="main-content" role="main" id="main-content">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;
