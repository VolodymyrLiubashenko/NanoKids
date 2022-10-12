import {
  StyledFooter,
  StyledFooterContainer,
  StyledSocialMediaRow,
} from './Footer.styled';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem';
import socialMedia from 'constants/socialMediaList';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <h3>Follow FC Nanokids on social media</h3>
        <StyledSocialMediaRow>
          {socialMedia.map((el) => (
            <SocialMediaItem key={el.src} item={el} />
          ))}
        </StyledSocialMediaRow>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

export default Footer;
