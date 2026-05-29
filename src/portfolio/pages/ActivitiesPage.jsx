import { extracurriculars } from '../data/content';
import Extracurriculars from '../components/Extracurriculars';
import Footer from '../components/Footer';

const ActivitiesPage = () => {
  return (
    <>
      <Extracurriculars extracurriculars={extracurriculars} />
      <Footer />
    </>
  );
};

export default ActivitiesPage;
