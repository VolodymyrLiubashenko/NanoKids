import {StyledLinkButton} from 'components/Button/Button.styled';
import CustomLink from 'components/Link/Link';
import Image from 'next/image';
import {StyledFooter} from './Footer.styled';

interface FooterPropsInterface {}

const contacts = [
  {
    name: 'viber',
    href: `viber://chat?number=%2B${process.env.NEXT_PUBLIC_VIBER}`,
  },
  {name: 'telegram', href: `https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM}`},
  {name: 'instagram', href: 'https://www.instagram.com/nanokids_odessa/'},
  {name: 'phone', href: `tel:${process.env.NEXT_PUBLIC_PHONE}`},
];

const Footer: React.FC<FooterPropsInterface> = () => {
  return (
    <StyledFooter>
      <ul>
        {contacts.map((el) => (
          <li key={el.name}>
            <CustomLink href={el.href}>
              test
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
