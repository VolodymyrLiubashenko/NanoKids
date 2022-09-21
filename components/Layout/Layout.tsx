import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {Wrapper} from './Layout.styled';
import ContactForm from 'components/ContactForm/ContactForm';

interface LayoutPropsInterface {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<LayoutPropsInterface> = ({
  children,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Wrapper>
      <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
