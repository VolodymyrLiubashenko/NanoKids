import {MotionButton} from 'components/Button/Button';
import VideoComponent from 'components/VideoComponent/VideoComponent';
import {Container, variants} from './HomePage.styled';
import {motion} from 'framer-motion';
import ContactForm from 'components/ContactForm/ContactForm';
import {useState} from 'react';

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleContactForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.h1 initial={'invisible'} animate={'visible'} variants={variants}>
        Запрошуємо дітей віком від 1,8 років на безкоштовне пробне тренування!
      </motion.h1>
      <MotionButton
        title="Записатися"
        initial={'invisible'}
        animate={'visibleButton'}
        variants={variants}
        onClick={toggleContactForm}
      />
      <VideoComponent src="/video/bgVideo.MOV" />
    </Container>
  );
};
export default HomePage;
