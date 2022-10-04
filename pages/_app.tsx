import type {AppProps} from 'next/app';
import GlobalStyle from 'styles/globalStyles';
import QueryProvider from 'context/QueryProvider';
import TeamContextProvider from 'context/TeamProvider';
import ModalWindowProvider from 'context/ModalWindowProvider';
import NewsContextProvider from 'context/NewsProvider';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ModalWindowProvider>
      <QueryProvider>
        <NewsContextProvider>
          <TeamContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </TeamContextProvider>
        </NewsContextProvider>
      </QueryProvider>
    </ModalWindowProvider>
  );
}

export default MyApp;
