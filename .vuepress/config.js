let locales = {}

locales.fr = {
    selectText: 'Langue',
    label: 'Français',
    editLinkText: 'Modifier cette page',
    lastUpdated: 'Dernière modification',
    nav: [
        {
            text: 'Manuel++',
            link: '/'
        },
        {
            text: 'Notepad++',
            items: [
                { text: 'Site', link: 'https://notepad-plus-plus.org' },
                { text: 'Wiki', link: 'http://docs.notepad-plus-plus.org' }
            ]
        }
    ],
    sidebar: {
        '/preferences/': [
            ['/preferences', 'Retour'],
            {
                title: 'Préférences',
                collapsable: false,
                children: [
                    'general',
                    'edition',
                    'nouveau-document',
                    'dossier-par-defaut',
                    'historique',
                    'extensions',
                    'langage',
                    'coloration',
                    'impression',
                    'sauvegarde',
                    'autocompletion',
                    'instance',
                    'delimiteur',
                    'cloud',
                    'moteur-de-recherche',
                    'divers',
                ]
            },
        ],
        '/expressions-regulieres/': [
            ['/expressions-regulieres', 'Retour'],
            {
                title: 'Expressions régulières',
                collapsable: false,
                children: [
                    'notions',
                    'syntaxe-recherche',
                    'syntaxe-remplacement',
                ]
            },
        ],
        '/': [
            'notepad-plus-plus',
            {
                title: '',
                collapsable: false,
                children: [
                    'telechargement',
                    'installation',
                    'interface'
                ]
            },
            {
                title: '',
                collapsable: false,
                children: [
                    'raccourcis-clavier',
                    'edition-en-colonne',
                ]
            },
            {
                title: '',
                collapsable: false,
                children: [
                    'recherches-et-remplacements',
                    'expressions-regulieres',
                    'macros'
                ]
            },
            {
                title: '',
                collapsable: false,
                children: [
                    'preferences',
                    'plugins',
                ]
            },
            {
                title: '',
                collapsable: false,
                children: [
                    'fichiers-de-configuration',
                    'historique-des-versions',
                ]
            },
            'alternatives',
            'sommaire-complet',
            '',
        ]
    }
}

locales.en = {
    selectText: 'Language',
    label: 'English',
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    nav: locales.fr.nav,
    sidebar: {
        '/zh/': [/* ... */],
        '/zh/nested/': [/* ... */]
    }
}

module.exports = {
    title: 'Manuel++',
    description: 'Un manuel pour Notepad++, l\'éditeur de texte caméléon.',
    port: 6486,
    dest: './docs',
    ga: 'UA-21458763-1',
    locales: {
        '/': {
            lang: 'fr-FR',
            title: 'Manuel++',
            description: 'Un manuel pour Notepad++, l\'éditeur de texte caméléon.'
        },
        // '/en/': {
        //     lang: 'en-EN',
        //     title: 'Manuel++',
        //     description: 'A manual for Notepad++, the chameleon text editor'
        // }
    },
    themeConfig: {
        repo: 'nliautaud/nppmanuel',
        editLinks: true,
        displayAllHeaders: false,
        locales: {
            '/': locales.fr,
            //'/en/': locales.en,
        },
    }
}