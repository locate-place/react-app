import {TypeApiData} from "../../src/types/Types";

/* /api/v1/location/coordinate.json?q=6324464&p=51.061156%2C13.740712&country=US&language=en&next_places=1 */
const GeoNameSearch: TypeApiData = {
    "data-licence": {
        "full": "Creative Commons Attribution 4.0 License",
        "short": "CC-BY 4.0",
        "url": "https://download.geonames.org/export/dump/readme.txt"
    },
    "time-taken": "472ms",
    "memory-taken": "5.07 MB",
    "performance": {
        "LocationService": {
            "findOneBy": [
                {
                    "time": {
                        "value": 29.1,
                        "value-formatted": "29.10 ms"
                    },
                    "memory": {
                        "value": 1.44,
                        "value-formatted": "1.44 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationByGeonameId",
                        "line": 552
                    }
                }
            ],
            "getLocationResourceFull": [
                {
                    "time": {
                        "value": 379,
                        "value-formatted": "379.00 ms"
                    },
                    "memory": {
                        "value": 4.88,
                        "value-formatted": "4.88 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationByGeonameId",
                        "line": 571
                    }
                },
                {
                    "time": {
                        "value": 60.13,
                        "value-formatted": "60.13 ms"
                    },
                    "memory": {
                        "value": 5.07,
                        "value-formatted": "5.07 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationByCoordinate",
                        "line": 672
                    }
                }
            ],
            "getLocationEntityByCoordinate": [
                {
                    "time": {
                        "value": 3.41,
                        "value-formatted": "3.41 ms"
                    },
                    "memory": {
                        "value": 4.91,
                        "value-formatted": "4.91 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationByCoordinate",
                        "line": 653
                    }
                }
            ]
        }
    },
    "data": {
        "geoname-id": 6324464,
        "name": "Cologne Cathedral",
        "name-full": "Altstadt Nord, Cologne, North Rhine-Westphalia, Germany",
        "updated-at": "2023-08-21T19:00:47+00:00",
        "properties": {
            "elevation": {
                "value": 62,
                "unit": "m",
                "value-formatted": "62 m"
            },
            "country": "DE"
        },
        "feature": {
            "code": "CH",
            "code-name": "Church",
            "class": "S",
            "class-name": "Spots, Buildings, Farms, etc."
        },
        "coordinate": {
            "latitude": {
                "decimal": 50.94123,
                "dms": "50°56′28.428″N"
            },
            "longitude": {
                "decimal": 6.95823,
                "dms": "6°57′29.628″E"
            },
            "srid": 4326,
            "distance-user": {
                "meters": {
                    "value": 474626.6,
                    "unit": "m",
                    "value-formatted": "474,626.6 m"
                },
                "kilometers": {
                    "value": 474.627,
                    "unit": "km",
                    "value-formatted": "474.627 km"
                }
            },
            "direction-user": {
                "degree": -91.01,
                "cardinal-direction": "W",
                "cardinal-direction-translated": "West"
            }
        },
        "timezone": {
            "timezone": "Europe/Berlin",
            "country": "DE",
            "current-time": {
                "timezone": "2024-02-11T16:47:39+01:00",
                "utc": "2024-02-11T15:47:39+00:00"
            },
            "offset": "+01:00",
            "coordinate": {
                "latitude": {
                    "decimal": 52.5,
                    "dms": "52°30′0″N"
                },
                "longitude": {
                    "decimal": 13.36666,
                    "dms": "13°21′59.976″E"
                },
                "srid": 4326,
                "distance-user": {
                    "meters": {
                        "value": 162047.6,
                        "unit": "m",
                        "value-formatted": "162,047.6 m"
                    },
                    "kilometers": {
                        "value": 162.048,
                        "unit": "km",
                        "value-formatted": "162.048 km"
                    }
                },
                "direction-user": {
                    "degree": -14.57,
                    "cardinal-direction": "N",
                    "cardinal-direction-translated": "North"
                }
            }
        },
        "links": {
            "wikipedia": {
                "this": "https://en.wikipedia.org/wiki/Cologne_Cathedral",
                "locations": {
                    "district-locality": "https://de.wikipedia.org/wiki/K%C3%B6ln-Altstadt-Nord",
                    "city-municipality": "https://en.wikipedia.org/wiki/Cologne",
                    "state": "https://en.wikipedia.org/wiki/North_Rhine-Westphalia",
                    "country": "https://en.wikipedia.org/wiki/Germany"
                },
                "next-places": {
                    "H": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Rheinauhafen",
                            "number": 0
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Flehbach",
                            "number": 6
                        }
                    ],
                    "L": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Rheinpark",
                            "number": 1
                        }
                    ],
                    "P": [
                        {
                            "link": "https://de.wikipedia.org/wiki/K%C3%B6ln-Altstadt-Nord",
                            "number": 1
                        },
                        {
                            "link": "https://de.wikipedia.org/wiki/Altstadt-S%C3%BCd",
                            "number": 2
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Cologne",
                            "number": 4
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Deutz%2C_Cologne",
                            "number": 6
                        }
                    ],
                    "S": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Cologne_Cathedral",
                            "number": 0
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Romano-Germanic_Museum",
                            "number": 1
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Cologne_Opera",
                            "number": 5
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Schauspiel_K%C3%B6ln",
                            "number": 6
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Cologne_University_of_Applied_Sciences",
                            "number": 7
                        }
                    ],
                    "T": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Cologne_Lowland",
                            "number": 2
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Monte_Troodel%C3%B6h",
                            "number": 4
                        }
                    ]
                }
            },
            "maps": {
                "google": "https://www.google.de/maps/place/50.941230+6.958230",
                "openstreetmap": "https://www.openstreetmap.org/?lat=50.941230&lon=6.958230&mlat=50.941230&mlon=6.958230&zoom=14&layers=M"
            }
        },
        "next-places-config": {
            "config": {
                "cities": {
                    "distance": 100000,
                    "limit": 10,
                    "name": "cities",
                    "feature_codes": [
                        "PPLA",
                        "PPLA2",
                        "PPLA3"
                    ]
                },
                "parks": {
                    "distance": 100000,
                    "limit": 10,
                    "name": "parks",
                    "feature_codes": [
                        "PRK"
                    ]
                },
                "airports": {
                    "distance": 200000,
                    "limit": 10,
                    "name": "airports",
                    "feature_codes": [
                        "AIRP"
                    ]
                },
                "stations": {
                    "distance": 20000,
                    "limit": 10,
                    "name": "stations",
                    "feature_codes": [
                        "BUSTN",
                        "BUSTP",
                        "MTRO",
                        "RSTN",
                        "RSTP"
                    ]
                },
                "cinemas": {
                    "distance": 100000,
                    "limit": 10,
                    "name": "cinemas",
                    "feature_codes": [
                        "THTR"
                    ]
                },
                "beaches": {
                    "distance": 100000,
                    "limit": 10,
                    "name": "beaches",
                    "feature_codes": [
                        "BCH",
                        "BCHS",
                        "RDGB",
                        "SHOR"
                    ]
                },
                "churches": {
                    "distance": 100000,
                    "limit": 10,
                    "name": "churches",
                    "feature_codes": [
                        "CH"
                    ]
                },
                "waters": {
                    "distance": 100000,
                    "limit": 10,
                    "name": "lakes, rivers",
                    "feature_codes": [
                        "LK",
                        "LKS",
                        "STM"
                    ]
                },
                "hotels": {
                    "distance": 100000,
                    "limit": 10,
                    "name": "hotels",
                    "feature_codes": [
                        "HTL"
                    ]
                },
                "hospitals": {
                    "distance": 50000,
                    "limit": 10,
                    "name": "hospitals",
                    "feature_codes": [
                        "HSP",
                        "HSPC",
                        "HSPD"
                    ]
                },
                "mountains": {
                    "distance": 50000,
                    "limit": 10,
                    "name": "mountains, hills",
                    "feature_codes": [
                        "HLL",
                        "MT",
                        "PK"
                    ]
                }
            },
            "endpoints": {
                "coordinate": "/api/v1/location/coordinate.json",
                "list": "/api/v1/location.json"
            }
        },
        "locations": {
            "district-locality": {
                "geoname-id": 6691073,
                "name": "Altstadt Nord",
                "updated-at": "2023-08-21T19:01:24+00:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 50.93893,
                        "dms": "50°56′20.148″N"
                    },
                    "longitude": {
                        "decimal": 6.95752,
                        "dms": "6°57′27.072″E"
                    },
                    "srid": 4326,
                    "distance-user": {
                        "meters": {
                            "value": 474695.2,
                            "unit": "m",
                            "value-formatted": "474,695.2 m"
                        },
                        "kilometers": {
                            "value": 474.695,
                            "unit": "km",
                            "value-formatted": "474.695 km"
                        }
                    },
                    "direction-user": {
                        "degree": -91.03,
                        "cardinal-direction": "W",
                        "cardinal-direction-translated": "West"
                    }
                },
                "feature": {
                    "code": "PPLX",
                    "code-name": "Section of populated place",
                    "class": "P",
                    "class-name": "Cities, Villages, etc."
                },
                "links": {
                    "wikipedia": {
                        "this": "https://de.wikipedia.org/wiki/K%C3%B6ln-Altstadt-Nord"
                    },
                    "maps": {
                        "google": "https://www.google.de/maps/place/50.938930+6.957520",
                        "openstreetmap": "https://www.openstreetmap.org/?lat=50.938930&lon=6.957520&mlat=50.938930&mlon=6.957520&zoom=14&layers=M"
                    }
                },
                "properties": {
                    "population": {
                        "value": 17922,
                        "unit": "#",
                        "value-formatted": "17,922"
                    },
                    "elevation": {
                        "value": 59,
                        "unit": "m",
                        "value-formatted": "59 m"
                    },
                    "country": "DE"
                },
                "next-places-config": {
                    "config": {
                        "cities": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cities",
                            "feature_codes": [
                                "PPLA",
                                "PPLA2",
                                "PPLA3"
                            ]
                        },
                        "parks": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "parks",
                            "feature_codes": [
                                "PRK"
                            ]
                        },
                        "airports": {
                            "distance": 200000,
                            "limit": 10,
                            "name": "airports",
                            "feature_codes": [
                                "AIRP"
                            ]
                        },
                        "stations": {
                            "distance": 20000,
                            "limit": 10,
                            "name": "stations",
                            "feature_codes": [
                                "BUSTN",
                                "BUSTP",
                                "MTRO",
                                "RSTN",
                                "RSTP"
                            ]
                        },
                        "cinemas": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cinemas",
                            "feature_codes": [
                                "THTR"
                            ]
                        },
                        "beaches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "beaches",
                            "feature_codes": [
                                "BCH",
                                "BCHS",
                                "RDGB",
                                "SHOR"
                            ]
                        },
                        "churches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "churches",
                            "feature_codes": [
                                "CH"
                            ]
                        },
                        "waters": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "lakes, rivers",
                            "feature_codes": [
                                "LK",
                                "LKS",
                                "STM"
                            ]
                        },
                        "hotels": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "hotels",
                            "feature_codes": [
                                "HTL"
                            ]
                        },
                        "hospitals": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "hospitals",
                            "feature_codes": [
                                "HSP",
                                "HSPC",
                                "HSPD"
                            ]
                        },
                        "mountains": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "mountains, hills",
                            "feature_codes": [
                                "HLL",
                                "MT",
                                "PK"
                            ]
                        }
                    },
                    "endpoints": {
                        "coordinate": "/api/v1/location/coordinate.json",
                        "list": "/api/v1/location.json"
                    }
                }
            },
            "city-municipality": {
                "geoname-id": 2886242,
                "name": "Cologne",
                "updated-at": "2023-08-21T18:58:24+00:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 50.93333,
                        "dms": "50°55′59.988″N"
                    },
                    "longitude": {
                        "decimal": 6.95,
                        "dms": "6°57′0″E"
                    },
                    "srid": 4326,
                    "distance-user": {
                        "meters": {
                            "value": 475267.5,
                            "unit": "m",
                            "value-formatted": "475,267.5 m"
                        },
                        "kilometers": {
                            "value": 475.267,
                            "unit": "km",
                            "value-formatted": "475.267 km"
                        }
                    },
                    "direction-user": {
                        "degree": -91.08,
                        "cardinal-direction": "W",
                        "cardinal-direction-translated": "West"
                    }
                },
                "feature": {
                    "code": "PPLA2",
                    "code-name": "Seat of a second-order administrative division",
                    "class": "P",
                    "class-name": "Cities, Villages, etc."
                },
                "links": {
                    "wikipedia": {
                        "this": "https://en.wikipedia.org/wiki/Cologne"
                    },
                    "maps": {
                        "google": "https://www.google.de/maps/place/50.933330+6.950000",
                        "openstreetmap": "https://www.openstreetmap.org/?lat=50.933330&lon=6.950000&mlat=50.933330&mlon=6.950000&zoom=14&layers=M"
                    }
                },
                "properties": {
                    "population": {
                        "value": 963395,
                        "unit": "#",
                        "value-formatted": "963,395"
                    },
                    "elevation": {
                        "value": 58,
                        "unit": "m",
                        "value-formatted": "58 m"
                    },
                    "country": "DE"
                },
                "next-places-config": {
                    "config": {
                        "cities": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cities",
                            "feature_codes": [
                                "PPLA",
                                "PPLA2",
                                "PPLA3"
                            ]
                        },
                        "parks": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "parks",
                            "feature_codes": [
                                "PRK"
                            ]
                        },
                        "airports": {
                            "distance": 200000,
                            "limit": 10,
                            "name": "airports",
                            "feature_codes": [
                                "AIRP"
                            ]
                        },
                        "stations": {
                            "distance": 20000,
                            "limit": 10,
                            "name": "stations",
                            "feature_codes": [
                                "BUSTN",
                                "BUSTP",
                                "MTRO",
                                "RSTN",
                                "RSTP"
                            ]
                        },
                        "cinemas": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cinemas",
                            "feature_codes": [
                                "THTR"
                            ]
                        },
                        "beaches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "beaches",
                            "feature_codes": [
                                "BCH",
                                "BCHS",
                                "RDGB",
                                "SHOR"
                            ]
                        },
                        "churches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "churches",
                            "feature_codes": [
                                "CH"
                            ]
                        },
                        "waters": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "lakes, rivers",
                            "feature_codes": [
                                "LK",
                                "LKS",
                                "STM"
                            ]
                        },
                        "hotels": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "hotels",
                            "feature_codes": [
                                "HTL"
                            ]
                        },
                        "hospitals": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "hospitals",
                            "feature_codes": [
                                "HSP",
                                "HSPC",
                                "HSPD"
                            ]
                        },
                        "mountains": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "mountains, hills",
                            "feature_codes": [
                                "HLL",
                                "MT",
                                "PK"
                            ]
                        }
                    },
                    "endpoints": {
                        "coordinate": "/api/v1/location/coordinate.json",
                        "list": "/api/v1/location.json"
                    }
                }
            },
            "state": {
                "geoname-id": 2861876,
                "name": "North Rhine-Westphalia",
                "updated-at": "2023-08-21T18:57:28+00:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 51.21895,
                        "dms": "51°13′8.22″N"
                    },
                    "longitude": {
                        "decimal": 6.76339,
                        "dms": "6°45′48.204″E"
                    },
                    "srid": 4326,
                    "distance-user": {
                        "meters": {
                            "value": 486911.3,
                            "unit": "m",
                            "value-formatted": "486,911.3 m"
                        },
                        "kilometers": {
                            "value": 486.911,
                            "unit": "km",
                            "value-formatted": "486.911 km"
                        }
                    },
                    "direction-user": {
                        "degree": -88.7,
                        "cardinal-direction": "W",
                        "cardinal-direction-translated": "West"
                    }
                },
                "feature": {
                    "code": "ADM1",
                    "code-name": "First-order administrative division",
                    "class": "A",
                    "class-name": "Countries, States, Regions, etc."
                },
                "links": {
                    "wikipedia": {
                        "this": "https://en.wikipedia.org/wiki/North_Rhine-Westphalia"
                    },
                    "maps": {
                        "google": "https://www.google.de/maps/place/51.218950+6.763390",
                        "openstreetmap": "https://www.openstreetmap.org/?lat=51.218950&lon=6.763390&mlat=51.218950&mlon=6.763390&zoom=14&layers=M"
                    }
                },
                "properties": {
                    "population": {
                        "value": 18077762,
                        "unit": "#",
                        "value-formatted": "18,077,762"
                    },
                    "elevation": {
                        "value": 45,
                        "unit": "m",
                        "value-formatted": "45 m"
                    },
                    "country": "DE"
                },
                "next-places-config": {
                    "config": {
                        "cities": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cities",
                            "feature_codes": [
                                "PPLA",
                                "PPLA2",
                                "PPLA3"
                            ]
                        },
                        "parks": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "parks",
                            "feature_codes": [
                                "PRK"
                            ]
                        },
                        "airports": {
                            "distance": 200000,
                            "limit": 10,
                            "name": "airports",
                            "feature_codes": [
                                "AIRP"
                            ]
                        },
                        "stations": {
                            "distance": 20000,
                            "limit": 10,
                            "name": "stations",
                            "feature_codes": [
                                "BUSTN",
                                "BUSTP",
                                "MTRO",
                                "RSTN",
                                "RSTP"
                            ]
                        },
                        "cinemas": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cinemas",
                            "feature_codes": [
                                "THTR"
                            ]
                        },
                        "beaches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "beaches",
                            "feature_codes": [
                                "BCH",
                                "BCHS",
                                "RDGB",
                                "SHOR"
                            ]
                        },
                        "churches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "churches",
                            "feature_codes": [
                                "CH"
                            ]
                        },
                        "waters": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "lakes, rivers",
                            "feature_codes": [
                                "LK",
                                "LKS",
                                "STM"
                            ]
                        },
                        "hotels": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "hotels",
                            "feature_codes": [
                                "HTL"
                            ]
                        },
                        "hospitals": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "hospitals",
                            "feature_codes": [
                                "HSP",
                                "HSPC",
                                "HSPD"
                            ]
                        },
                        "mountains": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "mountains, hills",
                            "feature_codes": [
                                "HLL",
                                "MT",
                                "PK"
                            ]
                        }
                    },
                    "endpoints": {
                        "coordinate": "/api/v1/location/coordinate.json",
                        "list": "/api/v1/location.json"
                    }
                }
            },
            "country": {
                "geoname-id": 2921044,
                "name": "Germany",
                "updated-at": "2023-08-21T18:59:25+00:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 51.5,
                        "dms": "51°30′0″N"
                    },
                    "longitude": {
                        "decimal": 10.5,
                        "dms": "10°30′0″E"
                    },
                    "srid": 4326,
                    "distance-user": {
                        "meters": {
                            "value": 230602.6,
                            "unit": "m",
                            "value-formatted": "230,602.6 m"
                        },
                        "kilometers": {
                            "value": 230.603,
                            "unit": "km",
                            "value-formatted": "230.603 km"
                        }
                    },
                    "direction-user": {
                        "degree": -82.29,
                        "cardinal-direction": "W",
                        "cardinal-direction-translated": "West"
                    }
                },
                "feature": {
                    "code": "PCLI",
                    "code-name": "Independent political entity",
                    "class": "A",
                    "class-name": "Countries, States, Regions, etc."
                },
                "links": {
                    "wikipedia": {
                        "this": "https://en.wikipedia.org/wiki/Germany"
                    },
                    "maps": {
                        "google": "https://www.google.de/maps/place/51.500000+10.500000",
                        "openstreetmap": "https://www.openstreetmap.org/?lat=51.500000&lon=10.500000&mlat=51.500000&mlon=10.500000&zoom=14&layers=M"
                    }
                },
                "properties": {
                    "population": {
                        "value": 82927922,
                        "unit": "#",
                        "value-formatted": "82,927,922"
                    },
                    "elevation": {
                        "value": 303,
                        "unit": "m",
                        "value-formatted": "303 m"
                    },
                    "country": "DE"
                },
                "next-places-config": {
                    "config": {
                        "cities": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cities",
                            "feature_codes": [
                                "PPLA",
                                "PPLA2",
                                "PPLA3"
                            ]
                        },
                        "parks": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "parks",
                            "feature_codes": [
                                "PRK"
                            ]
                        },
                        "airports": {
                            "distance": 200000,
                            "limit": 10,
                            "name": "airports",
                            "feature_codes": [
                                "AIRP"
                            ]
                        },
                        "stations": {
                            "distance": 20000,
                            "limit": 10,
                            "name": "stations",
                            "feature_codes": [
                                "BUSTN",
                                "BUSTP",
                                "MTRO",
                                "RSTN",
                                "RSTP"
                            ]
                        },
                        "cinemas": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cinemas",
                            "feature_codes": [
                                "THTR"
                            ]
                        },
                        "beaches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "beaches",
                            "feature_codes": [
                                "BCH",
                                "BCHS",
                                "RDGB",
                                "SHOR"
                            ]
                        },
                        "churches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "churches",
                            "feature_codes": [
                                "CH"
                            ]
                        },
                        "waters": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "lakes, rivers",
                            "feature_codes": [
                                "LK",
                                "LKS",
                                "STM"
                            ]
                        },
                        "hotels": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "hotels",
                            "feature_codes": [
                                "HTL"
                            ]
                        },
                        "hospitals": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "hospitals",
                            "feature_codes": [
                                "HSP",
                                "HSPC",
                                "HSPD"
                            ]
                        },
                        "mountains": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "mountains, hills",
                            "feature_codes": [
                                "HLL",
                                "MT",
                                "PK"
                            ]
                        }
                    },
                    "endpoints": {
                        "coordinate": "/api/v1/location/coordinate.json",
                        "list": "/api/v1/location.json"
                    }
                }
            }
        },
        "next-places": {
            "H": {
                "config": {
                    "distance-meter": 10000,
                    "limit": 10,
                    "coordinate": {
                        "latitude": {
                            "decimal": 50.94123,
                            "dms": "50°56′28.428″N"
                        },
                        "longitude": {
                            "decimal": 6.95823,
                            "dms": "6°57′29.628″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Cologne Cathedral"
                    }
                },
                "feature": {
                    "class": "H",
                    "class-name": "Streams, Lakes, etc."
                },
                "places-number": 10,
                "places": [
                    {
                        "geoname-id": 2847667,
                        "name": "Rheinauhafen",
                        "updated-at": "2023-08-21T18:57:05+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.92868,
                                "dms": "50°55′43.248″N"
                            },
                            "longitude": {
                                "decimal": 6.96456,
                                "dms": "6°57′52.416″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1464.3,
                                    "unit": "m",
                                    "value-formatted": "1,464.3 m"
                                },
                                "kilometers": {
                                    "value": 1.464,
                                    "unit": "km",
                                    "value-formatted": "1.464 km"
                                }
                            },
                            "direction": {
                                "degree": 153.23,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474289.6,
                                    "unit": "m",
                                    "value-formatted": "474,289.6 m"
                                },
                                "kilometers": {
                                    "value": 474.29,
                                    "unit": "km",
                                    "value-formatted": "474.29 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.12,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HBR",
                            "code-name": "Harbor(s)",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Rheinauhafen"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.928680+6.964560",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.928680&lon=6.964560&mlat=50.928680&mlon=6.964560&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 44,
                                "unit": "m",
                                "value-formatted": "44 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2867837,
                        "name": "Mülheimer Hafen",
                        "updated-at": "2023-08-21T18:57:46+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.95394,
                                "dms": "50°57′14.184″N"
                            },
                            "longitude": {
                                "decimal": 6.98533,
                                "dms": "6°59′7.188″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 2366.8,
                                    "unit": "m",
                                    "value-formatted": "2,366.8 m"
                                },
                                "kilometers": {
                                    "value": 2.367,
                                    "unit": "km",
                                    "value-formatted": "2.367 km"
                                }
                            },
                            "direction": {
                                "degree": 64.87,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 472630.6,
                                    "unit": "m",
                                    "value-formatted": "472,630.6 m"
                                },
                                "kilometers": {
                                    "value": 472.631,
                                    "unit": "km",
                                    "value-formatted": "472.631 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.91,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HBR",
                            "code-name": "Harbor(s)",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.953940+6.985330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.953940&lon=6.985330&mlat=50.953940&mlon=6.985330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 42,
                                "unit": "m",
                                "value-formatted": "42 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2825627,
                        "name": "Strunderbach",
                        "updated-at": "2023-08-21T18:56:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.95378,
                                "dms": "50°57′13.608″N"
                            },
                            "longitude": {
                                "decimal": 7.01777,
                                "dms": "7°1′3.972″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 4398.4,
                                    "unit": "m",
                                    "value-formatted": "4,398.4 m"
                                },
                                "kilometers": {
                                    "value": 4.398,
                                    "unit": "km",
                                    "value-formatted": "4.398 km"
                                }
                            },
                            "direction": {
                                "degree": 78.1,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 470365.3,
                                    "unit": "m",
                                    "value-formatted": "470,365.3 m"
                                },
                                "kilometers": {
                                    "value": 470.365,
                                    "unit": "km",
                                    "value-formatted": "470.365 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.92,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Stream",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.953780+7.017770",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.953780&lon=7.017770&mlat=50.953780&mlon=7.017770&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 49,
                                "unit": "m",
                                "value-formatted": "49 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2925257,
                        "name": "Frechener Bach",
                        "updated-at": "2023-08-21T18:59:39+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.92371,
                                "dms": "50°55′25.356″N"
                            },
                            "longitude": {
                                "decimal": 6.88967,
                                "dms": "6°53′22.812″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 5184.6,
                                    "unit": "m",
                                    "value-formatted": "5,184.6 m"
                                },
                                "kilometers": {
                                    "value": 5.185,
                                    "unit": "km",
                                    "value-formatted": "5.185 km"
                                }
                            },
                            "direction": {
                                "degree": -104.33,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 479565.5,
                                    "unit": "m",
                                    "value-formatted": "479,565.5 m"
                                },
                                "kilometers": {
                                    "value": 479.566,
                                    "unit": "km",
                                    "value-formatted": "479.566 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.15,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Stream",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.923710+6.889670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.923710&lon=6.889670&mlat=50.923710&mlon=6.889670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 61,
                                "unit": "m",
                                "value-formatted": "61 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9881538,
                        "name": "Decksteiner Weiher",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.90727,
                                "dms": "50°54′26.172″N"
                            },
                            "longitude": {
                                "decimal": 6.89909,
                                "dms": "6°53′56.724″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 5607.3,
                                    "unit": "m",
                                    "value-formatted": "5,607.3 m"
                                },
                                "kilometers": {
                                    "value": 5.607,
                                    "unit": "km",
                                    "value-formatted": "5.607 km"
                                }
                            },
                            "direction": {
                                "degree": -119.87,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 479053.7,
                                    "unit": "m",
                                    "value-formatted": "479,053.7 m"
                                },
                                "kilometers": {
                                    "value": 479.054,
                                    "unit": "km",
                                    "value-formatted": "479.054 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.29,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "LK",
                            "code-name": "Lake",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.907270+6.899090",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.907270&lon=6.899090&mlat=50.907270&mlon=6.899090&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 59,
                                "unit": "m",
                                "value-formatted": "59 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2927720,
                        "name": "Faulbach",
                        "updated-at": "2023-08-21T18:59:41+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.95,
                                "dms": "50°57′0″N"
                            },
                            "longitude": {
                                "decimal": 7.05,
                                "dms": "7°2′60″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 6502.9,
                                    "unit": "m",
                                    "value-formatted": "6,502.9 m"
                                },
                                "kilometers": {
                                    "value": 6.503,
                                    "unit": "km",
                                    "value-formatted": "6.503 km"
                                }
                            },
                            "direction": {
                                "degree": 84.54,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 468143.3,
                                    "unit": "m",
                                    "value-formatted": "468,143.3 m"
                                },
                                "kilometers": {
                                    "value": 468.143,
                                    "unit": "km",
                                    "value-formatted": "468.143 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.95,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Stream",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.950000+7.050000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.950000&lon=7.050000&mlat=50.950000&mlon=7.050000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 53,
                                "unit": "m",
                                "value-formatted": "53 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2926314,
                        "name": "Flehbach",
                        "updated-at": "2023-08-21T18:59:40+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.95,
                                "dms": "50°57′0″N"
                            },
                            "longitude": {
                                "decimal": 7.05,
                                "dms": "7°2′60″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 6502.9,
                                    "unit": "m",
                                    "value-formatted": "6,502.9 m"
                                },
                                "kilometers": {
                                    "value": 6.503,
                                    "unit": "km",
                                    "value-formatted": "6.503 km"
                                }
                            },
                            "direction": {
                                "degree": 84.54,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 468143.3,
                                    "unit": "m",
                                    "value-formatted": "468,143.3 m"
                                },
                                "kilometers": {
                                    "value": 468.143,
                                    "unit": "km",
                                    "value-formatted": "468.143 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.95,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Stream",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Flehbach"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.950000+7.050000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.950000&lon=7.050000&mlat=50.950000&mlon=7.050000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 53,
                                "unit": "m",
                                "value-formatted": "53 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2943647,
                        "name": "Bruchbach",
                        "updated-at": "2023-08-21T19:00:06+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.95,
                                "dms": "50°57′0″N"
                            },
                            "longitude": {
                                "decimal": 7.05,
                                "dms": "7°2′60″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 6502.9,
                                    "unit": "m",
                                    "value-formatted": "6,502.9 m"
                                },
                                "kilometers": {
                                    "value": 6.503,
                                    "unit": "km",
                                    "value-formatted": "6.503 km"
                                }
                            },
                            "direction": {
                                "degree": 84.54,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 468143.3,
                                    "unit": "m",
                                    "value-formatted": "468,143.3 m"
                                },
                                "kilometers": {
                                    "value": 468.143,
                                    "unit": "km",
                                    "value-formatted": "468.143 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.95,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Stream",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.950000+7.050000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.950000&lon=7.050000&mlat=50.950000&mlon=7.050000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 53,
                                "unit": "m",
                                "value-formatted": "53 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2934712,
                        "name": "Duffesbach",
                        "updated-at": "2023-08-21T18:59:58+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.8873,
                                "dms": "50°53′14.28″N"
                            },
                            "longitude": {
                                "decimal": 6.88605,
                                "dms": "6°53′9.78″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 7846.5,
                                    "unit": "m",
                                    "value-formatted": "7,846.5 m"
                                },
                                "kilometers": {
                                    "value": 7.846,
                                    "unit": "km",
                                    "value-formatted": "7.846 km"
                                }
                            },
                            "direction": {
                                "degree": -126.77,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 480152.2,
                                    "unit": "m",
                                    "value-formatted": "480,152.2 m"
                                },
                                "kilometers": {
                                    "value": 480.152,
                                    "unit": "km",
                                    "value-formatted": "480.152 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.45,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Stream",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.887300+6.886050",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.887300&lon=6.886050&mlat=50.887300&mlon=6.886050&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 61,
                                "unit": "m",
                                "value-formatted": "61 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2920578,
                        "name": "Giesbach",
                        "updated-at": "2023-08-21T18:59:24+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.91223,
                                "dms": "50°54′44.028″N"
                            },
                            "longitude": {
                                "decimal": 7.09192,
                                "dms": "7°5′30.912″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 9909.4,
                                    "unit": "m",
                                    "value-formatted": "9,909.4 m"
                                },
                                "kilometers": {
                                    "value": 9.909,
                                    "unit": "km",
                                    "value-formatted": "9.909 km"
                                }
                            },
                            "direction": {
                                "degree": 102.24,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 465533.7,
                                    "unit": "m",
                                    "value-formatted": "465,533.7 m"
                                },
                                "kilometers": {
                                    "value": 465.534,
                                    "unit": "km",
                                    "value-formatted": "465.534 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.28,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Stream",
                            "class": "H",
                            "class-name": "Streams, Lakes, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.912230+7.091920",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.912230&lon=7.091920&mlat=50.912230&mlon=7.091920&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 57,
                                "unit": "m",
                                "value-formatted": "57 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    }
                ]
            },
            "L": {
                "config": {
                    "distance-meter": 10000,
                    "limit": 10,
                    "coordinate": {
                        "latitude": {
                            "decimal": 50.94123,
                            "dms": "50°56′28.428″N"
                        },
                        "longitude": {
                            "decimal": 6.95823,
                            "dms": "6°57′29.628″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Cologne Cathedral"
                    }
                },
                "feature": {
                    "class": "L",
                    "class-name": "Parks, Areas, etc."
                },
                "places-number": 9,
                "places": [
                    {
                        "geoname-id": 6947540,
                        "name": "Messe Köln",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.94239,
                                "dms": "50°56′32.604″N"
                            },
                            "longitude": {
                                "decimal": 6.97786,
                                "dms": "6°58′40.296″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1381.4,
                                    "unit": "m",
                                    "value-formatted": "1,381.4 m"
                                },
                                "kilometers": {
                                    "value": 1.381,
                                    "unit": "km",
                                    "value-formatted": "1.381 km"
                                }
                            },
                            "direction": {
                                "degree": 86.62,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 473245.4,
                                    "unit": "m",
                                    "value-formatted": "473,245.4 m"
                                },
                                "kilometers": {
                                    "value": 473.245,
                                    "unit": "km",
                                    "value-formatted": "473.245 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.01,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "RGNE",
                            "code-name": "Economic region",
                            "class": "L",
                            "class-name": "Parks, Areas, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.942390+6.977860",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.942390&lon=6.977860&mlat=50.942390&mlon=6.977860&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 48,
                                "unit": "m",
                                "value-formatted": "48 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947553,
                        "name": "Rheinpark",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9492,
                                "dms": "50°56′57.12″N"
                            },
                            "longitude": {
                                "decimal": 6.97556,
                                "dms": "6°58′32.016″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1503.2,
                                    "unit": "m",
                                    "value-formatted": "1,503.2 m"
                                },
                                "kilometers": {
                                    "value": 1.503,
                                    "unit": "km",
                                    "value-formatted": "1.503 km"
                                }
                            },
                            "direction": {
                                "degree": 65.3,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 473350.9,
                                    "unit": "m",
                                    "value-formatted": "473,350.9 m"
                                },
                                "kilometers": {
                                    "value": 473.351,
                                    "unit": "km",
                                    "value-formatted": "473.351 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.95,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PRK",
                            "code-name": "Park",
                            "class": "L",
                            "class-name": "Parks, Areas, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Rheinpark"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.949200+6.975560",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.949200&lon=6.975560&mlat=50.949200&mlon=6.975560&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 45,
                                "unit": "m",
                                "value-formatted": "45 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947537,
                        "name": "Volksgarten",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9214,
                                "dms": "50°55′17.04″N"
                            },
                            "longitude": {
                                "decimal": 6.94712,
                                "dms": "6°56′49.632″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 2338.4,
                                    "unit": "m",
                                    "value-formatted": "2,338.4 m"
                                },
                                "kilometers": {
                                    "value": 2.338,
                                    "unit": "km",
                                    "value-formatted": "2.338 km"
                                }
                            },
                            "direction": {
                                "degree": -150.74,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475571.2,
                                    "unit": "m",
                                    "value-formatted": "475,571.2 m"
                                },
                                "kilometers": {
                                    "value": 475.571,
                                    "unit": "km",
                                    "value-formatted": "475.571 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.18,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PRK",
                            "code-name": "Park",
                            "class": "L",
                            "class-name": "Parks, Areas, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.921400+6.947120",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.921400&lon=6.947120&mlat=50.921400&mlon=6.947120&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 49,
                                "unit": "m",
                                "value-formatted": "49 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947545,
                        "name": "Blücherpark",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9628,
                                "dms": "50°57′46.08″N"
                            },
                            "longitude": {
                                "decimal": 6.92972,
                                "dms": "6°55′46.992″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 3121.1,
                                    "unit": "m",
                                    "value-formatted": "3,121.1 m"
                                },
                                "kilometers": {
                                    "value": 3.121,
                                    "unit": "km",
                                    "value-formatted": "3.121 km"
                                }
                            },
                            "direction": {
                                "degree": -52.89,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 476447,
                                    "unit": "m",
                                    "value-formatted": "476,447 m"
                                },
                                "kilometers": {
                                    "value": 476.447,
                                    "unit": "km",
                                    "value-formatted": "476.447 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.83,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PRK",
                            "code-name": "Park",
                            "class": "L",
                            "class-name": "Parks, Areas, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.962800+6.929720",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.962800&lon=6.929720&mlat=50.962800&mlon=6.929720&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 50,
                                "unit": "m",
                                "value-formatted": "50 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947538,
                        "name": "Vorgebirgspark",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9107,
                                "dms": "50°54′38.52″N"
                            },
                            "longitude": {
                                "decimal": 6.95103,
                                "dms": "6°57′3.708″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 3432.1,
                                    "unit": "m",
                                    "value-formatted": "3,432.1 m"
                                },
                                "kilometers": {
                                    "value": 3.432,
                                    "unit": "km",
                                    "value-formatted": "3.432 km"
                                }
                            },
                            "direction": {
                                "degree": -166.73,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475393,
                                    "unit": "m",
                                    "value-formatted": "475,393 m"
                                },
                                "kilometers": {
                                    "value": 475.393,
                                    "unit": "km",
                                    "value-formatted": "475.393 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.27,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PRK",
                            "code-name": "Park",
                            "class": "L",
                            "class-name": "Parks, Areas, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.910700+6.951030",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.910700&lon=6.951030&mlat=50.910700&mlon=6.951030&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 48,
                                "unit": "m",
                                "value-formatted": "48 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947524,
                        "name": "Klettenbergpark",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9079,
                                "dms": "50°54′28.44″N"
                            },
                            "longitude": {
                                "decimal": 6.91932,
                                "dms": "6°55′9.552″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 4601.4,
                                    "unit": "m",
                                    "value-formatted": "4,601.4 m"
                                },
                                "kilometers": {
                                    "value": 4.601,
                                    "unit": "km",
                                    "value-formatted": "4.601 km"
                                }
                            },
                            "direction": {
                                "degree": -130.58,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 477634.3,
                                    "unit": "m",
                                    "value-formatted": "477,634.3 m"
                                },
                                "kilometers": {
                                    "value": 477.634,
                                    "unit": "km",
                                    "value-formatted": "477.634 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.29,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PRK",
                            "code-name": "Park",
                            "class": "L",
                            "class-name": "Parks, Areas, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.907900+6.919320",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.907900&lon=6.919320&mlat=50.907900&mlon=6.919320&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 55,
                                "unit": "m",
                                "value-formatted": "55 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947542,
                        "name": "Fritz-Encke-Volkspark",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.897,
                                "dms": "50°53′49.2″N"
                            },
                            "longitude": {
                                "decimal": 6.96167,
                                "dms": "6°57′42.012″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 4924.1,
                                    "unit": "m",
                                    "value-formatted": "4,924.1 m"
                                },
                                "kilometers": {
                                    "value": 4.924,
                                    "unit": "km",
                                    "value-formatted": "4.924 km"
                                }
                            },
                            "direction": {
                                "degree": 175.55,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474775.4,
                                    "unit": "m",
                                    "value-formatted": "474,775.4 m"
                                },
                                "kilometers": {
                                    "value": 474.775,
                                    "unit": "km",
                                    "value-formatted": "474.775 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.39,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PRK",
                            "code-name": "Park",
                            "class": "L",
                            "class-name": "Parks, Areas, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.897000+6.961670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.897000&lon=6.961670&mlat=50.897000&mlon=6.961670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 53,
                                "unit": "m",
                                "value-formatted": "53 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6698686,
                        "name": "Merheimer Heide",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.94653,
                                "dms": "50°56′47.508″N"
                            },
                            "longitude": {
                                "decimal": 7.0358,
                                "dms": "7°2′8.88″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 5466.6,
                                    "unit": "m",
                                    "value-formatted": "5,466.6 m"
                                },
                                "kilometers": {
                                    "value": 5.467,
                                    "unit": "km",
                                    "value-formatted": "5.467 km"
                                }
                            },
                            "direction": {
                                "degree": 86.09,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 469163.3,
                                    "unit": "m",
                                    "value-formatted": "469,163.3 m"
                                },
                                "kilometers": {
                                    "value": 469.163,
                                    "unit": "km",
                                    "value-formatted": "469.163 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.98,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PRK",
                            "code-name": "Park",
                            "class": "L",
                            "class-name": "Parks, Areas, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.946530+7.035800",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.946530&lon=7.035800&mlat=50.946530&mlon=7.035800&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 49,
                                "unit": "m",
                                "value-formatted": "49 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2897215,
                        "name": "Hürtherberg",
                        "updated-at": "2023-08-21T18:58:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.86667,
                                "dms": "50°52′0.012″N"
                            },
                            "longitude": {
                                "decimal": 6.88333,
                                "dms": "6°52′59.988″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 9814.3,
                                    "unit": "m",
                                    "value-formatted": "9,814.3 m"
                                },
                                "kilometers": {
                                    "value": 9.814,
                                    "unit": "km",
                                    "value-formatted": "9.814 km"
                                }
                            },
                            "direction": {
                                "degree": -134.87,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 480546.3,
                                    "unit": "m",
                                    "value-formatted": "480,546.3 m"
                                },
                                "kilometers": {
                                    "value": 480.546,
                                    "unit": "km",
                                    "value-formatted": "480.546 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.62,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "AREA",
                            "code-name": "Area",
                            "class": "L",
                            "class-name": "Parks, Areas, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.866670+6.883330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.866670&lon=6.883330&mlat=50.866670&mlon=6.883330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 105,
                                "unit": "m",
                                "value-formatted": "105 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    }
                ]
            },
            "P": {
                "config": {
                    "distance-meter": 10000,
                    "limit": 10,
                    "coordinate": {
                        "latitude": {
                            "decimal": 50.94123,
                            "dms": "50°56′28.428″N"
                        },
                        "longitude": {
                            "decimal": 6.95823,
                            "dms": "6°57′29.628″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Cologne Cathedral"
                    }
                },
                "feature": {
                    "class": "P",
                    "class-name": "Cities, Villages, etc."
                },
                "places-number": 10,
                "places": [
                    {
                        "geoname-id": 11778269,
                        "name": "Archdioces Cologne",
                        "updated-at": "2023-08-21T19:02:03+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.94105,
                                "dms": "50°56′27.78″N"
                            },
                            "longitude": {
                                "decimal": 6.95796,
                                "dms": "6°57′28.656″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 27.5,
                                    "unit": "m",
                                    "value-formatted": "27.5 m"
                                },
                                "kilometers": {
                                    "value": 0.028,
                                    "unit": "km",
                                    "value-formatted": "0.028 km"
                                }
                            },
                            "direction": {
                                "degree": -123.69,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474646.9,
                                    "unit": "m",
                                    "value-formatted": "474,646.9 m"
                                },
                                "kilometers": {
                                    "value": 474.647,
                                    "unit": "km",
                                    "value-formatted": "474.647 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.01,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLR",
                            "code-name": "Religious populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.941050+6.957960",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.941050&lon=6.957960&mlat=50.941050&mlon=6.957960&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 62,
                                "unit": "m",
                                "value-formatted": "62 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6691073,
                        "name": "Altstadt Nord",
                        "updated-at": "2023-08-21T19:01:24+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93893,
                                "dms": "50°56′20.148″N"
                            },
                            "longitude": {
                                "decimal": 6.95752,
                                "dms": "6°57′27.072″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 260.5,
                                    "unit": "m",
                                    "value-formatted": "260.5 m"
                                },
                                "kilometers": {
                                    "value": 0.261,
                                    "unit": "km",
                                    "value-formatted": "0.261 km"
                                }
                            },
                            "direction": {
                                "degree": -162.84,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474695.2,
                                    "unit": "m",
                                    "value-formatted": "474,695.2 m"
                                },
                                "kilometers": {
                                    "value": 474.695,
                                    "unit": "km",
                                    "value-formatted": "474.695 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.03,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Section of populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://de.wikipedia.org/wiki/K%C3%B6ln-Altstadt-Nord"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.938930+6.957520",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.938930&lon=6.957520&mlat=50.938930&mlon=6.957520&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 17922,
                                "unit": "#",
                                "value-formatted": "17,922"
                            },
                            "elevation": {
                                "value": 59,
                                "unit": "m",
                                "value-formatted": "59 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6691072,
                        "name": "Altstadt Sud",
                        "updated-at": "2023-08-21T19:01:24+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93331,
                                "dms": "50°55′59.916″N"
                            },
                            "longitude": {
                                "decimal": 6.95954,
                                "dms": "6°57′34.344″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 885.4,
                                    "unit": "m",
                                    "value-formatted": "885.4 m"
                                },
                                "kilometers": {
                                    "value": 0.885,
                                    "unit": "km",
                                    "value-formatted": "0.885 km"
                                }
                            },
                            "direction": {
                                "degree": 170.61,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474601,
                                    "unit": "m",
                                    "value-formatted": "474,601 m"
                                },
                                "kilometers": {
                                    "value": 474.601,
                                    "unit": "km",
                                    "value-formatted": "474.601 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.08,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Section of populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://de.wikipedia.org/wiki/Altstadt-S%C3%BCd"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.933310+6.959540",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.933310&lon=6.959540&mlat=50.933310&mlon=6.959540&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 27515,
                                "unit": "#",
                                "value-formatted": "27,515"
                            },
                            "elevation": {
                                "value": 52,
                                "unit": "m",
                                "value-formatted": "52 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6691074,
                        "name": "Neumarkt",
                        "updated-at": "2023-08-21T19:01:24+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93601,
                                "dms": "50°56′9.636″N"
                            },
                            "longitude": {
                                "decimal": 6.94745,
                                "dms": "6°56′50.82″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 952.6,
                                    "unit": "m",
                                    "value-formatted": "952.6 m"
                                },
                                "kilometers": {
                                    "value": 0.953,
                                    "unit": "km",
                                    "value-formatted": "0.953 km"
                                }
                            },
                            "direction": {
                                "degree": -115.84,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475423.1,
                                    "unit": "m",
                                    "value-formatted": "475,423.1 m"
                                },
                                "kilometers": {
                                    "value": 475.423,
                                    "unit": "km",
                                    "value-formatted": "475.423 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.06,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Section of populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.936010+6.947450",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.936010&lon=6.947450&mlat=50.936010&mlon=6.947450&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 56,
                                "unit": "m",
                                "value-formatted": "56 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2886242,
                        "name": "Cologne",
                        "updated-at": "2023-08-21T18:58:24+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93333,
                                "dms": "50°55′59.988″N"
                            },
                            "longitude": {
                                "decimal": 6.95,
                                "dms": "6°57′0″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1050.8,
                                    "unit": "m",
                                    "value-formatted": "1,050.8 m"
                                },
                                "kilometers": {
                                    "value": 1.051,
                                    "unit": "km",
                                    "value-formatted": "1.051 km"
                                }
                            },
                            "direction": {
                                "degree": -133.83,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475267.5,
                                    "unit": "m",
                                    "value-formatted": "475,267.5 m"
                                },
                                "kilometers": {
                                    "value": 475.267,
                                    "unit": "km",
                                    "value-formatted": "475.267 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.08,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLA2",
                            "code-name": "Seat of a second-order administrative division",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Cologne"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.933330+6.950000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.933330&lon=6.950000&mlat=50.933330&mlon=6.950000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 963395,
                                "unit": "#",
                                "value-formatted": "963,395"
                            },
                            "elevation": {
                                "value": 58,
                                "unit": "m",
                                "value-formatted": "58 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 8593855,
                        "name": "Neustadt/Nord",
                        "updated-at": "2023-08-21T19:01:30+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.949,
                                "dms": "50°56′56.4″N"
                            },
                            "longitude": {
                                "decimal": 6.9479,
                                "dms": "6°56′52.44″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1127,
                                    "unit": "m",
                                    "value-formatted": "1,127 m"
                                },
                                "kilometers": {
                                    "value": 1.127,
                                    "unit": "km",
                                    "value-formatted": "1.127 km"
                                }
                            },
                            "direction": {
                                "degree": -53.05,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475285.2,
                                    "unit": "m",
                                    "value-formatted": "475,285.2 m"
                                },
                                "kilometers": {
                                    "value": 475.285,
                                    "unit": "km",
                                    "value-formatted": "475.285 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.95,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Section of populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.949000+6.947900",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.949000&lon=6.947900&mlat=50.949000&mlon=6.947900&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 28146,
                                "unit": "#",
                                "value-formatted": "28,146"
                            },
                            "elevation": {
                                "value": 51,
                                "unit": "m",
                                "value-formatted": "51 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2937790,
                        "name": "Deutz",
                        "updated-at": "2023-08-21T19:00:01+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93463,
                                "dms": "50°56′4.668″N"
                            },
                            "longitude": {
                                "decimal": 6.97495,
                                "dms": "6°58′29.82″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1382.5,
                                    "unit": "m",
                                    "value-formatted": "1,382.5 m"
                                },
                                "kilometers": {
                                    "value": 1.382,
                                    "unit": "km",
                                    "value-formatted": "1.382 km"
                                }
                            },
                            "direction": {
                                "degree": 111.54,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 473513.1,
                                    "unit": "m",
                                    "value-formatted": "473,513.1 m"
                                },
                                "kilometers": {
                                    "value": 473.513,
                                    "unit": "km",
                                    "value-formatted": "473.513 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.07,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Section of populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Deutz%2C_Cologne"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.934630+6.974950",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.934630&lon=6.974950&mlat=50.934630&mlon=6.974950&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 15238,
                                "unit": "#",
                                "value-formatted": "15,238"
                            },
                            "elevation": {
                                "value": 49,
                                "unit": "m",
                                "value-formatted": "49 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6691075,
                        "name": "Stadtgarten",
                        "updated-at": "2023-08-21T19:01:24+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9436,
                                "dms": "50°56′36.96″N"
                            },
                            "longitude": {
                                "decimal": 6.93617,
                                "dms": "6°56′10.212″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1567.9,
                                    "unit": "m",
                                    "value-formatted": "1,567.9 m"
                                },
                                "kilometers": {
                                    "value": 1.568,
                                    "unit": "km",
                                    "value-formatted": "1.568 km"
                                }
                            },
                            "direction": {
                                "degree": -83.87,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 476148.5,
                                    "unit": "m",
                                    "value-formatted": "476,148.5 m"
                                },
                                "kilometers": {
                                    "value": 476.149,
                                    "unit": "km",
                                    "value-formatted": "476.149 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.99,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Section of populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.943600+6.936170",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.943600&lon=6.936170&mlat=50.943600&mlon=6.936170&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 52,
                                "unit": "m",
                                "value-formatted": "52 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 8593856,
                        "name": "Neustadt/Süd",
                        "updated-at": "2023-08-21T19:01:30+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.92509,
                                "dms": "50°55′30.324″N"
                            },
                            "longitude": {
                                "decimal": 6.94762,
                                "dms": "6°56′51.432″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1942.6,
                                    "unit": "m",
                                    "value-formatted": "1,942.6 m"
                                },
                                "kilometers": {
                                    "value": 1.943,
                                    "unit": "km",
                                    "value-formatted": "1.943 km"
                                }
                            },
                            "direction": {
                                "degree": -146.68,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475504.2,
                                    "unit": "m",
                                    "value-formatted": "475,504.2 m"
                                },
                                "kilometers": {
                                    "value": 475.504,
                                    "unit": "km",
                                    "value-formatted": "475.504 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.15,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Section of populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.925090+6.947620",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.925090&lon=6.947620&mlat=50.925090&mlon=6.947620&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 37939,
                                "unit": "#",
                                "value-formatted": "37,939"
                            },
                            "elevation": {
                                "value": 55,
                                "unit": "m",
                                "value-formatted": "55 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6691076,
                        "name": "Neuehrenfeld",
                        "updated-at": "2023-08-21T19:01:24+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.95753,
                                "dms": "50°57′27.108″N"
                            },
                            "longitude": {
                                "decimal": 6.93611,
                                "dms": "6°56′9.996″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 2384.6,
                                    "unit": "m",
                                    "value-formatted": "2,384.6 m"
                                },
                                "kilometers": {
                                    "value": 2.385,
                                    "unit": "km",
                                    "value-formatted": "2.385 km"
                                }
                            },
                            "direction": {
                                "degree": -53.61,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 476041.4,
                                    "unit": "m",
                                    "value-formatted": "476,041.4 m"
                                },
                                "kilometers": {
                                    "value": 476.041,
                                    "unit": "km",
                                    "value-formatted": "476.041 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.87,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Section of populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.957530+6.936110",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.957530&lon=6.936110&mlat=50.957530&mlon=6.936110&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 23621,
                                "unit": "#",
                                "value-formatted": "23,621"
                            },
                            "elevation": {
                                "value": 49,
                                "unit": "m",
                                "value-formatted": "49 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    }
                ]
            },
            "R": {
                "config": {
                    "distance-meter": 10000,
                    "limit": 10,
                    "coordinate": {
                        "latitude": {
                            "decimal": 50.94123,
                            "dms": "50°56′28.428″N"
                        },
                        "longitude": {
                            "decimal": 6.95823,
                            "dms": "6°57′29.628″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Cologne Cathedral"
                    }
                },
                "feature": {
                    "class": "R",
                    "class-name": "Roads, Railroads, etc."
                },
                "places-number": 9,
                "places": [
                    {
                        "geoname-id": 9881481,
                        "name": "Kattenbug/Komödienstraße",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.94149,
                                "dms": "50°56′29.364″N"
                            },
                            "longitude": {
                                "decimal": 6.95067,
                                "dms": "6°57′2.412″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 530.5,
                                    "unit": "m",
                                    "value-formatted": "530.5 m"
                                },
                                "kilometers": {
                                    "value": 0.53,
                                    "unit": "km",
                                    "value-formatted": "0.53 km"
                                }
                            },
                            "direction": {
                                "degree": -88.03,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475152.7,
                                    "unit": "m",
                                    "value-formatted": "475,152.7 m"
                                },
                                "kilometers": {
                                    "value": 475.153,
                                    "unit": "km",
                                    "value-formatted": "475.153 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.01,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "ST",
                            "code-name": "Street",
                            "class": "R",
                            "class-name": "Roads, Railroads, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.941490+6.950670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.941490&lon=6.950670&mlat=50.941490&mlon=6.950670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 61,
                                "unit": "m",
                                "value-formatted": "61 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9881484,
                        "name": "Gereonstraße",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.94294,
                                "dms": "50°56′34.584″N"
                            },
                            "longitude": {
                                "decimal": 6.94888,
                                "dms": "6°56′55.968″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 682.1,
                                    "unit": "m",
                                    "value-formatted": "682.1 m"
                                },
                                "kilometers": {
                                    "value": 0.682,
                                    "unit": "km",
                                    "value-formatted": "0.682 km"
                                }
                            },
                            "direction": {
                                "degree": -79.64,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475265.9,
                                    "unit": "m",
                                    "value-formatted": "475,265.9 m"
                                },
                                "kilometers": {
                                    "value": 475.266,
                                    "unit": "km",
                                    "value-formatted": "475.266 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "ST",
                            "code-name": "Street",
                            "class": "R",
                            "class-name": "Roads, Railroads, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.942940+6.948880",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.942940&lon=6.948880&mlat=50.942940&mlon=6.948880&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 56,
                                "unit": "m",
                                "value-formatted": "56 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9962642,
                        "name": "Cäcilienstraße/Neumarkt",
                        "updated-at": "2023-08-21T19:01:44+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93569,
                                "dms": "50°56′8.484″N"
                            },
                            "longitude": {
                                "decimal": 6.94909,
                                "dms": "6°56′56.724″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 888.6,
                                    "unit": "m",
                                    "value-formatted": "888.6 m"
                                },
                                "kilometers": {
                                    "value": 0.889,
                                    "unit": "km",
                                    "value-formatted": "0.889 km"
                                }
                            },
                            "direction": {
                                "degree": -121.22,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475311.2,
                                    "unit": "m",
                                    "value-formatted": "475,311.2 m"
                                },
                                "kilometers": {
                                    "value": 475.311,
                                    "unit": "km",
                                    "value-formatted": "475.311 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.06,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "TRL",
                            "code-name": "Trail",
                            "class": "R",
                            "class-name": "Roads, Railroads, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.935690+6.949090",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.935690&lon=6.949090&mlat=50.935690&mlon=6.949090&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 58,
                                "unit": "m",
                                "value-formatted": "58 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9962675,
                        "name": "Lungengasse",
                        "updated-at": "2023-08-21T19:01:44+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93493,
                                "dms": "50°56′5.748″N"
                            },
                            "longitude": {
                                "decimal": 6.94737,
                                "dms": "6°56′50.532″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1034.3,
                                    "unit": "m",
                                    "value-formatted": "1,034.3 m"
                                },
                                "kilometers": {
                                    "value": 1.034,
                                    "unit": "km",
                                    "value-formatted": "1.034 km"
                                }
                            },
                            "direction": {
                                "degree": -120.12,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475437.8,
                                    "unit": "m",
                                    "value-formatted": "475,437.8 m"
                                },
                                "kilometers": {
                                    "value": 475.438,
                                    "unit": "km",
                                    "value-formatted": "475.438 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.06,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "ST",
                            "code-name": "Street",
                            "class": "R",
                            "class-name": "Roads, Railroads, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.934930+6.947370",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.934930&lon=6.947370&mlat=50.934930&mlon=6.947370&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 56,
                                "unit": "m",
                                "value-formatted": "56 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9962697,
                        "name": "Marsilstein",
                        "updated-at": "2023-08-21T19:01:44+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93519,
                                "dms": "50°56′6.684″N"
                            },
                            "longitude": {
                                "decimal": 6.94406,
                                "dms": "6°56′38.616″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1198.7,
                                    "unit": "m",
                                    "value-formatted": "1,198.7 m"
                                },
                                "kilometers": {
                                    "value": 1.199,
                                    "unit": "km",
                                    "value-formatted": "1.199 km"
                                }
                            },
                            "direction": {
                                "degree": -113.09,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475666.9,
                                    "unit": "m",
                                    "value-formatted": "475,666.9 m"
                                },
                                "kilometers": {
                                    "value": 475.667,
                                    "unit": "km",
                                    "value-formatted": "475.667 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.06,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "ST",
                            "code-name": "Street",
                            "class": "R",
                            "class-name": "Roads, Railroads, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.935190+6.944060",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.935190&lon=6.944060&mlat=50.935190&mlon=6.944060&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 56,
                                "unit": "m",
                                "value-formatted": "56 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 10400438,
                        "name": "cologne BBf",
                        "updated-at": "2023-08-21T19:01:46+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.95087,
                                "dms": "50°57′3.132″N"
                            },
                            "longitude": {
                                "decimal": 6.94633,
                                "dms": "6°56′46.788″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1358,
                                    "unit": "m",
                                    "value-formatted": "1,358 m"
                                },
                                "kilometers": {
                                    "value": 1.358,
                                    "unit": "km",
                                    "value-formatted": "1.358 km"
                                }
                            },
                            "direction": {
                                "degree": -50.99,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475379.9,
                                    "unit": "m",
                                    "value-formatted": "475,379.9 m"
                                },
                                "kilometers": {
                                    "value": 475.38,
                                    "unit": "km",
                                    "value-formatted": "475.38 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.93,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "RYD",
                            "code-name": "Railroad yard",
                            "class": "R",
                            "class-name": "Roads, Railroads, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.950870+6.946330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.950870&lon=6.946330&mlat=50.950870&mlon=6.946330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 53,
                                "unit": "m",
                                "value-formatted": "53 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6384245,
                        "name": "Schaafenstraße",
                        "updated-at": "2023-08-21T19:00:47+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93498,
                                "dms": "50°56′5.928″N"
                            },
                            "longitude": {
                                "decimal": 6.94117,
                                "dms": "6°56′28.212″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1382.7,
                                    "unit": "m",
                                    "value-formatted": "1,382.7 m"
                                },
                                "kilometers": {
                                    "value": 1.383,
                                    "unit": "km",
                                    "value-formatted": "1.383 km"
                                }
                            },
                            "direction": {
                                "degree": -110.12,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475870.6,
                                    "unit": "m",
                                    "value-formatted": "475,870.6 m"
                                },
                                "kilometers": {
                                    "value": 475.871,
                                    "unit": "km",
                                    "value-formatted": "475.871 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.06,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "RD",
                            "code-name": "Road",
                            "class": "R",
                            "class-name": "Roads, Railroads, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.934980+6.941170",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.934980&lon=6.941170&mlat=50.934980&mlon=6.941170&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 59,
                                "unit": "m",
                                "value-formatted": "59 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9881483,
                        "name": "Achterstraße",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.92665,
                                "dms": "50°55′35.94″N"
                            },
                            "longitude": {
                                "decimal": 6.95872,
                                "dms": "6°57′31.392″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1621.6,
                                    "unit": "m",
                                    "value-formatted": "1,621.6 m"
                                },
                                "kilometers": {
                                    "value": 1.622,
                                    "unit": "km",
                                    "value-formatted": "1.622 km"
                                }
                            },
                            "direction": {
                                "degree": 178.08,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474715.1,
                                    "unit": "m",
                                    "value-formatted": "474,715.1 m"
                                },
                                "kilometers": {
                                    "value": 474.715,
                                    "unit": "km",
                                    "value-formatted": "474.715 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.14,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "ST",
                            "code-name": "Street",
                            "class": "R",
                            "class-name": "Roads, Railroads, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.926650+6.958720",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.926650&lon=6.958720&mlat=50.926650&mlon=6.958720&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 53,
                                "unit": "m",
                                "value-formatted": "53 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9881479,
                        "name": "Richard-Wagner-Straße",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93532,
                                "dms": "50°56′7.152″N"
                            },
                            "longitude": {
                                "decimal": 6.93654,
                                "dms": "6°56′11.544″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1655.8,
                                    "unit": "m",
                                    "value-formatted": "1,655.8 m"
                                },
                                "kilometers": {
                                    "value": 1.656,
                                    "unit": "km",
                                    "value-formatted": "1.656 km"
                                }
                            },
                            "direction": {
                                "degree": -105.24,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 476191.3,
                                    "unit": "m",
                                    "value-formatted": "476,191.3 m"
                                },
                                "kilometers": {
                                    "value": 476.191,
                                    "unit": "km",
                                    "value-formatted": "476.191 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.06,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "ST",
                            "code-name": "Street",
                            "class": "R",
                            "class-name": "Roads, Railroads, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.935320+6.936540",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.935320&lon=6.936540&mlat=50.935320&mlon=6.936540&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 59,
                                "unit": "m",
                                "value-formatted": "59 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    }
                ]
            },
            "S": {
                "config": {
                    "distance-meter": 10000,
                    "limit": 10,
                    "coordinate": {
                        "latitude": {
                            "decimal": 50.94123,
                            "dms": "50°56′28.428″N"
                        },
                        "longitude": {
                            "decimal": 6.95823,
                            "dms": "6°57′29.628″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Cologne Cathedral"
                    }
                },
                "feature": {
                    "class": "S",
                    "class-name": "Spots, Buildings, Farms, etc."
                },
                "places-number": 10,
                "places": [
                    {
                        "geoname-id": 6324464,
                        "name": "Cologne Cathedral",
                        "updated-at": "2023-08-21T19:00:47+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.94123,
                                "dms": "50°56′28.428″N"
                            },
                            "longitude": {
                                "decimal": 6.95823,
                                "dms": "6°57′29.628″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 0,
                                    "unit": "m",
                                    "value-formatted": "0 m"
                                },
                                "kilometers": {
                                    "value": 0,
                                    "unit": "km",
                                    "value-formatted": "0 km"
                                }
                            },
                            "direction": {
                                "degree": 0,
                                "cardinal-direction": "N",
                                "cardinal-direction-translated": "North"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474626.6,
                                    "unit": "m",
                                    "value-formatted": "474,626.6 m"
                                },
                                "kilometers": {
                                    "value": 474.627,
                                    "unit": "km",
                                    "value-formatted": "474.627 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.01,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "CH",
                            "code-name": "Church",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Cologne_Cathedral"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.941230+6.958230",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.941230&lon=6.958230&mlat=50.941230&mlon=6.958230&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 62,
                                "unit": "m",
                                "value-formatted": "62 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947533,
                        "name": "Romano-Germanic Museum",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9406,
                                "dms": "50°56′26.16″N"
                            },
                            "longitude": {
                                "decimal": 6.95833,
                                "dms": "6°57′29.988″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 70.4,
                                    "unit": "m",
                                    "value-formatted": "70.4 m"
                                },
                                "kilometers": {
                                    "value": 0.07,
                                    "unit": "km",
                                    "value-formatted": "0.07 km"
                                }
                            },
                            "direction": {
                                "degree": 170.98,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474624.8,
                                    "unit": "m",
                                    "value-formatted": "474,624.8 m"
                                },
                                "kilometers": {
                                    "value": 474.625,
                                    "unit": "km",
                                    "value-formatted": "474.625 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.02,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "MUS",
                            "code-name": "Museum",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Romano-Germanic_Museum"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.940600+6.958330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.940600&lon=6.958330&mlat=50.940600&mlon=6.958330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 62,
                                "unit": "m",
                                "value-formatted": "62 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6471031,
                        "name": "Dom Hotel Le Meridien",
                        "updated-at": "2023-08-21T19:00:47+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.941,
                                "dms": "50°56′27.6″N"
                            },
                            "longitude": {
                                "decimal": 6.957,
                                "dms": "6°57′25.2″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 89.9,
                                    "unit": "m",
                                    "value-formatted": "89.9 m"
                                },
                                "kilometers": {
                                    "value": 0.09,
                                    "unit": "km",
                                    "value-formatted": "0.09 km"
                                }
                            },
                            "direction": {
                                "degree": -100.59,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474714.4,
                                    "unit": "m",
                                    "value-formatted": "474,714.4 m"
                                },
                                "kilometers": {
                                    "value": 474.714,
                                    "unit": "km",
                                    "value-formatted": "474.714 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.01,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.941000+6.957000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.941000&lon=6.957000&mlat=50.941000&mlon=6.957000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 59,
                                "unit": "m",
                                "value-formatted": "59 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6487281,
                        "name": "Dom Hotel - A Meridien Hotel",
                        "updated-at": "2023-08-21T19:00:47+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9423,
                                "dms": "50°56′32.28″N"
                            },
                            "longitude": {
                                "decimal": 6.9585,
                                "dms": "6°57′30.6″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 120.5,
                                    "unit": "m",
                                    "value-formatted": "120.5 m"
                                },
                                "kilometers": {
                                    "value": 0.12,
                                    "unit": "km",
                                    "value-formatted": "0.12 km"
                                }
                            },
                            "direction": {
                                "degree": 14.16,
                                "cardinal-direction": "N",
                                "cardinal-direction-translated": "North"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474598.9,
                                    "unit": "m",
                                    "value-formatted": "474,598.9 m"
                                },
                                "kilometers": {
                                    "value": 474.599,
                                    "unit": "km",
                                    "value-formatted": "474.599 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.942300+6.958500",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.942300&lon=6.958500&mlat=50.942300&mlon=6.958500&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 58,
                                "unit": "m",
                                "value-formatted": "58 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 10342918,
                        "name": "Althoff Dom Hotel Koln",
                        "updated-at": "2023-08-21T19:01:46+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.94073,
                                "dms": "50°56′26.628″N"
                            },
                            "longitude": {
                                "decimal": 6.95662,
                                "dms": "6°57′23.832″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 125.8,
                                    "unit": "m",
                                    "value-formatted": "125.8 m"
                                },
                                "kilometers": {
                                    "value": 0.126,
                                    "unit": "km",
                                    "value-formatted": "0.126 km"
                                }
                            },
                            "direction": {
                                "degree": -107.25,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474743.2,
                                    "unit": "m",
                                    "value-formatted": "474,743.2 m"
                                },
                                "kilometers": {
                                    "value": 474.743,
                                    "unit": "km",
                                    "value-formatted": "474.743 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.02,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.940730+6.956620",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.940730&lon=6.956620&mlat=50.940730&mlon=6.956620&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 59,
                                "unit": "m",
                                "value-formatted": "59 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947532,
                        "name": "opera house Cologne",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9407,
                                "dms": "50°56′26.52″N"
                            },
                            "longitude": {
                                "decimal": 6.95991,
                                "dms": "6°57′35.676″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 131.6,
                                    "unit": "m",
                                    "value-formatted": "131.6 m"
                                },
                                "kilometers": {
                                    "value": 0.132,
                                    "unit": "km",
                                    "value-formatted": "0.132 km"
                                }
                            },
                            "direction": {
                                "degree": 107.51,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474513.6,
                                    "unit": "m",
                                    "value-formatted": "474,513.6 m"
                                },
                                "kilometers": {
                                    "value": 474.514,
                                    "unit": "km",
                                    "value-formatted": "474.514 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.02,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "OPRA",
                            "code-name": "Opera house",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Cologne_Opera"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.940700+6.959910",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.940700&lon=6.959910&mlat=50.940700&mlon=6.959910&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 60,
                                "unit": "m",
                                "value-formatted": "60 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947534,
                        "name": "theatre Cologne",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9407,
                                "dms": "50°56′26.52″N"
                            },
                            "longitude": {
                                "decimal": 6.95991,
                                "dms": "6°57′35.676″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 131.6,
                                    "unit": "m",
                                    "value-formatted": "131.6 m"
                                },
                                "kilometers": {
                                    "value": 0.132,
                                    "unit": "km",
                                    "value-formatted": "0.132 km"
                                }
                            },
                            "direction": {
                                "degree": 107.51,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474513.6,
                                    "unit": "m",
                                    "value-formatted": "474,513.6 m"
                                },
                                "kilometers": {
                                    "value": 474.514,
                                    "unit": "km",
                                    "value-formatted": "474.514 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.02,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "THTR",
                            "code-name": "Theater",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Schauspiel_K%C3%B6ln"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.940700+6.959910",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.940700&lon=6.959910&mlat=50.940700&mlon=6.959910&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 60,
                                "unit": "m",
                                "value-formatted": "60 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6947519,
                        "name": "Cologne University of Applied Sciences",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9407,
                                "dms": "50°56′26.52″N"
                            },
                            "longitude": {
                                "decimal": 6.95991,
                                "dms": "6°57′35.676″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 131.6,
                                    "unit": "m",
                                    "value-formatted": "131.6 m"
                                },
                                "kilometers": {
                                    "value": 0.132,
                                    "unit": "km",
                                    "value-formatted": "0.132 km"
                                }
                            },
                            "direction": {
                                "degree": 107.51,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474513.6,
                                    "unit": "m",
                                    "value-formatted": "474,513.6 m"
                                },
                                "kilometers": {
                                    "value": 474.514,
                                    "unit": "km",
                                    "value-formatted": "474.514 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.02,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "UNIV",
                            "code-name": "University",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Cologne_University_of_Applied_Sciences"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.940700+6.959910",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.940700&lon=6.959910&mlat=50.940700&mlon=6.959910&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 60,
                                "unit": "m",
                                "value-formatted": "60 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 6473141,
                        "name": "Sofitel Cologne Mondial Am Dom",
                        "updated-at": "2023-08-21T19:00:47+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.94,
                                "dms": "50°56′24″N"
                            },
                            "longitude": {
                                "decimal": 6.959,
                                "dms": "6°57′32.4″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 147,
                                    "unit": "m",
                                    "value-formatted": "147 m"
                                },
                                "kilometers": {
                                    "value": 0.147,
                                    "unit": "km",
                                    "value-formatted": "0.147 km"
                                }
                            },
                            "direction": {
                                "degree": 147.95,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474582.9,
                                    "unit": "m",
                                    "value-formatted": "474,582.9 m"
                                },
                                "kilometers": {
                                    "value": 474.583,
                                    "unit": "km",
                                    "value-formatted": "474.583 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.02,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.940000+6.959000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.940000&lon=6.959000&mlat=50.940000&mlon=6.959000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 59,
                                "unit": "m",
                                "value-formatted": "59 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 10298840,
                        "name": "City Class Hotel Europa Am Dom",
                        "updated-at": "2023-08-21T19:01:45+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9399,
                                "dms": "50°56′23.64″N"
                            },
                            "longitude": {
                                "decimal": 6.95893,
                                "dms": "6°57′32.148″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 155.8,
                                    "unit": "m",
                                    "value-formatted": "155.8 m"
                                },
                                "kilometers": {
                                    "value": 0.156,
                                    "unit": "km",
                                    "value-formatted": "0.156 km"
                                }
                            },
                            "direction": {
                                "degree": 152.24,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 474588.6,
                                    "unit": "m",
                                    "value-formatted": "474,588.6 m"
                                },
                                "kilometers": {
                                    "value": 474.589,
                                    "unit": "km",
                                    "value-formatted": "474.589 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.02,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Spots, Buildings, Farms, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.939900+6.958930",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.939900&lon=6.958930&mlat=50.939900&mlon=6.958930&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 59,
                                "unit": "m",
                                "value-formatted": "59 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    }
                ]
            },
            "T": {
                "config": {
                    "distance-meter": 20000,
                    "limit": 15,
                    "coordinate": {
                        "latitude": {
                            "decimal": 50.94123,
                            "dms": "50°56′28.428″N"
                        },
                        "longitude": {
                            "decimal": 6.95823,
                            "dms": "6°57′29.628″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Cologne Cathedral"
                    }
                },
                "feature": {
                    "class": "T",
                    "class-name": "Mountains ,Hills, Rocks, etc."
                },
                "places-number": 15,
                "places": [
                    {
                        "geoname-id": 9294241,
                        "name": "Herkules-Berg",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.95171,
                                "dms": "50°57′6.156″N"
                            },
                            "longitude": {
                                "decimal": 6.9409,
                                "dms": "6°56′27.24″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1682.9,
                                    "unit": "m",
                                    "value-formatted": "1,682.9 m"
                                },
                                "kilometers": {
                                    "value": 1.683,
                                    "unit": "km",
                                    "value-formatted": "1.683 km"
                                }
                            },
                            "direction": {
                                "degree": -58.84,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 475752.6,
                                    "unit": "m",
                                    "value-formatted": "475,752.6 m"
                                },
                                "kilometers": {
                                    "value": 475.753,
                                    "unit": "km",
                                    "value-formatted": "475.753 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.92,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.951710+6.940900",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.951710&lon=6.940900&mlat=50.951710&mlon=6.940900&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 71,
                                "unit": "m",
                                "value-formatted": "71 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9881537,
                        "name": "Trümmer-Berg Beethovenpark (Pilz-Berg)",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.91011,
                                "dms": "50°54′36.396″N"
                            },
                            "longitude": {
                                "decimal": 6.9145,
                                "dms": "6°54′52.2″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 4622.6,
                                    "unit": "m",
                                    "value-formatted": "4,622.6 m"
                                },
                                "kilometers": {
                                    "value": 4.623,
                                    "unit": "km",
                                    "value-formatted": "4.623 km"
                                }
                            },
                            "direction": {
                                "degree": -125.44,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 477951.1,
                                    "unit": "m",
                                    "value-formatted": "477,951.1 m"
                                },
                                "kilometers": {
                                    "value": 477.951,
                                    "unit": "km",
                                    "value-formatted": "477.951 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.27,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.910110+6.914500",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.910110&lon=6.914500&mlat=50.910110&mlon=6.914500&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 62,
                                "unit": "m",
                                "value-formatted": "62 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2886235,
                        "name": "Cologne Lowland",
                        "updated-at": "2023-08-21T18:58:24+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.01667,
                                "dms": "51°1′0.012″N"
                            },
                            "longitude": {
                                "decimal": 6.91667,
                                "dms": "6°55′0.012″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8878.8,
                                    "unit": "m",
                                    "value-formatted": "8,878.8 m"
                                },
                                "kilometers": {
                                    "value": 8.879,
                                    "unit": "km",
                                    "value-formatted": "8.879 km"
                                }
                            },
                            "direction": {
                                "degree": -28.85,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 476982,
                                    "unit": "m",
                                    "value-formatted": "476,982 m"
                                },
                                "kilometers": {
                                    "value": 476.982,
                                    "unit": "km",
                                    "value-formatted": "476.982 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.37,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "DPR",
                            "code-name": "Depression(s)",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Cologne_Lowland"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.016670+6.916670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.016670&lon=6.916670&mlat=51.016670&mlon=6.916670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 47,
                                "unit": "m",
                                "value-formatted": "47 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2893229,
                        "name": "Kaninchenberg",
                        "updated-at": "2023-08-21T18:58:29+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93333,
                                "dms": "50°55′59.988″N"
                            },
                            "longitude": {
                                "decimal": 6.78333,
                                "dms": "6°46′59.988″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 12287,
                                    "unit": "m",
                                    "value-formatted": "12,287 m"
                                },
                                "kilometers": {
                                    "value": 12.287,
                                    "unit": "km",
                                    "value-formatted": "12.287 km"
                                }
                            },
                            "direction": {
                                "degree": -92.59,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 486913.5,
                                    "unit": "m",
                                    "value-formatted": "486,913.5 m"
                                },
                                "kilometers": {
                                    "value": 486.913,
                                    "unit": "km",
                                    "value-formatted": "486.913 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.05,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.933330+6.783330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.933330&lon=6.783330&mlat=50.933330&mlon=6.783330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 93,
                                "unit": "m",
                                "value-formatted": "93 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9856184,
                        "name": "Monte Troodelöh",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93856,
                                "dms": "50°56′18.816″N"
                            },
                            "longitude": {
                                "decimal": 7.14189,
                                "dms": "7°8′30.804″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 12872.1,
                                    "unit": "m",
                                    "value-formatted": "12,872.1 m"
                                },
                                "kilometers": {
                                    "value": 12.872,
                                    "unit": "km",
                                    "value-formatted": "12.872 km"
                                }
                            },
                            "direction": {
                                "degree": 90.83,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 461815.3,
                                    "unit": "m",
                                    "value-formatted": "461,815.3 m"
                                },
                                "kilometers": {
                                    "value": 461.815,
                                    "unit": "km",
                                    "value-formatted": "461.815 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.06,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Monte_Troodel%C3%B6h"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.938560+7.141890",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.938560&lon=7.141890&mlat=50.938560&mlon=7.141890&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 127,
                                "unit": "m",
                                "value-formatted": "127 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2915974,
                        "name": "Großer Steinberg",
                        "updated-at": "2023-08-21T18:59:20+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.92675,
                                "dms": "50°55′36.3″N"
                            },
                            "longitude": {
                                "decimal": 7.14199,
                                "dms": "7°8′31.164″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 12977.6,
                                    "unit": "m",
                                    "value-formatted": "12,977.6 m"
                                },
                                "kilometers": {
                                    "value": 12.978,
                                    "unit": "km",
                                    "value-formatted": "12.978 km"
                                }
                            },
                            "direction": {
                                "degree": 94.51,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 461907.6,
                                    "unit": "m",
                                    "value-formatted": "461,907.6 m"
                                },
                                "kilometers": {
                                    "value": 461.908,
                                    "unit": "km",
                                    "value-formatted": "461.908 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.17,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.926750+7.141990",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.926750&lon=7.141990&mlat=50.926750&mlon=7.141990&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 141,
                                "unit": "m",
                                "value-formatted": "141 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2871821,
                        "name": "Mergelsberg",
                        "updated-at": "2023-08-21T18:57:49+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.92874,
                                "dms": "50°55′43.464″N"
                            },
                            "longitude": {
                                "decimal": 7.1505,
                                "dms": "7°9′1.8″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 13544.8,
                                    "unit": "m",
                                    "value-formatted": "13,544.8 m"
                                },
                                "kilometers": {
                                    "value": 13.545,
                                    "unit": "km",
                                    "value-formatted": "13.545 km"
                                }
                            },
                            "direction": {
                                "degree": 93.72,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 461295.9,
                                    "unit": "m",
                                    "value-formatted": "461,295.9 m"
                                },
                                "kilometers": {
                                    "value": 461.296,
                                    "unit": "km",
                                    "value-formatted": "461.296 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.15,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.928740+7.150500",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.928740&lon=7.150500&mlat=50.928740&mlon=7.150500&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 144,
                                "unit": "m",
                                "value-formatted": "144 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2917685,
                        "name": "Grenz-Berg",
                        "updated-at": "2023-08-21T18:59:22+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.86667,
                                "dms": "50°52′0.012″N"
                            },
                            "longitude": {
                                "decimal": 7.11667,
                                "dms": "7°7′0.012″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 13862.6,
                                    "unit": "m",
                                    "value-formatted": "13,862.6 m"
                                },
                                "kilometers": {
                                    "value": 13.863,
                                    "unit": "km",
                                    "value-formatted": "13.863 km"
                                }
                            },
                            "direction": {
                                "degree": 115.2,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 464239.4,
                                    "unit": "m",
                                    "value-formatted": "464,239.4 m"
                                },
                                "kilometers": {
                                    "value": 464.239,
                                    "unit": "km",
                                    "value-formatted": "464.239 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.68,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.866670+7.116670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.866670&lon=7.116670&mlat=50.866670&mlon=7.116670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 66,
                                "unit": "m",
                                "value-formatted": "66 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9613229,
                        "name": "Röttgen-Höhe",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.91776,
                                "dms": "50°55′3.936″N"
                            },
                            "longitude": {
                                "decimal": 6.74093,
                                "dms": "6°44′27.348″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 15451.1,
                                    "unit": "m",
                                    "value-formatted": "15,451.1 m"
                                },
                                "kilometers": {
                                    "value": 15.451,
                                    "unit": "km",
                                    "value-formatted": "15.451 km"
                                }
                            },
                            "direction": {
                                "degree": -96.16,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 490011.4,
                                    "unit": "m",
                                    "value-formatted": "490,011.4 m"
                                },
                                "kilometers": {
                                    "value": 490.011,
                                    "unit": "km",
                                    "value-formatted": "490.011 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.17,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.917760+6.740930",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.917760&lon=6.740930&mlat=50.917760&mlon=6.740930&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 162,
                                "unit": "m",
                                "value-formatted": "162 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9613232,
                        "name": "Glessener Höhe",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.95464,
                                "dms": "50°57′16.704″N"
                            },
                            "longitude": {
                                "decimal": 6.72642,
                                "dms": "6°43′35.112″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 16307.9,
                                    "unit": "m",
                                    "value-formatted": "16,307.9 m"
                                },
                                "kilometers": {
                                    "value": 16.308,
                                    "unit": "km",
                                    "value-formatted": "16.308 km"
                                }
                            },
                            "direction": {
                                "degree": -86.69,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 490714.5,
                                    "unit": "m",
                                    "value-formatted": "490,714.5 m"
                                },
                                "kilometers": {
                                    "value": 490.715,
                                    "unit": "km",
                                    "value-formatted": "490.715 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.87,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.954640+6.726420",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.954640&lon=6.726420&mlat=50.954640&mlon=6.726420&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 199,
                                "unit": "m",
                                "value-formatted": "199 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2820713,
                        "name": "Tütberg",
                        "updated-at": "2023-08-21T18:56:11+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.9444,
                                "dms": "50°56′39.84″N"
                            },
                            "longitude": {
                                "decimal": 7.19205,
                                "dms": "7°11′31.38″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 16386,
                                    "unit": "m",
                                    "value-formatted": "16,386 m"
                                },
                                "kilometers": {
                                    "value": 16.386,
                                    "unit": "km",
                                    "value-formatted": "16.386 km"
                                }
                            },
                            "direction": {
                                "degree": 89.22,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 458262.6,
                                    "unit": "m",
                                    "value-formatted": "458,262.6 m"
                                },
                                "kilometers": {
                                    "value": 458.263,
                                    "unit": "km",
                                    "value-formatted": "458.263 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.02,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.944400+7.192050",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.944400&lon=7.192050&mlat=50.944400&mlon=7.192050&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 222,
                                "unit": "m",
                                "value-formatted": "222 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 9613231,
                        "name": "Fischbach-Höhe",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.94515,
                                "dms": "50°56′42.54″N"
                            },
                            "longitude": {
                                "decimal": 6.71423,
                                "dms": "6°42′51.228″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 17100.9,
                                    "unit": "m",
                                    "value-formatted": "17,100.9 m"
                                },
                                "kilometers": {
                                    "value": 17.101,
                                    "unit": "km",
                                    "value-formatted": "17.101 km"
                                }
                            },
                            "direction": {
                                "degree": -89.08,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 491643,
                                    "unit": "m",
                                    "value-formatted": "491,643 m"
                                },
                                "kilometers": {
                                    "value": 491.643,
                                    "unit": "km",
                                    "value-formatted": "491.643 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.95,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.945150+6.714230",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.945150&lon=6.714230&mlat=50.945150&mlon=6.714230&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 161,
                                "unit": "m",
                                "value-formatted": "161 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2901145,
                        "name": "Hohe Schanze",
                        "updated-at": "2023-08-21T18:58:46+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.86502,
                                "dms": "50°51′54.072″N"
                            },
                            "longitude": {
                                "decimal": 7.17684,
                                "dms": "7°10′36.624″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 17516,
                                    "unit": "m",
                                    "value-formatted": "17,516 m"
                                },
                                "kilometers": {
                                    "value": 17.516,
                                    "unit": "km",
                                    "value-formatted": "17.516 km"
                                }
                            },
                            "direction": {
                                "degree": 109.22,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 460051.2,
                                    "unit": "m",
                                    "value-formatted": "460,051.2 m"
                                },
                                "kilometers": {
                                    "value": 460.051,
                                    "unit": "km",
                                    "value-formatted": "460.051 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.71,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.865020+7.176840",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.865020&lon=7.176840&mlat=50.865020&mlon=7.176840&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 135,
                                "unit": "m",
                                "value-formatted": "135 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2875446,
                        "name": "Lüderich",
                        "updated-at": "2023-08-21T18:58:04+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93124,
                                "dms": "50°55′52.464″N"
                            },
                            "longitude": {
                                "decimal": 7.20967,
                                "dms": "7°12′34.812″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 17654.2,
                                    "unit": "m",
                                    "value-formatted": "17,654.2 m"
                                },
                                "kilometers": {
                                    "value": 17.654,
                                    "unit": "km",
                                    "value-formatted": "17.654 km"
                                }
                            },
                            "direction": {
                                "degree": 92.28,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 457140,
                                    "unit": "m",
                                    "value-formatted": "457,140 m"
                                },
                                "kilometers": {
                                    "value": 457.14,
                                    "unit": "km",
                                    "value-formatted": "457.14 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.14,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hill",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.931240+7.209670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.931240&lon=7.209670&mlat=50.931240&mlon=7.209670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 264,
                                "unit": "m",
                                "value-formatted": "264 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2847673,
                        "name": "Rheidter Werth",
                        "updated-at": "2023-08-21T18:57:05+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.78879,
                                "dms": "50°47′19.644″N"
                            },
                            "longitude": {
                                "decimal": 7.0387,
                                "dms": "7°2′19.32″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 17866.6,
                                    "unit": "m",
                                    "value-formatted": "17,866.6 m"
                                },
                                "kilometers": {
                                    "value": 17.867,
                                    "unit": "km",
                                    "value-formatted": "17.867 km"
                                }
                            },
                            "direction": {
                                "degree": 152.17,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 470557.9,
                                    "unit": "m",
                                    "value-formatted": "470,557.9 m"
                                },
                                "kilometers": {
                                    "value": 470.558,
                                    "unit": "km",
                                    "value-formatted": "470.558 km"
                                }
                            },
                            "direction-user": {
                                "degree": -92.33,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "ISL",
                            "code-name": "Island",
                            "class": "T",
                            "class-name": "Mountains ,Hills, Rocks, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.788790+7.038700",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.788790&lon=7.038700&mlat=50.788790&mlon=7.038700&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 62,
                                "unit": "m",
                                "value-formatted": "62 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    }
                ]
            },
            "U": {
                "config": {
                    "distance-meter": 10000,
                    "limit": 10,
                    "coordinate": {
                        "latitude": {
                            "decimal": 50.94123,
                            "dms": "50°56′28.428″N"
                        },
                        "longitude": {
                            "decimal": 6.95823,
                            "dms": "6°57′29.628″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Cologne Cathedral"
                    }
                },
                "feature": {
                    "class": "U",
                    "class-name": "Undersea, etc."
                },
                "places-number": 0,
                "places": []
            },
            "V": {
                "config": {
                    "distance-meter": 15000,
                    "limit": 10,
                    "coordinate": {
                        "latitude": {
                            "decimal": 50.94123,
                            "dms": "50°56′28.428″N"
                        },
                        "longitude": {
                            "decimal": 6.95823,
                            "dms": "6°57′29.628″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Cologne Cathedral"
                    }
                },
                "feature": {
                    "class": "V",
                    "class-name": "Forest, Heath, etc."
                },
                "places-number": 2,
                "places": [
                    {
                        "geoname-id": 2838203,
                        "name": "Schluchter Heide",
                        "updated-at": "2023-08-21T18:56:45+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.97301,
                                "dms": "50°58′22.836″N"
                            },
                            "longitude": {
                                "decimal": 7.10949,
                                "dms": "7°6′34.164″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 11168.3,
                                    "unit": "m",
                                    "value-formatted": "11,168.3 m"
                                },
                                "kilometers": {
                                    "value": 11.168,
                                    "unit": "km",
                                    "value-formatted": "11.168 km"
                                }
                            },
                            "direction": {
                                "degree": 78.13,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 463810.5,
                                    "unit": "m",
                                    "value-formatted": "463,810.5 m"
                                },
                                "kilometers": {
                                    "value": 463.811,
                                    "unit": "km",
                                    "value-formatted": "463.811 km"
                                }
                            },
                            "direction-user": {
                                "degree": -90.76,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "HTH",
                            "code-name": "Heath",
                            "class": "V",
                            "class-name": "Forest, Heath, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.973010+7.109490",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.973010&lon=7.109490&mlat=50.973010&mlon=7.109490&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 77,
                                "unit": "m",
                                "value-formatted": "77 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    {
                        "geoname-id": 2885876,
                        "name": "Forst Königsforst",
                        "updated-at": "2023-08-21T18:58:23+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.93506,
                                "dms": "50°56′6.216″N"
                            },
                            "longitude": {
                                "decimal": 7.13928,
                                "dms": "7°8′21.408″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 12704.8,
                                    "unit": "m",
                                    "value-formatted": "12,704.8 m"
                                },
                                "kilometers": {
                                    "value": 12.705,
                                    "unit": "km",
                                    "value-formatted": "12.705 km"
                                }
                            },
                            "direction": {
                                "degree": 91.95,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 462026.7,
                                    "unit": "m",
                                    "value-formatted": "462,026.7 m"
                                },
                                "kilometers": {
                                    "value": 462.027,
                                    "unit": "km",
                                    "value-formatted": "462.027 km"
                                }
                            },
                            "direction-user": {
                                "degree": -91.09,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "FRST",
                            "code-name": "Forest(s)",
                            "class": "V",
                            "class-name": "Forest, Heath, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.935060+7.139280",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.935060&lon=7.139280&mlat=50.935060&mlon=7.139280&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 118,
                                "unit": "m",
                                "value-formatted": "118 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    }
                ]
            }
        }
    },
    "given": {
        "query": {
            "raw": "6324464",
            "parsed": {
                "type": "search-geoname-id",
                "geoname-id": 6324464
            }
        },
        "next-places": true,
        "language": {
            "raw": "en",
            "parsed": {
                "name": "English"
            }
        },
        "country": {
            "raw": "US",
            "parsed": {
                "name": "US"
            }
        },
        "coordinate": {
            "raw": "51.061156,13.740712",
            "parsed": {
                "latitude": {
                    "decimal": 51.061156,
                    "dms": "51°3′40.1616″N"
                },
                "longitude": {
                    "decimal": 13.740712,
                    "dms": "13°44′26.5632″E"
                },
                "links": {
                    "google": "https://www.google.de/maps/place/51.061156+13.740712",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=51.061156&lon=13.740712&mlat=51.061156&mlon=13.740712&zoom=14&layers=M"
                }
            },
            "location": {
                "geoname-id": 12196347,
                "name": "Innere Neustadt",
                "name-full": "Innere Neustadt, Dresden, Saxony, Germany",
                "updated-at": "2023-08-21T19:02:09+00:00",
                "properties": {
                    "elevation": {
                        "value": 115,
                        "unit": "m",
                        "value-formatted": "115 m"
                    },
                    "country": "DE"
                },
                "feature": {
                    "code": "PPLX",
                    "code-name": "Section of populated place",
                    "class": "P",
                    "class-name": "Cities, Villages, etc."
                },
                "coordinate": {
                    "latitude": {
                        "decimal": 51.05833,
                        "dms": "51°3′29.988″N"
                    },
                    "longitude": {
                        "decimal": 13.74167,
                        "dms": "13°44′30.012″E"
                    },
                    "srid": 4326,
                    "distance": {
                        "meters": {
                            "value": 321.3,
                            "unit": "m",
                            "value-formatted": "321.3 m"
                        },
                        "kilometers": {
                            "value": 0.321,
                            "unit": "km",
                            "value-formatted": "0.321 km"
                        }
                    },
                    "direction": {
                        "degree": 161.27,
                        "cardinal-direction": "S",
                        "cardinal-direction-translated": "South"
                    },
                    "distance-user": {
                        "meters": {
                            "value": 321.3,
                            "unit": "m",
                            "value-formatted": "321.3 m"
                        },
                        "kilometers": {
                            "value": 0.321,
                            "unit": "km",
                            "value-formatted": "0.321 km"
                        }
                    },
                    "direction-user": {
                        "degree": 161.27,
                        "cardinal-direction": "S",
                        "cardinal-direction-translated": "South"
                    }
                },
                "timezone": {
                    "timezone": "Europe/Berlin",
                    "country": "DE",
                    "current-time": {
                        "timezone": "2024-02-11T16:47:39+01:00",
                        "utc": "2024-02-11T15:47:39+00:00"
                    },
                    "offset": "+01:00",
                    "coordinate": {
                        "latitude": {
                            "decimal": 52.5,
                            "dms": "52°30′0″N"
                        },
                        "longitude": {
                            "decimal": 13.36666,
                            "dms": "13°21′59.976″E"
                        },
                        "srid": 4326,
                        "distance": {
                            "meters": {
                                "value": 162047.6,
                                "unit": "m",
                                "value-formatted": "162,047.6 m"
                            },
                            "kilometers": {
                                "value": 162.048,
                                "unit": "km",
                                "value-formatted": "162.048 km"
                            }
                        },
                        "direction": {
                            "degree": -14.57,
                            "cardinal-direction": "N",
                            "cardinal-direction-translated": "North"
                        },
                        "distance-user": {
                            "meters": {
                                "value": 162047.6,
                                "unit": "m",
                                "value-formatted": "162,047.6 m"
                            },
                            "kilometers": {
                                "value": 162.048,
                                "unit": "km",
                                "value-formatted": "162.048 km"
                            }
                        },
                        "direction-user": {
                            "degree": -14.57,
                            "cardinal-direction": "N",
                            "cardinal-direction-translated": "North"
                        }
                    }
                },
                "links": {
                    "maps": {
                        "google": "https://www.google.de/maps/place/51.058330+13.741670",
                        "openstreetmap": "https://www.openstreetmap.org/?lat=51.058330&lon=13.741670&mlat=51.058330&mlon=13.741670&zoom=14&layers=M"
                    },
                    "wikipedia": {
                        "locations": {
                            "city-municipality": "https://en.wikipedia.org/wiki/Dresden",
                            "state": "https://en.wikipedia.org/wiki/Saxony",
                            "country": "https://en.wikipedia.org/wiki/Germany"
                        }
                    }
                },
                "next-places-config": {
                    "config": {
                        "cities": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cities",
                            "feature_codes": [
                                "PPLA",
                                "PPLA2",
                                "PPLA3"
                            ]
                        },
                        "parks": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "parks",
                            "feature_codes": [
                                "PRK"
                            ]
                        },
                        "airports": {
                            "distance": 200000,
                            "limit": 10,
                            "name": "airports",
                            "feature_codes": [
                                "AIRP"
                            ]
                        },
                        "stations": {
                            "distance": 20000,
                            "limit": 10,
                            "name": "stations",
                            "feature_codes": [
                                "BUSTN",
                                "BUSTP",
                                "MTRO",
                                "RSTN",
                                "RSTP"
                            ]
                        },
                        "cinemas": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "cinemas",
                            "feature_codes": [
                                "THTR"
                            ]
                        },
                        "beaches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "beaches",
                            "feature_codes": [
                                "BCH",
                                "BCHS",
                                "RDGB",
                                "SHOR"
                            ]
                        },
                        "churches": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "churches",
                            "feature_codes": [
                                "CH"
                            ]
                        },
                        "waters": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "lakes, rivers",
                            "feature_codes": [
                                "LK",
                                "LKS",
                                "STM"
                            ]
                        },
                        "hotels": {
                            "distance": 100000,
                            "limit": 10,
                            "name": "hotels",
                            "feature_codes": [
                                "HTL"
                            ]
                        },
                        "hospitals": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "hospitals",
                            "feature_codes": [
                                "HSP",
                                "HSPC",
                                "HSPD"
                            ]
                        },
                        "mountains": {
                            "distance": 50000,
                            "limit": 10,
                            "name": "mountains, hills",
                            "feature_codes": [
                                "HLL",
                                "MT",
                                "PK"
                            ]
                        }
                    },
                    "endpoints": {
                        "coordinate": "/api/v1/location/coordinate.json",
                        "list": "/api/v1/location.json"
                    }
                },
                "locations": {
                    "district-locality": {
                        "geoname-id": 12196347,
                        "name": "Innere Neustadt",
                        "updated-at": "2023-08-21T19:02:09+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.05833,
                                "dms": "51°3′29.988″N"
                            },
                            "longitude": {
                                "decimal": 13.74167,
                                "dms": "13°44′30.012″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 321.3,
                                    "unit": "m",
                                    "value-formatted": "321.3 m"
                                },
                                "kilometers": {
                                    "value": 0.321,
                                    "unit": "km",
                                    "value-formatted": "0.321 km"
                                }
                            },
                            "direction": {
                                "degree": 161.27,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 321.3,
                                    "unit": "m",
                                    "value-formatted": "321.3 m"
                                },
                                "kilometers": {
                                    "value": 0.321,
                                    "unit": "km",
                                    "value-formatted": "0.321 km"
                                }
                            },
                            "direction-user": {
                                "degree": 161.27,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Section of populated place",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.058330+13.741670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.058330&lon=13.741670&mlat=51.058330&mlon=13.741670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 115,
                                "unit": "m",
                                "value-formatted": "115 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    "city-municipality": {
                        "geoname-id": 2935022,
                        "name": "Dresden",
                        "updated-at": "2023-08-21T18:59:58+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.05089,
                                "dms": "51°3′3.204″N"
                            },
                            "longitude": {
                                "decimal": 13.73832,
                                "dms": "13°44′17.952″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1153.7,
                                    "unit": "m",
                                    "value-formatted": "1,153.7 m"
                                },
                                "kilometers": {
                                    "value": 1.154,
                                    "unit": "km",
                                    "value-formatted": "1.154 km"
                                }
                            },
                            "direction": {
                                "degree": -166.88,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 1153.7,
                                    "unit": "m",
                                    "value-formatted": "1,153.7 m"
                                },
                                "kilometers": {
                                    "value": 1.154,
                                    "unit": "km",
                                    "value-formatted": "1.154 km"
                                }
                            },
                            "direction-user": {
                                "degree": -166.88,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            }
                        },
                        "feature": {
                            "code": "PPLA",
                            "code-name": "Seat of a first-order administrative division",
                            "class": "P",
                            "class-name": "Cities, Villages, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Dresden"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.050890+13.738320",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.050890&lon=13.738320&mlat=51.050890&mlon=13.738320&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 556227,
                                "unit": "#",
                                "value-formatted": "556,227"
                            },
                            "elevation": {
                                "value": 116,
                                "unit": "m",
                                "value-formatted": "116 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    "state": {
                        "geoname-id": 2842566,
                        "name": "Saxony",
                        "updated-at": "2023-08-21T18:56:50+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51,
                                "dms": "51°0′0″N"
                            },
                            "longitude": {
                                "decimal": 13.25,
                                "dms": "13°15′0″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 34983.3,
                                    "unit": "m",
                                    "value-formatted": "34,983.3 m"
                                },
                                "kilometers": {
                                    "value": 34.983,
                                    "unit": "km",
                                    "value-formatted": "34.983 km"
                                }
                            },
                            "direction": {
                                "degree": -97.1,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 34983.3,
                                    "unit": "m",
                                    "value-formatted": "34,983.3 m"
                                },
                                "kilometers": {
                                    "value": 34.983,
                                    "unit": "km",
                                    "value-formatted": "34.983 km"
                                }
                            },
                            "direction-user": {
                                "degree": -97.1,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "ADM1",
                            "code-name": "First-order administrative division",
                            "class": "A",
                            "class-name": "Countries, States, Regions, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Saxony"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.000000+13.250000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.000000&lon=13.250000&mlat=51.000000&mlon=13.250000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 4077937,
                                "unit": "#",
                                "value-formatted": "4,077,937"
                            },
                            "elevation": {
                                "value": 342,
                                "unit": "m",
                                "value-formatted": "342 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    },
                    "country": {
                        "geoname-id": 2921044,
                        "name": "Germany",
                        "updated-at": "2023-08-21T18:59:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.5,
                                "dms": "51°30′0″N"
                            },
                            "longitude": {
                                "decimal": 10.5,
                                "dms": "10°30′0″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 230602.6,
                                    "unit": "m",
                                    "value-formatted": "230,602.6 m"
                                },
                                "kilometers": {
                                    "value": 230.603,
                                    "unit": "km",
                                    "value-formatted": "230.603 km"
                                }
                            },
                            "direction": {
                                "degree": -82.29,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            },
                            "distance-user": {
                                "meters": {
                                    "value": 230602.6,
                                    "unit": "m",
                                    "value-formatted": "230,602.6 m"
                                },
                                "kilometers": {
                                    "value": 230.603,
                                    "unit": "km",
                                    "value-formatted": "230.603 km"
                                }
                            },
                            "direction-user": {
                                "degree": -82.29,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PCLI",
                            "code-name": "Independent political entity",
                            "class": "A",
                            "class-name": "Countries, States, Regions, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Germany"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.500000+10.500000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.500000&lon=10.500000&mlat=51.500000&mlon=10.500000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "population": {
                                "value": 82927922,
                                "unit": "#",
                                "value-formatted": "82,927,922"
                            },
                            "elevation": {
                                "value": 303,
                                "unit": "m",
                                "value-formatted": "303 m"
                            },
                            "country": "DE"
                        },
                        "next-places-config": {
                            "config": {
                                "cities": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cities",
                                    "feature_codes": [
                                        "PPLA",
                                        "PPLA2",
                                        "PPLA3"
                                    ]
                                },
                                "parks": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "parks",
                                    "feature_codes": [
                                        "PRK"
                                    ]
                                },
                                "airports": {
                                    "distance": 200000,
                                    "limit": 10,
                                    "name": "airports",
                                    "feature_codes": [
                                        "AIRP"
                                    ]
                                },
                                "stations": {
                                    "distance": 20000,
                                    "limit": 10,
                                    "name": "stations",
                                    "feature_codes": [
                                        "BUSTN",
                                        "BUSTP",
                                        "MTRO",
                                        "RSTN",
                                        "RSTP"
                                    ]
                                },
                                "cinemas": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "cinemas",
                                    "feature_codes": [
                                        "THTR"
                                    ]
                                },
                                "beaches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "beaches",
                                    "feature_codes": [
                                        "BCH",
                                        "BCHS",
                                        "RDGB",
                                        "SHOR"
                                    ]
                                },
                                "churches": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "churches",
                                    "feature_codes": [
                                        "CH"
                                    ]
                                },
                                "waters": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "lakes, rivers",
                                    "feature_codes": [
                                        "LK",
                                        "LKS",
                                        "STM"
                                    ]
                                },
                                "hotels": {
                                    "distance": 100000,
                                    "limit": 10,
                                    "name": "hotels",
                                    "feature_codes": [
                                        "HTL"
                                    ]
                                },
                                "hospitals": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "hospitals",
                                    "feature_codes": [
                                        "HSP",
                                        "HSPC",
                                        "HSPD"
                                    ]
                                },
                                "mountains": {
                                    "distance": 50000,
                                    "limit": 10,
                                    "name": "mountains, hills",
                                    "feature_codes": [
                                        "HLL",
                                        "MT",
                                        "PK"
                                    ]
                                }
                            },
                            "endpoints": {
                                "coordinate": "/api/v1/location/coordinate.json",
                                "list": "/api/v1/location.json"
                            }
                        }
                    }
                }
            }
        }
    },
    "valid": true,
    "date": "2024-02-11T15:47:39+00:00",
    "version": "0.1.42"
};

export default GeoNameSearch;