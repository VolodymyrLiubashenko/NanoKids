import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {Wrapper} from './Layout.styled';

interface LayoutPropsInterface {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPropsInterface> = ({children}) => {
  return (
    <Wrapper>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Layout;
