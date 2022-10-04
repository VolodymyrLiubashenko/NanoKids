import {useModalWindowContext} from 'context/ModalWindowProvider';
import {AnimatePresence} from 'framer-motion';
import {NewsInterface} from 'interfaces/news';
import useRouters from 'routes/useRouters';
import {
  StyledCaruselItem,
  variants,
  contentVariants,
  StyledContentWrapper,
  StyledItemTitle,
  StyledNewsContent,
} from './CaruselItem.styled';

interface CaruseItemPropsInterfacea {
  isActive: boolean;
  index: number;
  handleSetActive: (i: number) => void;
  news: NewsInterface;
}

const CaruselItem: React.FC<CaruseItemPropsInterfacea> = ({
  news,
  isActive,
  index,
  handleSetActive,
}) => {
  const {handleOpen} = useModalWindowContext();
  const {addQueryParams} = useRouters();

  const handleOpenNews = () => {
    addQueryParams({newsId: news.id});
    document.body.classList.add('lock');
    handleOpen();
  };

  return (
    <AnimatePresence initial={false}>
      <StyledCaruselItem
        onClick={handleOpenNews}
        $bgSrc={news.photo}
        initial={index === 0 && 'onHover'}
        animate={isActive ? 'onHover' : 'onHoverOut'}
        onHoverStart={() => {
          handleSetActive(index);
        }}
        variants={variants}
      >
        <StyledContentWrapper>
          <StyledItemTitle
            initial={index === 0 && 'onHoverTitle'}
            animate={isActive ? 'onHoverTitle' : 'onHoverOutTitle'}
            variants={contentVariants}
          >
            {news.title}
          </StyledItemTitle>
          {isActive && (
            <StyledNewsContent
              animate={'onHoverContent'}
              variants={contentVariants}
            >
              {news.subTitle}
            </StyledNewsContent>
          )}
        </StyledContentWrapper>
      </StyledCaruselItem>
    </AnimatePresence>
  );
};

export default CaruselItem;
