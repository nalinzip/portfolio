import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Nav, ProjectDetail, ActivityDetail, Hero, Skills, Languages, Awards, Contact, Footer } from './components';
import { personalInfo, languageTests, skills, awards } from './data/content';
import ProjectsPage from './pages/ProjectsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ExperiencePage from './pages/ExperiencePage';
import './styles/portfolio.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const Home = () => {
  return (
    <>
      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        bio={personalInfo.bio}
      />
      <Skills skills={skills} />
      <Languages languageTests={languageTests} />
      <Awards awards={awards} />
      <Contact
        email={personalInfo.email}
        github={personalInfo.github}
        linkedin={personalInfo.linkedin}
      />
      <Footer />
    </>
  );
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
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
      </Routes>
    </div>
  );
};

const Portfolio = () => {
  return (
    <HashRouter>
      <PortfolioContent />
    </HashRouter>
  );
};

export default Portfolio;
