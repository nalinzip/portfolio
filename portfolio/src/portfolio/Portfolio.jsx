import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Nav, ProjectDetail, ActivityDetail } from './components';
import Home from './pages/Home';
import { personalInfo } from './data/content';
import './styles/portfolio.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const PortfolioContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio-container">
      <ScrollToTop />
      <Nav 
        name={personalInfo.name} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
      </Routes>
    </div>
  );
};

const Portfolio = () => {
  return (
    <BrowserRouter>
      <PortfolioContent />
    </BrowserRouter>
  );
};

export default Portfolio;
