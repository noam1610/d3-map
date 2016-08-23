'use strict';
var servicename = 'serverData';
var _ = require('lodash');

module.exports = function(app) {

    var dependencies = [];

    function service() {

        var patients = [{
            'tri': '2',
            'detail': {
                'arrive': '2016-08-15T10:39:54.759Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'C4',
            'PriseEnCharge': ['2016-08-15T10:39:54.759Z'],
            'id': '57b19bfb3e68f41100764fd1'
        }, {
            'tri': '3',
            'detail': {
                'arrive': '2016-08-15T10:40:25.931Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'C9',
            'PriseEnCharge': ['2016-08-15T10:40:25.931Z'],
            'id': '57b19c1a3e68f41100764fd5'
        }, {
            'tri': '2',
            'detail': {
                'arrive': '2016-08-15T10:40:32.060Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'D1',
            'PriseEnCharge': ['2016-08-15T10:40:32.060Z'],
            'id': '57b19c203e68f41100764fd7'
        }, {
            'tri': '4bis',
            'detail': {
                'arrive': '2016-08-15T10:40:43.218Z',
                'motif': 'Proctologie (trombose, fissure, douleur)',
                'age': 98
            },
            'statut': 'EnAttente',
            'numero': 'D3',
            'PriseEnCharge': ['2016-08-15T10:40:43.218Z'],
            'id': '57b19c2b3e68f41100764fd9'
        }, {
            'tri': '2',
            'detail': {
                'arrive': '2016-08-15T10:40:51.155Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'D5',
            'PriseEnCharge': ['2016-08-15T10:40:51.155Z'],
            'id': '57b19c333e68f41100764fdb'
        }, {
            'tri': '1',
            'detail': {
                'arrive': '2016-08-15T10:41:17.150Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'D6',
            'PriseEnCharge': ['2016-08-15T10:41:17.150Z'],
            'id': '57b19c4d3e68f41100764fdc'
        }, {
            'tri': '1',
            'detail': {
                'arrive': '2016-08-15T11:27:01.722Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'D2',
            'PriseEnCharge': ['2016-08-15T11:27:01.722Z'],
            'id': '57b1a7063e68f41100764fe7'
        }, {
            'tri': '3',
            'detail': {
                'arrive': '2016-08-16T14:17:22.075Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'E1',
            'PriseEnCharge': ['2016-08-16T14:17:22.075Z'],
            'id': '57b320724fe8e11100a40b39'
        }, {
            'tri': '3',
            'detail': {
                'arrive': '2016-08-16T14:28:30.635Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'A3',
            'PriseEnCharge': ['2016-08-16T14:28:30.635Z'],
            'id': '57b3230f4fe8e11100a40b3a'
        }, {
            'tri': '5',
            'detail': {
                'arrive': '2016-08-16T14:37:49.940Z',
                'motif': 'Hypertension',
                'age': 56
            },
            'statut': 'EnAttente',
            'numero': 'B0',
            'PriseEnCharge': ['2016-08-16T14:37:49.940Z'],
            'id': '57b3253e4fe8e11100a40b3c'
        }, {
            'tri': '1',
            'detail': {
                'arrive': '2016-08-17T09:16:45.671Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'B6',
            'PriseEnCharge': ['2016-08-17T09:16:45.671Z'],
            'id': '57b42b7e26510e11008e58b3'
        }, {
            'tri': '5',
            'detail': {
                'arrive': '2016-08-17T10:08:58.763Z',
                'motif': 'Traumatisme membre inferieur',
                'age': 58
            },
            'statut': 'EnAttente',
            'numero': 'E4',
            'PriseEnCharge': ['2016-08-17T10:08:58.763Z'],
            'id': '57b437bb26510e11008e58b6'
        }, {
            'tri': '2',
            'detail': {
                'arrive': '2016-08-17T10:20:33.077Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'E7',
            'PriseEnCharge': ['2016-08-17T10:20:33.077Z'],
            'id': '57b43a7126510e11008e58b9'
        }, {
            'tri': '1',
            'detail': {
                'arrive': '2016-08-18T09:43:05.359Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'A5',
            'PriseEnCharge': ['2016-08-18T09:43:05.359Z'],
            'id': '57b583293b451f11007373a4'
        }, {
            'tri': '3',
            'detail': {
                'arrive': '2016-08-18T09:43:18.012Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'A7',
            'PriseEnCharge': ['2016-08-18T09:43:18.012Z'],
            'id': '57b583363b451f11007373a6'
        }, {
            'tri': '4',
            'detail': {
                'arrive': '2016-08-18T09:43:22.426Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'A8',
            'PriseEnCharge': ['2016-08-18T09:43:22.426Z'],
            'id': '57b5833a3b451f11007373a7'
        }, {
            'tri': '4bis',
            'detail': {
                'arrive': '2016-08-18T09:43:49.057Z',
                'motif': 'Diarhee',
                'age': 25
            },
            'statut': 'EnAttente',
            'numero': 'A9',
            'PriseEnCharge': ['2016-08-18T09:43:49.057Z'],
            'id': '57b583553b451f11007373a8'
        }, {
            'tri': '5',
            'detail': {
                'arrive': '2016-08-18T09:44:28.865Z',
                'motif': 'oedeme / rougeur localises / abces',
                'age': 24
            },
            'statut': 'EnAttente',
            'numero': 'B3',
            'PriseEnCharge': ['2016-08-18T09:44:28.865Z'],
            'id': '57b5837d3b451f11007373a9'
        }, {
            'tri': '2',
            'detail': {
                'arrive': '2016-08-19T09:33:35.331Z',
                'motif': '-',
                'age': -1
            },
            'statut': 'EnAttente',
            'numero': 'A1',
            'PriseEnCharge': ['2016-08-19T09:33:35.331Z'],
            'id': '57b6d26f6cfcd71100bd6bab'
        }];

        var getPatientCountTri = function() {
            var triPatient = [0, 0, 0, 0, 0, 0];
            for (var i = 0; i < patients.length - 1; i++) {
                switch (patients[i].tri) {
                    case '1':
                        triPatient[0]++;
                        break;
                    case '2':
                        triPatient[1]++;
                        break;
                    case '3':
                        triPatient[2]++;
                        break;
                    case '4':
                        triPatient[3]++;
                        break;
                    case '4bis':
                        triPatient[4]++;
                        break;
                    case '5':
                        triPatient[5]++;
                        break;
                }
            }

            var retour = _.map(triPatient, function(data, index) {
                return {
                    label: index,
                    count: data
                };
            });

            return retour;
        };

        return {
            getPatientCountTri: getPatientCountTri
        };

    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
