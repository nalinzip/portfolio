import { Hero, Projects, Skills, Languages, Extracurriculars, Contact, Footer } from '../components';
import { personalInfo, projects, languageTests, skills, extracurriculars } from '../data/content';

const Home = () => {
  return (
    <>
      <Hero 
        name={personalInfo.name}
        title={personalInfo.title}
        bio={personalInfo.bio}
      />
      
      <Projects projects={projects} />
      
      <Skills skills={skills} />
      
      <Languages languageTests={languageTests} />

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

export default Home;
