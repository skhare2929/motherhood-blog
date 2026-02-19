import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            aria-current={({ isActive }) => isActive ? 'page' : undefined}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
