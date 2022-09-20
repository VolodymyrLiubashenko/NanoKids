import type {AppProps} from 'next/app';
import GlobalStyle from 'styles/globalStyles';
import Layout from 'components/Layout/Layout';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
