import React from 'react';

const Navigation = ({ currentPage, navigateTo }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'blog', label: 'Blog' }
  ];

  const handleNavClick = (pageId) => {
    navigateTo(pageId);
  };

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.id);
            }}
            aria-current={currentPage === item.id ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
