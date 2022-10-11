import {useState, useEffect} from 'react';
import {useNewsContext} from 'context/NewsProvider';
import useDate from 'hooks/useDate';
import useRouters from 'routes/useRouters';

const initCurrentNews = {
  id: '',
  photo: 'Yaroslav.jfif',
  title: '',
  subTitle: '',
  publishedDate: new Date(),
  body: '',
};

const useNews = () => {
  const {query} = useRouters();
  const {news} = useNewsContext();
  const {formatDate} = useDate();
  const [currentNews, setCurrentNews] = useState(initCurrentNews);

  useEffect(() => {
    const activeNews = news.reduce((res, el) => {
      return el.id === query.newsId ? el : res;
    }, initCurrentNews);
    setCurrentNews(activeNews);
  }, [query.newsId, news]);

  const publishedDate = formatDate(currentNews.publishedDate, 'EEEE d MMMM');
  return {...currentNews, publishedDate};
};

export default useNews;
