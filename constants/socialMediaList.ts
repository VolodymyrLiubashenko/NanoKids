export interface SocialMediaItemInterface {
  src: string;
  title: string;
  nickName: string;
  bgColor: string;
  urlPath: string;
}

const socialMedia: SocialMediaItemInterface[] = [
  {
    bgColor: '#3b5998',
    src: 'facebook',
    title: 'Facebook',
    nickName: '@nanokids',
    urlPath: 'https://www.instagram.com/nanokids.odessa/',
  },
  {
    bgColor: '#b00',
    src: 'youtube',
    title: 'Youtube',
    nickName: '@nanokids',
    urlPath: 'https://www.instagram.com/nanokids.odessa/',
  },
  {
    bgColor: '#55acee',
    src: 'twitter',
    title: 'Twitter',
    nickName: '@nanokids',
    urlPath: 'https://www.instagram.com/nanokids.odessa/',
  },
  {
    bgColor:
      'radial-gradient(circle farthest-corner at 35% 90%,#fec564,transparent 50%),radial-gradient(circle farthest-corner at 0 140%,#fec564,transparent 50%),radial-gradient(ellipse farthest-corner at 0 -25%,#5258cf,transparent 50%),radial-gradient(ellipse farthest-corner at 20% -50%,#5258cf,transparent 50%),radial-gradient(ellipse farthest-corner at 100% 0,#893dc2,transparent 50%),radial-gradient(ellipse farthest-corner at 60% -20%,#893dc2,transparent 50%),radial-gradient(ellipse farthest-corner at 100% 100%,#d9317a,transparent),linear-gradient(#6559ca,#bc318f 30%,#e33f5f 50%,#f77638 70%,#fec66d)',
    src: 'instagram',
    title: 'Instagram',
    nickName: '@nanokids',
    urlPath: 'https://www.instagram.com/nanokids.odessa/',
  },
  {
    bgColor: '#000',
    src: 'tiktok',
    title: 'Tiktok',
    nickName: '@nanokids',
    urlPath: 'https://www.instagram.com/nanokids.odessa/',
  },
];

export default socialMedia;
