import Header from 'components/Header/Header';
import {Wrapper} from './Layout.styled';
import Footer from 'components/Footer/Footer';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import News from 'components/News/News';

interface LayoutPropsInterface {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPropsInterface> = ({children}) => {
  return (
    <Wrapper>
      <ModalWindow>
        <News />
      </ModalWindow>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
