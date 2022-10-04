import {
  StyledNewsTitle,
  StyledHeroImage,
  StyledNewsContainer,
  StyledNewsContent,
  StyledNewsFooter,
  StyledNewsWrapper,
  StyledPublickDate,
  variants,
} from './StyledNews';
import useNews from './useNews';

const News: React.FC = () => {
  const {publishedDate, body, photo, title, subTitle} = useNews();

  return (
    <>
      <StyledHeroImage
        $photo={photo}
        variants={variants}
        animate={'animate'}
        initial={'initial'}
      />
      <StyledNewsWrapper>
        <StyledNewsContainer>
          <StyledNewsTitle>
            <h2>{title}</h2>
            <p>{subTitle}</p>
          </StyledNewsTitle>
          <StyledPublickDate>
            <div>
              <span>{publishedDate}</span>
            </div>
            <div>
              <span>fc NanoKids</span>
            </div>
          </StyledPublickDate>
          <StyledNewsContent>
            <p>{body}</p>
          </StyledNewsContent>
          <StyledNewsFooter>
            <div></div>
            NANOKIDS
            <div></div>
          </StyledNewsFooter>
        </StyledNewsContainer>
      </StyledNewsWrapper>
    </>
  );
};

export default News;
