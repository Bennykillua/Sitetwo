// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bennykillua.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Sitetwo/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Bennykillua', // Usually your GitHub org/user name.
  projectName: 'Sitetwo', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/', // this turn off the intro page
          editUrl:
            'https://github.com/bennykillua/Sitetwo/tree/main/',
        },
        blog: false, // remove this link when you want the blog
        // uncomment the below part when you want the blog part again
        // blog: {
        //  showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //  editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Benny',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Blog',
            items: [
              {
                label: 'freeCodeCamp',
                href: 'https://www.freecodecamp.org/news/author/benny/',
              },
              {
                label: 'Waldo',
                href: 'https://www.waldo.com/team/ifeanyi-benedict-iheagwara',
              },
              {
                label: 'Hashnode',
                href: 'https://benny.hashnode.dev/',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@iheifeanyi',
              },
              {
                label: 'GeeksforGeeks',
                href: 'https://auth.geeksforgeeks.org/user/iheifeanyi/articles',
              },
              {
                label: 'Microsoft Power Platform blog profile',
                href: 'https://powerusers.microsoft.com/t5/user/viewprofilepage/user-id/797827',
              },
              {
                label: 'Opensource.com',
                href: 'https://opensource.com/users/benny-ifeanyi',
              },
              {
                label: 'MakeUseOf (MUO)',
                href: 'https://www.makeuseof.com/author/ifeanyi-iheagwara/',
              },
              {
                label: 'UrBizEdge',
                href: 'https://urbizedge.com/author/ifeanyi/',
              },
              {
                label: 'HackerNoon',
                href: 'https://hackernoon.com/u/bennykillua',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Email',
                href: 'mailto:iheifeanyi@gmail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ifeanyi-iheagwara/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Bennykillua',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Bennykillua',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
