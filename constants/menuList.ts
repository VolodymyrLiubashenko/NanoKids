type Query = {
  [key: string]: string;
};

export interface SubmenuInterface {
  title: string;
  query?: Query;
  urlPath?: string;
}

export interface MenuItemInterface {
  name: string;
  urlPath?: string;
  query?: Query;
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
    {
      title: 'Facebook',
      urlPath: 'https://www.instagram.com/nanokids.odessa/',
    },
    {title: 'Youtube', urlPath: 'https://www.youtube.com/shorts/IgFGT4xh1Xc'},
    {title: 'Twitter', urlPath: 'https://www.instagram.com/nanokids.odessa/'},
    {title: 'Instagram', urlPath: 'https://www.instagram.com/nanokids.odessa/'},
    {title: 'Tiktok', urlPath: 'https://www.instagram.com/nanokids.odessa/'},
  ],
};

export const menuList: MenuItemInterface[] = [
  {
    name: MENU_ITEMS.teams,
    urlPath: '',
    subMenu: [
      {title: '1 команда', query: {team: 'firstTeam'}},
      {title: '2 команда', query: {team: 'secondTeam'}},
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
    query: {contactForm: 'true'},
  },
];
