import Header from 'components/Header/Header';
import {Wrapper} from './Layout.styled';
import Footer from 'components/Footer/Footer';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import News from 'components/News/News';
import useRouters from 'routes/useRouters';
import WithContactForm from 'components/ContactForm/WithContactForm';

interface LayoutPropsInterface {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPropsInterface> = ({children}) => {
  const {query} = useRouters();

  return (
    <Wrapper>
      <ModalWindow>
        <>
          <News />
          {/* {query.newsId && <News />} */}
          {/* {query.contactForm && <WithContactForm />} */}
        </>
      </ModalWindow>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
