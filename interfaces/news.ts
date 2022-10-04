export interface NewsInterface {
  id: string;
  photo: string;
  title: string;
  subTitle: string;
  publishedDate: Date; //MM.DD.YYYY exp (07.05.2022)  5 july 2022
  body: string;
}

const news = [
  {
    id: '1',
    photo: 'newsPhoto.jpg',
    title: 'Назва Статті',
    subTitle: 'Коротке описання статті',
    publishedDate: '09.30.2022',
    body: 'ТекстСтатті',
  },
  {
    photo: 'newsPhoto.jpg',
    title: 'Назва Статті',
    subTitle: 'Коротке описання статті',
    publishedDate: '09.30.2022',
    body: 'ТекстСтатті',
  },
];
