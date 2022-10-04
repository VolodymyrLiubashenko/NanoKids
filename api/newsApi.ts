import {NewsInterface} from 'interfaces/news';

interface NewsApiInterface {
  getNews: () => Promise<NewsInterface[]>;
}

const newsApi: NewsApiInterface = {
  getNews: async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/news`,
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }
      );

      const news = await result.json();
      return news;
    } catch (error) {}
  },
};

export default newsApi;
