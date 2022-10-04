import Image from 'next/image';
import {StyledSocialMedia, StyledSocialMediaLinks} from './SocialMedia.styled';
import CustomLink from 'components/Link/Link';
import socialMedia from 'constants/socialMediaList';

const SocialMedia: React.FC = () => {
  return (
    <StyledSocialMedia>
      <h4>Follow FC Nanokids</h4>
      <StyledSocialMediaLinks>
        {socialMedia.map((el) => (
          <CustomLink key={el.src} href={``}>
            <Image
              src={`/images/socialLinks/${el.src}.svg`}
              alt={`${el.src}`}
              width={20}
              height={20}
            />
          </CustomLink>
        ))}
      </StyledSocialMediaLinks>
    </StyledSocialMedia>
  );
};

export default SocialMedia;
