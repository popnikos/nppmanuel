let themeConfigFr = {
  selectText: 'Manuel++',
  label: 'Français',
  editLinkText: 'Modifier cette page',
  lastUpdated: 'Dernière modification',
  nav: [
    {
      text: 'Notepad++',
      items: [
        { text: 'Site', link: 'https://notepad-plus-plus.org' },
        { text: 'Wiki', link: 'http://docs.notepad-plus-plus.org' }
      ]
    }
  ],
  sidebar: {
    '/preferences/.': [ // every child pages / see enhanceApp.js
      '/notepad-plus-plus',
      ['/', 'Retour'],
      {
        title: 'Préférences',
        collapsable: false,
        children: [] // populated by enhanceApp.js
      },
      '/sommaire-complet',
      '/',
    ],

    '/plugins/.': [ // every child pages / see enhanceApp.js
      '/notepad-plus-plus',
      ['', 'Retour'],
      {
        title: 'Plugins',
        collapsable: false,
        children: [] // populated by enhanceApp.js
      },
      '/sommaire-complet',
      '/',
    ],

    '/expressions-regulieres/.': [ // every child pages / see enhanceApp.js
      '/notepad-plus-plus',
      ['', 'Retour'],
      {
        title: 'Expressions régulières',
        collapsable: false,
        children: [] // populated by enhanceApp.js
      },
      '/sommaire-complet',
      '/',
    ],

    '/': [
      '/notepad-plus-plus',
      {
        title: '',
        collapsable: false,
        children: [
          '/telechargement',
          '/installation',
          '/interface'
        ]
      },
      {
        title: '',
        collapsable: false,
        children: [
          '/raccourcis-clavier',
          '/edition-en-colonne',
        ]
      },
      {
        title: '',
        collapsable: false,
        children: [
          '/recherches-et-remplacements',
          '/expressions-regulieres/',
          '/macros'
        ]
      },
      {
        title: '',
        collapsable: false,
        children: [
          '/preferences/',
          '/plugins/',
        ]
      },
      {
        title: '',
        collapsable: false,
        children: [
          '/fichiers-de-configuration',
          '/historique-des-versions',
        ]
      },
      '/alternatives',
      '/sommaire-complet',
      '/',
    ]
  }
}

let themeConfigEn = {
  selectText: 'Manuel++',
  label: 'English',
  editLinkText: 'Edit this page',
  lastUpdated: 'Last Updated',
  nav: themeConfigFr.nav,
  sidebar: {
    '/zh/': [/* ... */],
    '/zh/nested/': [/* ... */]
  }
}

module.exports = {
  title: 'Manuel++',
  description: 'Un manuel pour Notepad++, l\'éditeur de texte caméléon.',
  port: 6486,
  ga: 'UA-21458763-1',
  serviceWorker: true,
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#159957' }],
  ],
  locales: {
    '/': {
      lang: 'fr-FR',
      title: 'Manuel++',
      description: 'Un manuel pour Notepad++, l\'éditeur de texte caméléon.'
    },
    '/en/': {
      lang: 'en-EN',
      title: 'Manuel++',
      description: 'A manual for Notepad++, the chameleon text editor'
    }
  },
  themeConfig: {
    repo: 'nliautaud/nppmanuel',
    editLinks: true,
    displayAllHeaders: false,
    locales: {
      '/': themeConfigFr,
      '/en/': themeConfigEn,
    },
  }
}