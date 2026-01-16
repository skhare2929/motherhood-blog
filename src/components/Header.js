import React from 'react';

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="header-text">
          <h1 className="site-title">My Motherhood Journey</h1>
          <p className="site-tagline">Sharing the joys, challenges, and beautiful chaos of raising little ones</p>
        </div>
        <div className="header-logo">
          <img src="/Cuddling.jpeg" alt="Cuddling Logo" className="logo-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
