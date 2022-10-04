interface SubmenuInterface {
  title: string;
  query: string;
}

export interface MenuItemInterface {
  name: string;
  urlPath?: string;
  subMenu?: SubmenuInterface[];
}

export const menuList: MenuItemInterface[] = [
  {
    name: 'Основні склади',
    urlPath: '',
    subMenu: [
      {title: '1 команда', query: 'firstTeam'},
      {title: '2 команда', query: 'secondTeam'},
    ],
  },
  {
    name: '1.8-7 років',
    urlPath: '',
  },
  {
    name: 'Про нас',
    urlPath: '',
  },
  {
    name: 'Наші контакти',
    urlPath: '',
  },
  {
    name: 'Записатися на тренування',
    urlPath: '',
  },
];
