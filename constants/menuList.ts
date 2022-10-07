export interface SubmenuInterface {
  title: string;
  query?: string;
  urlPath?: string;
}

export interface MenuItemInterface {
  name: string;
  urlPath?: string;
  subMenu?: SubmenuInterface[];
}

export const MENU_ITEMS = {
  teams: 'Основні склади',
  years: '1.8-7 років',
  aboutUs: 'Про нас',
  contacts: 'Наші контакти',
  signUp: 'Записатися на тренування',
  socialMedia: 'NanoKids in socials',
};

export const socialMedia: MenuItemInterface = {
  name: MENU_ITEMS.socialMedia,
  urlPath: '',
  subMenu: [
    {title: 'Facebook', urlPath: 'firstTeam'},
    {title: 'Youtube', urlPath: 'secondTeam'},
    {title: 'Twitter', urlPath: 'firstTeam'},
    {title: 'Instagram', urlPath: 'secondTeam'},
    {title: 'Tiktok', urlPath: 'firstTeam'},
  ],
};

export const menuList: MenuItemInterface[] = [
  {
    name: MENU_ITEMS.teams,
    urlPath: '',
    subMenu: [
      {title: '1 команда', query: 'firstTeam'},
      {title: '2 команда', query: 'secondTeam'},
    ],
  },
  {
    name: MENU_ITEMS.years,
    urlPath: '',
  },
  {
    name: MENU_ITEMS.aboutUs,
    urlPath: '',
  },
  {
    name: MENU_ITEMS.contacts,
    urlPath: '',
  },
  {
    name: MENU_ITEMS.signUp,
    urlPath: '',
  },
];
