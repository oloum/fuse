export const navigation = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type'    : 'group',
        'children': [
            {
                'id'   : 'sample',
                'title': 'Sample',
                'translate': 'Gestion utilisateurs',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/sample',
                'badge': {
                    'title': 25,
                    'translate': '2',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'sample1',
                'title': 'Sample1',
                'translate': 'Gestion profil',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/sample1',
                'badge': {
                    'title': 26,
                    'translate': '14',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'sample',
                'title': 'Sample',
                'translate': 'Parametrage',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/test2',
                'badge': {
                    'title': 27,
                    'translate': '17',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            }
        ]
    }
];
