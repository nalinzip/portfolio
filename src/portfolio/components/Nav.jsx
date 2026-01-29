import { Link, useLocation } from 'react-router-dom';

const Nav = ({ name, menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navItems = ['projects', 'languages', 'activities', 'contact'];

  const handleNavClick = (e, targetId) => {
    if (isHome) {
      e.preventDefault();
      setMenuOpen(false);
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">
          {name.split(' ')[0].toLowerCase()}<span>.</span>
        </Link>
        
        <div className="nav-links">
          {navItems.map(item => (
            <Link 
              key={item}
              to={isHome ? `#${item}` : `/#${item}`}
              className="nav-link"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item}
            </Link>
          ))}
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
        {navItems.map(item => (
          <Link 
            key={item}
            to={isHome ? `#${item}` : `/#${item}`}
            className="nav-link"
            onClick={(e) => handleNavClick(e, item)}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Nav;
