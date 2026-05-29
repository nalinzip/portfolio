import { projects } from '../data/content';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <>
      <Projects projects={projects} />
      <Footer />
    </>
  );
};

export default ProjectsPage;
