import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Nav, ProjectDetail, ActivityDetail, Hero, Projects, Skills, Languages, Extracurriculars, Contact, Footer } from './components';
import { personalInfo, projects, languageTests, skills, extracurriculars } from './data/content';
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
      <Projects projects={projects} />
      <Extracurriculars extracurriculars={extracurriculars} />
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