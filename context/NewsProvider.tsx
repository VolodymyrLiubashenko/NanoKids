import useNewsApi from 'api/hooks/useNewsApi';
import {useContext, createContext} from 'react';
import {reverse, slice, sortBy} from 'lodash';
import newsApi from 'api/newsApi';
import useRouters from 'routes/useRouters';

const initData = [
  {
    id: '1',
    photo: 'Yaroslav.jfif',
    title: 'Назва Статті',
    subTitle: 'Коротке описання статті',
    publishedDate: new Date(),
    body: 'ТекстСтатті',
  },
];

const NewsContext = createContext({
  data: initData,
  news: initData,
  currentNews: {
    id: '1',
    photo: 'Yaroslav.jfif',
    title: 'Назва Статті',
    subTitle: 'Коротке описання статті',
    publishedDate: new Date(),
    body: 'ТекстСтатті',
  },
});

interface NewsContextProviderInterface {
  children: React.ReactNode;
}
const NewsContextProvider: React.FC<NewsContextProviderInterface> = ({
  children,
}) => {
  const {query} = useRouters();
  const data = newsApi.getNews();
  const sortedData = sortBy(data, (o) => o.publishedDate);

  const news = slice(reverse(sortedData), 0, 3);
  const currentNews = news.reduce(
    (res, el) => {
      return el.id === query.newsId ? el : res;
    },
    {
      id: '1',
      photo: 'Yaroslav.jfif',
      title: 'Назва Статті',
      subTitle: 'Коротке описання статті',
      publishedDate: new Date(),
      body: 'ТекстСтатті',
    }
  );
  return (
    <NewsContext.Provider value={{data, news, currentNews}}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};

export default NewsContextProvider;
