import {StyledLinkButton} from 'components/Button/Button.styled';
import Image from 'next/image';
import {StyledFooter} from './Footer.styled';

interface FooterPropsInterface {}
const contacts = ['viber', 'telegram', 'instagram', 'phone'];

const Footer: React.FC<FooterPropsInterface> = () => {
  return (
    <StyledFooter>
      <ul>
        {contacts.map((el) => (
          <li key={el}>
            <StyledLinkButton>
              <Image
                src={`/images/${el}.svg`}
                width={30}
                height={30}
                alt={el}
              />
            </StyledLinkButton>
          </li>
        ))}
      </ul>
    </StyledFooter>
  );
};

export default Footer;
