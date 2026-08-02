import { experiences } from '../data/content';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const ExperiencePage = () => {
  return (
    <>
      <Experience experiences={experiences} />
      <Footer />
    </>
  );
};

export default ExperiencePage;
