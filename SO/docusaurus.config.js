// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Operating Systems',
  url: 'https://sergiu121.github.io/',
  baseUrl: '/operating-systems-oer/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SO',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg'
          
        },
        items: [
          /* {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Intro',
          }, */
          {
            to: '/Lecture',
            label: 'Lecture',
            position: 'left',
          },
          {
            to: '/Lab',
            label: 'Lab',
            position: 'left',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Main site',
                href: 'https://curs.upb.ro',
              },
              {
                label: 'OCW',
                href: 'https://ocw.cs.pub.ro/courses/so',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/sisteme.de.operare/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SO Team`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        }
      }
    }),
};

module.exports = config;