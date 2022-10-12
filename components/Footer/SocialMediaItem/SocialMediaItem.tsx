import Image from 'next/image';
import {
  StyledSocialMediaItem,
  StyledIcon,
  variants,
} from './SocialMediaItem.styled';
import {SocialMediaItemInterface} from 'constants/socialMediaList';
import useRouters from 'routes/useRouters';

interface SocialMediaItemPropsInterface {
  item: SocialMediaItemInterface;
}

const SocialMediaItem: React.FC<SocialMediaItemPropsInterface> = ({item}) => {
  const {goToSelectedPage} = useRouters();

  const handleClick = () => {
    goToSelectedPage(item.urlPath);
  };
  return (
    <StyledSocialMediaItem
      $bgColor={item.bgColor}
      variants={variants}
      whileHover={'onHower'}
      onClick={handleClick}
    >
      <StyledIcon>
        <Image
          src={`/images/socialLinks/${item.src}.svg`}
          alt={`${item.src}`}
          width={30}
          height={30}
        />
      </StyledIcon>
      <h6>{item.title}</h6>
      <p>{item.nickName}</p>
    </StyledSocialMediaItem>
  );
};

export default SocialMediaItem;
