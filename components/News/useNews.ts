import {useState, useEffect} from 'react';
import {useNewsContext} from 'context/NewsProvider';
import useDate from 'hooks/useDate';
import useRouters from 'routes/useRouters';

const initCurrentUser = {
  id: '1',
  photo: 'Yaroslav.jfif',
  title: '',
  subTitle: '',
  publishedDate: new Date(),
  body: 'string',
};

const useNews = () => {
  const {currentNews} = useNewsContext();
  const {formatDate} = useDate();
  const publishedDate = formatDate(currentNews.publishedDate, 'EEEE d MMMM');

  return {...currentNews, publishedDate};
};

export default useNews;
