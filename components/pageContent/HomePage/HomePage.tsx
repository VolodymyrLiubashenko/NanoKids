import CustomSlider from 'components/Slider/Slider';
import MatchSchedule from './components/MatchSchedule/MatchSchedule';
import NewsCarusel from './components/NewsCarusel/NewsCarusel';
import PlayerCard from './components/PlayerCard/PlayerCard';
import useHomePage from './useHomePage';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
};

const HomePage: React.FC = () => {
  const {players} = useHomePage();

  return (
    <>
      <NewsCarusel />
      <MatchSchedule />
      <CustomSlider {...sliderSettings}>
        {players.map((el) => (
          <PlayerCard
            key={el.tshirtNumber}
            name={el.firstName}
            dateOfBirth="12.12.2015"
            $photo="kids1"
            position={el.position}
            tshirtNumber={el.tshirtNumber}
            $team={el.team}
          />
        ))}
      </CustomSlider>
    </>
  );
};
export default HomePage;
