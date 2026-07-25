import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'projects', type: 'page', to: '/projects' },
  { label: 'languages', type: 'anchor', id: 'languages' },
  { label: 'blog', type: 'external', href: 'https://medium.com/@nalinarchive' },
  { label: 'velog', type: 'external', href: 'https://velog.io/@nunnalin/posts' },
  { label: 'activities', type: 'page', to: '/activities' },
  { label: 'contact', type: 'anchor', id: 'contact' },
];

const Nav = ({ name, menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleAnchorClick = (e, id) => {
    setMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderLink = (item) => {
    if (item.type === 'external') {
      return (
        <a
          key={item.label}
          href={item.href}
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </a>
      );
    }

    if (item.type === 'page') {
      return (
        <Link
          key={item.label}
          to={item.to}
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <Link
        key={item.label}
        to={isHome ? `#${item.id}` : `/#${item.id}`}
        className="nav-link"
        onClick={(e) => handleAnchorClick(e, item.id)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <Home size={18} strokeWidth={2} />
          {name.split(' ')[0].toLowerCase()}<span>.</span>
        </Link>

        <div className="nav-links">
          {NAV_ITEMS.map(renderLink)}
        </div>

        <button
          className={`menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(renderLink)}
      </div>
    </>
  );
};

export default Nav;
