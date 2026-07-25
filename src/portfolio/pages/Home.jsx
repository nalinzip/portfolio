import { Hero, Projects, Skills, Languages, Awards, Blog, Extracurriculars, Contact, Footer } from '../components';
import { personalInfo, projects, languageTests, skills, awards, blogs, extracurriculars } from '../data/content';

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

      <Awards awards={awards} />

      <Blog blogs={blogs} />

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
