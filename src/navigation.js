import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { config } from './config';

const siteName = config.site.name;
const homePageUrl = config.site.site;
export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Support',
      links: [
      {
        text: 'Contact Us',
        href: getPermalink('/contact'),
      },
      {
        text: 'Disclaimer',
        href: getPermalink('/disclaimer'),
      },
      {
        text: 'Privacy Policy',
        href: getPermalink('/privacy'),
      },
    ],
  },
    {
      text: 'About Us',
      href: '/about',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Categories',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Tag Page', href: getPermalink('astro', 'tag') },
        { text: 'Category Page', href: getPermalink('tutorials', 'category') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact Us', href: '/contact' },
        { text: 'Disclaimer', href: '/disclaimer' },
        { text: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="${homePageUrl}"> ${siteName}</a> · All rights reserved.
    <br><br><p class="italic  ">We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn commissions by linking to Amazon.com and affiliated sites.</p>
  `,
};