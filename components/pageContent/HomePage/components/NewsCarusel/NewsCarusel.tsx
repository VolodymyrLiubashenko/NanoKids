import {useNewsContext} from 'context/NewsProvider';
import {useState} from 'react';
import CaruselItem from './CaruselItem/CaruselItem';
import {StyledCaruselContainer} from './NewsCarusel.styled';

const NewsCarusel: React.FC = () => {
  const {news} = useNewsContext();
  console.log('news: ', news);

  const [activeIndex, setActiveIndex] = useState(0);
  const handleSetActive = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <StyledCaruselContainer>
      {news.map((el, i) => (
        <CaruselItem
          isActive={i === activeIndex}
          index={i}
          handleSetActive={handleSetActive}
          key={el.id}
          news={el}
        />
      ))}
    </StyledCaruselContainer>
  );
};

export default NewsCarusel;
