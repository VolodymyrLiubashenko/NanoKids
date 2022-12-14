import {useContext, createContext, useState, useEffect} from 'react';
import {reverse, slice, sortBy} from 'lodash';
import newsApi from 'api/newsApi';

const initData = {
  id: '1',
  photo: 'Yaroslav.jfif',
  title: 'Назва Статті',
  subTitle: 'Коротке описання статті',
  publishedDate: new Date(),
  body: 'ТекстСтатті',
};

const NewsContext = createContext({
  data: [initData],
  news: [initData],
});

interface NewsContextProviderInterface {
  children: React.ReactNode;
}
const NewsContextProvider: React.FC<NewsContextProviderInterface> = ({
  children,
}) => {
  const data = newsApi.getNews();
  const sortedData = sortBy(data, (o) => o.publishedDate);
  const news = slice(reverse(sortedData), 0, 3);

  return (
    <NewsContext.Provider value={{data, news}}>{children}</NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};

export default NewsContextProvider;
