import Image from 'next/image';
import {
  StyledSocialMediaItem,
  StyledIcon,
  variants,
  StyledSocialMediaItemPropsInterface,
} from './SocialMediaItem.styled';

interface SocialMediaItemPropsInterface
  extends StyledSocialMediaItemPropsInterface {
  src: string;
  title: string;
  nickName: string;
}

const SocialMediaItem: React.FC<SocialMediaItemPropsInterface> = ({
  src,
  $bgColor,
  title,
  nickName,
}) => {
  return (
    <StyledSocialMediaItem
      $bgColor={$bgColor}
      variants={variants}
      whileHover={'onHower'}
    >
      <StyledIcon>
        <Image
          src={`/images/socialLinks/${src}.svg`}
          alt={`${src}`}
          width={30}
          height={30}
        />
      </StyledIcon>
      <h6>{title}</h6>
      <p>{nickName}</p>
    </StyledSocialMediaItem>
  );
};

export default SocialMediaItem;
