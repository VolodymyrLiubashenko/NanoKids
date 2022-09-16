import {MotionButton} from 'components/Button/Button';
import VideoComponent from 'components/VideoComponent/VideoComponent';
import {Container, variants} from './HomePage.styled';
import {motion} from 'framer-motion';

const HomePage = () => {
  return (
    <Container>
      <motion.h1 initial={'invisible'} animate={'visible'} variants={variants}>
        Запрошуємо дітей віком від 1,8 років на безкоштовне пробне тренування!
      </motion.h1>
      <MotionButton
        title="Записатися"
        initial={'invisible'}
        animate={'visibleButton'}
        variants={variants}
      />
      <VideoComponent src="/video/bgVideo.MOV" />
    </Container>
  );
};
export default HomePage;
