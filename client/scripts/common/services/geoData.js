'use strict';
var servicename = 'geoData';

module.exports = function(app) {

    var dependencies = [];

    function service() {

        var idf = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.350948, 48.863407],
                                [2.350155, 48.86199],
                                [2.34459, 48.854052],
                                [2.339003, 48.857565],
                                [2.339953, 48.858226],
                                [2.332909, 48.85935],
                                [2.320902, 48.863057],
                                [2.325926, 48.869581],
                                [2.327989, 48.869929],
                                [2.330662, 48.868191],
                                [2.350948, 48.863407]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 54,
                    "insee": 75101,
                    "nom": "1er Arrondissement",
                    "wikipedia": "fr:1er arrondissement de Paris",
                    "surf_m2": 1814728
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.327989, 48.869929],
                                [2.340045, 48.871981],
                                [2.347892, 48.870675],
                                [2.354261, 48.86933],
                                [2.350948, 48.863407],
                                [2.330662, 48.868191],
                                [2.327989, 48.869929]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 7,
                    "insee": 75102,
                    "nom": "2e Arrondissement",
                    "wikipedia": "fr:2e arrondissement de Paris",
                    "surf_m2": 991370
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.350155, 48.86199],
                                [2.350948, 48.863407],
                                [2.354261, 48.86933],
                                [2.363818, 48.867505],
                                [2.366734, 48.863101],
                                [2.368513, 48.855733],
                                [2.36176, 48.857248],
                                [2.356905, 48.860064],
                                [2.350155, 48.86199]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 90,
                    "insee": 75103,
                    "nom": "3e Arrondissement",
                    "wikipedia": "fr:3e arrondissement de Paris",
                    "surf_m2": 1172150
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.368513, 48.855733],
                                [2.369137, 48.853162],
                                [2.366504, 48.847371],
                                [2.36443, 48.84614],
                                [2.35923, 48.849456],
                                [2.34459, 48.854052],
                                [2.350155, 48.86199],
                                [2.356905, 48.860064],
                                [2.36176, 48.857248],
                                [2.368513, 48.855733]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 73,
                    "insee": 75104,
                    "nom": "4e Arrondissement",
                    "wikipedia": "fr:4e arrondissement de Paris",
                    "surf_m2": 1600062
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.36443, 48.84614],
                                [2.366029, 48.84493],
                                [2.361817, 48.839962],
                                [2.351836, 48.836786],
                                [2.342072, 48.838364],
                                [2.336728, 48.839655],
                                [2.34459, 48.854052],
                                [2.35923, 48.849456],
                                [2.36443, 48.84614]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 56,
                    "insee": 75105,
                    "nom": "5e Arrondissement",
                    "wikipedia": "fr:5e arrondissement de Paris",
                    "surf_m2": 2539915
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.332909, 48.85935],
                                [2.339953, 48.858226],
                                [2.339003, 48.857565],
                                [2.34459, 48.854052],
                                [2.336728, 48.839655],
                                [2.324692, 48.843607],
                                [2.316573, 48.846824],
                                [2.328421, 48.851827],
                                [2.333267, 48.858266],
                                [2.332909, 48.85935]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 10,
                    "insee": 75106,
                    "nom": "6e Arrondissement",
                    "wikipedia": "fr:6e arrondissement de Paris",
                    "surf_m2": 2164575
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.320902, 48.863057],
                                [2.332909, 48.85935],
                                [2.333267, 48.858266],
                                [2.328421, 48.851827],
                                [2.316573, 48.846824],
                                [2.313728, 48.845934],
                                [2.310526, 48.847987],
                                [2.307339, 48.847139],
                                [2.289824, 48.858229],
                                [2.295157, 48.861992],
                                [2.301591, 48.863474],
                                [2.318543, 48.863778],
                                [2.320902, 48.863057]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 57,
                    "insee": 75107,
                    "nom": "7e Arrondissement",
                    "wikipedia": "fr:7e arrondissement de Paris",
                    "surf_m2": 4090694
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.327182, 48.883481],
                                [2.325926, 48.869581],
                                [2.320902, 48.863057],
                                [2.318543, 48.863778],
                                [2.301591, 48.863474],
                                [2.29504, 48.873779],
                                [2.298157, 48.87808],
                                [2.327182, 48.883481]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 36527,
                    "insee": 75108,
                    "nom": "8e Arrondissement",
                    "wikipedia": "fr:8e arrondissement de Paris",
                    "surf_m2": 3881428
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.325926, 48.869581],
                                [2.327182, 48.883481],
                                [2.327428, 48.883522],
                                [2.329443, 48.884554],
                                [2.339816, 48.882025],
                                [2.349504, 48.883725],
                                [2.347892, 48.870675],
                                [2.340045, 48.871981],
                                [2.327989, 48.869929],
                                [2.325926, 48.869581]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 36529,
                    "insee": 75109,
                    "nom": "9e Arrondissement",
                    "wikipedia": "fr:9e arrondissement de Paris",
                    "surf_m2": 2178559
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.363818, 48.867505],
                                [2.354261, 48.86933],
                                [2.347892, 48.870675],
                                [2.349504, 48.883725],
                                [2.364686, 48.884368],
                                [2.368465, 48.884068],
                                [2.370194, 48.882718],
                                [2.370278, 48.877992],
                                [2.37699, 48.872062],
                                [2.363818, 48.867505]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 71,
                    "insee": 75110,
                    "nom": "10e Arrondissement",
                    "wikipedia": "fr:10e arrondissement de Paris",
                    "surf_m2": 2892691
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.363818, 48.867505],
                                [2.37699, 48.872062],
                                [2.3873, 48.863085],
                                [2.389583, 48.858532],
                                [2.394444, 48.85657],
                                [2.398433, 48.851345],
                                [2.399118, 48.848098],
                                [2.378827, 48.850629],
                                [2.369137, 48.853162],
                                [2.368513, 48.855733],
                                [2.366734, 48.863101],
                                [2.363818, 48.867505]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 72,
                    "insee": 75111,
                    "nom": "11e Arrondissement",
                    "wikipedia": "fr:11e arrondissement de Paris",
                    "surf_m2": 3666492
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.399118, 48.848098],
                                [2.415993, 48.846614],
                                [2.411227, 48.833867],
                                [2.416111, 48.833761],
                                [2.422176, 48.835814],
                                [2.419424, 48.842487],
                                [2.422106, 48.844498],
                                [2.42476, 48.84177],
                                [2.427563, 48.841509],
                                [2.437192, 48.840891],
                                [2.437941, 48.844569],
                                [2.440512, 48.844346],
                                [2.440766, 48.845916],
                                [2.446526, 48.84575],
                                [2.447732, 48.844802],
                                [2.46174, 48.842694],
                                [2.467232, 48.839094],
                                [2.469703, 48.835556],
                                [2.46523, 48.831151],
                                [2.46455, 48.827941],
                                [2.466178, 48.827333],
                                [2.465761, 48.826282],
                                [2.462803, 48.819028],
                                [2.461308, 48.818298],
                                [2.458633, 48.817012],
                                [2.43735, 48.818219],
                                [2.436968, 48.819363],
                                [2.43418, 48.819281],
                                [2.430239, 48.823403],
                                [2.419946, 48.824152],
                                [2.410244, 48.825192],
                                [2.402488, 48.829647],
                                [2.390256, 48.825726],
                                [2.366029, 48.84493],
                                [2.36443, 48.84614],
                                [2.366504, 48.847371],
                                [2.369137, 48.853162],
                                [2.378827, 48.850629],
                                [2.399118, 48.848098]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 5,
                    "insee": 75112,
                    "nom": "12e Arrondissement",
                    "wikipedia": "fr:12e arrondissement de Paris",
                    "surf_m2": 16319745
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.366029, 48.84493],
                                [2.390256, 48.825726],
                                [2.364276, 48.816334],
                                [2.356613, 48.815981],
                                [2.352399, 48.818534],
                                [2.34692, 48.815865],
                                [2.343974, 48.815766],
                                [2.344629, 48.81954],
                                [2.341436, 48.823668],
                                [2.342072, 48.838364],
                                [2.351836, 48.836786],
                                [2.361817, 48.839962],
                                [2.366029, 48.84493]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 6,
                    "insee": 75113,
                    "nom": "13e Arrondissement",
                    "wikipedia": "fr:13e arrondissement de Paris",
                    "surf_m2": 7144131
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.336728, 48.839655],
                                [2.342072, 48.838364],
                                [2.341436, 48.823668],
                                [2.344629, 48.81954],
                                [2.343974, 48.815766],
                                [2.331733, 48.817011],
                                [2.332371, 48.818213],
                                [2.314133, 48.822263],
                                [2.301318, 48.825125],
                                [2.319948, 48.84052],
                                [2.321391, 48.83979],
                                [2.324692, 48.843607],
                                [2.336728, 48.839655]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 30,
                    "insee": 75114,
                    "nom": "14e Arrondissement",
                    "wikipedia": "fr:14e arrondissement de Paris",
                    "surf_m2": 5605448
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.316573, 48.846824],
                                [2.324692, 48.843607],
                                [2.321391, 48.83979],
                                [2.319948, 48.84052],
                                [2.301318, 48.825125],
                                [2.289388, 48.828324],
                                [2.279023, 48.832459],
                                [2.272713, 48.827947],
                                [2.267806, 48.82785],
                                [2.2673, 48.831559],
                                [2.27003, 48.833008],
                                [2.267948, 48.834576],
                                [2.26296, 48.833899],
                                [2.275715, 48.846963],
                                [2.289824, 48.858229],
                                [2.307339, 48.847139],
                                [2.310526, 48.847987],
                                [2.313728, 48.845934],
                                [2.316573, 48.846824]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 21,
                    "insee": 75115,
                    "nom": "15e Arrondissement",
                    "wikipedia": "fr:15e arrondissement de Paris",
                    "surf_m2": 8510577
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.29504, 48.873779],
                                [2.301591, 48.863474],
                                [2.295157, 48.861992],
                                [2.289824, 48.858229],
                                [2.275715, 48.846963],
                                [2.26296, 48.833899],
                                [2.262776, 48.833918],
                                [2.255154, 48.834805],
                                [2.251649, 48.838906],
                                [2.251219, 48.842891],
                                [2.252538, 48.84558],
                                [2.242437, 48.847734],
                                [2.239324, 48.850107],
                                [2.224169, 48.853442],
                                [2.225689, 48.859437],
                                [2.228244, 48.865145],
                                [2.23212, 48.869553],
                                [2.240463, 48.871888],
                                [2.245623, 48.876364],
                                [2.254815, 48.874081],
                                [2.258999, 48.880267],
                                [2.27749, 48.877963],
                                [2.279801, 48.878653],
                                [2.29504, 48.873779]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 29,
                    "insee": 75116,
                    "nom": "16e Arrondissement",
                    "wikipedia": "fr:16e arrondissement de Paris",
                    "surf_m2": 16371053
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.327182, 48.883481],
                                [2.298157, 48.87808],
                                [2.29504, 48.873779],
                                [2.279801, 48.878653],
                                [2.280906, 48.882878],
                                [2.284459, 48.885638],
                                [2.291504, 48.889459],
                                [2.295047, 48.889869],
                                [2.303793, 48.894171],
                                [2.31989, 48.900459],
                                [2.330183, 48.901028],
                                [2.32559, 48.887498],
                                [2.327428, 48.883522],
                                [2.327182, 48.883481]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 36526,
                    "insee": 75117,
                    "nom": "17e Arrondissement",
                    "wikipedia": "fr:17e arrondissement de Paris",
                    "surf_m2": 5670222
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.370292, 48.90186],
                                [2.370388, 48.896633],
                                [2.37179, 48.895423],
                                [2.364686, 48.884368],
                                [2.349504, 48.883725],
                                [2.339816, 48.882025],
                                [2.329443, 48.884554],
                                [2.327428, 48.883522],
                                [2.32559, 48.887498],
                                [2.330183, 48.901028],
                                [2.351985, 48.901493],
                                [2.365608, 48.901763],
                                [2.370292, 48.90186]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 13,
                    "insee": 75118,
                    "nom": "18e Arrondissement",
                    "wikipedia": "fr:18e arrondissement de Paris",
                    "surf_m2": 5994849
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.370292, 48.90186],
                                [2.384429, 48.902156],
                                [2.389426, 48.901219],
                                [2.395527, 48.898262],
                                [2.398959, 48.889546],
                                [2.400073, 48.883818],
                                [2.403792, 48.881447],
                                [2.40929, 48.880275],
                                [2.410836, 48.878423],
                                [2.402577, 48.876009],
                                [2.389972, 48.875368],
                                [2.37699, 48.872062],
                                [2.370278, 48.877992],
                                [2.370194, 48.882718],
                                [2.368465, 48.884068],
                                [2.364686, 48.884368],
                                [2.37179, 48.895423],
                                [2.370388, 48.896633],
                                [2.370292, 48.90186]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 14,
                    "insee": 75119,
                    "nom": "19e Arrondissement",
                    "wikipedia": "fr:19e arrondissement de Paris",
                    "surf_m2": 6785521
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [2.415993, 48.846614],
                                [2.399118, 48.848098],
                                [2.398433, 48.851345],
                                [2.394444, 48.85657],
                                [2.389583, 48.858532],
                                [2.3873, 48.863085],
                                [2.37699, 48.872062],
                                [2.389972, 48.875368],
                                [2.402577, 48.876009],
                                [2.410836, 48.878423],
                                [2.413429, 48.87315],
                                [2.415281, 48.85518],
                                [2.41636, 48.849235],
                                [2.415993, 48.846614]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "cartodb_id": 31,
                    "insee": 75120,
                    "nom": "20e Arrondissement",
                    "wikipedia": "fr:20e arrondissement de Paris",
                    "surf_m2": 5980553
                }
            }]
        };

        var points = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "id": 1,
                "properties": {
                    "CASE_ENQUIRY_ID": 101000833162.0,
                    "OPEN_DT": "05\/03\/2013 11:12:12 AM",
                    "CLOSED_DT": null,
                    "CASE_STATUS": "Open",
                    "CLOSURE_REASON": "",
                    "CASE_TITLE": "Rodent Activity",
                    "SUBJECT": "Inspectional Services",
                    "REASON": "Environmental Services",
                    "TYPE": "Rodent Activity",
                    "QUEUE": "ISD_Environmental Services (INTERNAL)",
                    "Department": "ISD",
                    "Location": "83-85 Cresthill Rd  Brighton  MA  02135",
                    "fire_district": 11,
                    "pwd_district": "04",
                    "city_council_district": 9,
                    "police_district": "D14",
                    "neighborhood": "Allston \/ Brighton",
                    "neighborhood_services_district": 15,
                    "ward": "Ward 22",
                    "precinct": 2211,
                    "land_usage": "R2",
                    "LOCATION_STREET_NAME": "83-85 Cresthill Rd",
                    "LOCATION_ZIPCODE": 2135,
                    "LATITUDE": 48.858370,
                    "LONGITUDE": 2.294481,
                    "Source": "Constituent Call"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.294481, 48.858370]
                }
            }]
        };

        var getPoints = function() {
            return points;
        };

        var getIdf = function() {
            return idf;
        };

        return {
            getIdf: getIdf,
            getPoints: getPoints
        }

    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
