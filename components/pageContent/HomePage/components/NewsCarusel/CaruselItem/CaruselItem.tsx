import {useModalWindowContext} from 'context/ModalWindowProvider';
import deviceDetector from 'deviceDetector/deviceDetector';
import {AnimatePresence} from 'framer-motion';
import {NewsInterface} from 'interfaces/news';
import {useEffect, useState} from 'react';
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
  const {isMobileDevice} = deviceDetector;
  const [isMobile, setIsMobile] = useState(false);
  const {handleOpenModalWindow} = useModalWindowContext();
  const {addQueryParams} = useRouters();

  useEffect(() => {
    setIsMobile(isMobileDevice);
  }, [isMobileDevice]);

  const handleOpenNews = () => {
    addQueryParams({newsId: news.id});
    document.body.classList.add('lock');
    handleOpenModalWindow();
  };

  return (
    <AnimatePresence initial={false}>
      <StyledCaruselItem
        onClick={handleOpenNews}
        $bgSrc={news.photo}
        initial={isMobile ? undefined : index === 0 && 'onHover'}
        animate={
          isMobile && isActive
            ? 'isMobile'
            : isActive
            ? 'onHover'
            : 'onHoverOut'
        }
        onHoverStart={() => {
          handleSetActive(index);
        }}
        variants={variants}
      >
        <StyledContentWrapper>
          <StyledItemTitle
            initial={
              isMobile ? 'onHoverOutTitle' : index === 0 && 'onHoverTitle'
            }
            animate={
              isMobile
                ? 'onHoverContent'
                : isActive
                ? 'onHoverTitle'
                : 'onHoverOutTitle'
            }
            variants={contentVariants}
          >
            {news.title}
          </StyledItemTitle>
          {(isActive || isMobile) && (
            <StyledNewsContent
              initial={'onHoverContent'}
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
