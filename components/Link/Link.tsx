import Link from 'next/link';
import {StyledLink} from './Link.styled';

interface CustomLinkInterface {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkInterface> = ({href, children}) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default CustomLink;
