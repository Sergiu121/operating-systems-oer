// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'intro',
    {
      type: 'category',
      label: 'Lecture',
      link: {
        type: 'generated-index',
        title: 'Lecture',
        slug: '/Lecture/',
      },
      items: [
        {
          type: 'doc',
          id: 'Lecture/Compute/Compute',
          label: 'Compute',
        },

      ],
    },
    {
      type: 'category',
      label: 'Lab',
      link: {
        type: 'generated-index',
        title: 'Lab',
        slug: '/Lab/',
      },
      items: [
        {
          type: 'doc',
          id: 'Lab/Compute/README',
          label: 'Compute',
        },

      ],
    },

  ],
};

module.exports = sidebars;