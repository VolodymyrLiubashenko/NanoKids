import CustomSlider from 'components/Slider/Slider';
import MatchSchedule from './components/MatchSchedule/MatchSchedule';
import NewsCarusel from './components/NewsCarusel/NewsCarusel';
import PlayerCard from './components/PlayerCard/PlayerCard';
import useHomePage from './useHomePage';

const HomePage: React.FC = () => {
  const {isFetched, players} = useHomePage();

  return (
    <>
      <NewsCarusel />
      <MatchSchedule />
      <CustomSlider slidesToShow={3}>
        {isFetched &&
          players.map((el) => (
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
