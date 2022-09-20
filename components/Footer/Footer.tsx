import {StyledLinkButton} from 'components/Button/Button.styled';
import CustomLink from 'components/Link/Link';
import Image from 'next/image';
import {StyledFooter} from './Footer.styled';

interface FooterPropsInterface {}

const contacts = [
  {name: 'viber', href: 'tel:+380131226'},
  {name: 'telegram', href: 'https://t.me/nanokidsbest'},
  {name: 'instagram', href: 'https://www.instagram.com/nanokids_odessa/'},
  {name: 'phone', href: 'tel:+380131226'},
];

const Footer: React.FC<FooterPropsInterface> = () => {
  return (
    <StyledFooter>
      <ul>
        {contacts.map((el) => (
          <li key={el.name}>
            <CustomLink href={el.href}>
              <Image
                src={`/images/${el.name}.svg`}
                width={30}
                height={30}
                alt={el.name}
              />
            </CustomLink>
          </li>
        ))}
      </ul>
    </StyledFooter>
  );
};

export default Footer;
