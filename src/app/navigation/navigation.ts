export const navigation = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type'    : 'group',
        'children': [
            {
                'id'   : 'sample1',
                'title': 'Sample1',
                'translate': 'Tableau de bord',
                'type' : 'item',
                'icon' : 'dashboard',
                'url'  : '/main/sample1',
                /* 'badge': {
                    'title': 26,
                    'translate': '',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                } */
            },
            {
                'id'   : 'sample',
                'title': 'Sample',
                'translate': 'Gestion utilisateurs',
                'type' : 'item',
                'icon' : 'account_circle',
                'url'  : '/main/sample',
                /* 'badge': {
                    'title': 25,
                    'translate': '2',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                } */
            },
           
            {
                'id'   : 'sample2',
                'title': 'Sample2',
                'translate': 'Parametrage',
                'type' : 'item',
                'icon' : 'settings',
                'url'  : '/main/sample2',
                /* 'badge': {
                    'title': 7,
                    'translate': '17',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                } */
            }
        ]
    }
];
