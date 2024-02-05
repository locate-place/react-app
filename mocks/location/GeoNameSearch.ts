import {TypeApiData} from "../../src/types/Types";

const GeoNameSearch: TypeApiData = {
    "data-licence": {
        "full": "Creative Commons Attribution 4.0 License",
        "short": "CC-BY 4.0",
        "url": "https://download.geonames.org/export/dump/readme.txt"
    },
    "time-taken": "293ms",
    "memory-taken": "4.54 MB",
    "performance": {
        "LocationService": {
            "findOneBy": [
                {
                    "time": {
                        "value": 25.58,
                        "value-formatted": "25.58 ms"
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
                        "value": 267.04,
                        "value-formatted": "267.04 ms"
                    },
                    "memory": {
                        "value": 4.53,
                        "value-formatted": "4.53 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationByGeonameId",
                        "line": 571
                    }
                }
            ]
        }
    },
    "data": {
        "geoname-id": 2935022,
        "name": "Dresden",
        "name-full": "Innere Altstadt, Dresden, Sachsen, Deutschland",
        "updated-at": "2023-08-21T18:59:58+00:00",
        "properties": {
            "population": {
                "value": 556227,
                "unit": "#",
                "value-formatted": "556.227"
            },
            "elevation": {
                "value": 116,
                "unit": "m",
                "value-formatted": "116 m"
            },
            "country": "DE"
        },
        "feature": {
            "code": "PPLA",
            "code-name": "Sitz einer Verwaltungseinheit erster Ordnung",
            "class": "P",
            "class-name": "Städte, Dörfer, etc."
        },
        "coordinate": {
            "latitude": {
                "decimal": 51.05089,
                "dms": "51°3′3.204″N"
            },
            "longitude": {
                "decimal": 13.73832,
                "dms": "13°44′17.952″E"
            },
            "srid": 4326
        },
        "timezone": {
            "timezone": "Europe/Berlin",
            "country": "DE",
            "current-time": {
                "timezone": "2024-02-05T21:01:31+01:00",
                "utc": "2024-02-05T20:01:31+00:00"
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
                "srid": 4326
            }
        },
        "links": {
            "wikipedia": {
                "this": "https://en.wikipedia.org/wiki/Dresden",
                "locations": {
                    "city-municipality": "https://en.wikipedia.org/wiki/Dresden",
                    "state": "https://en.wikipedia.org/wiki/Saxony",
                    "country": "https://en.wikipedia.org/wiki/Germany"
                },
                "next-places": {
                    "H": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Priessnitz",
                            "number": 0
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Wei%C3%9Feritz",
                            "number": 2
                        },
                        {
                            "link": "https://en.wikipedia.org/wiki/Lockwitzbach",
                            "number": 3
                        }
                    ],
                    "L": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Gro%C3%9Fer_Garten",
                            "number": 0
                        }
                    ],
                    "P": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Dresden",
                            "number": 0
                        }
                    ],
                    "S": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Dresden_Castle",
                            "number": 5
                        }
                    ],
                    "T": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Windberg_%28Freital%29",
                            "number": 10
                        }
                    ],
                    "V": [
                        {
                            "link": "https://en.wikipedia.org/wiki/Kaditz_Lime_Tree",
                            "number": 1
                        }
                    ]
                }
            },
            "maps": {
                "google": "https://www.google.de/maps/place/51.050890+13.738320",
                "openstreetmap": "https://www.openstreetmap.org/?lat=51.050890&lon=13.738320&mlat=51.050890&mlon=13.738320&zoom=14&layers=M"
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
                "geoname-id": 12500891,
                "name": "Innere Altstadt",
                "updated-at": "2023-08-21T19:02:10+00:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 51.05117,
                        "dms": "51°3′4.212″N"
                    },
                    "longitude": {
                        "decimal": 13.73882,
                        "dms": "13°44′19.752″E"
                    },
                    "srid": 4326
                },
                "feature": {
                    "code": "PPLX",
                    "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                    "class": "P",
                    "class-name": "Städte, Dörfer, etc."
                },
                "links": {
                    "maps": {
                        "google": "https://www.google.de/maps/place/51.051170+13.738820",
                        "openstreetmap": "https://www.openstreetmap.org/?lat=51.051170&lon=13.738820&mlat=51.051170&mlon=13.738820&zoom=14&layers=M"
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
                    "srid": 4326
                },
                "feature": {
                    "code": "PPLA",
                    "code-name": "Sitz einer Verwaltungseinheit erster Ordnung",
                    "class": "P",
                    "class-name": "Städte, Dörfer, etc."
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
                        "value-formatted": "556.227"
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
                "name": "Sachsen",
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
                    "srid": 4326
                },
                "feature": {
                    "code": "ADM1",
                    "code-name": "Verwaltungsgliederung erster Ordnung / Bundesland",
                    "class": "A",
                    "class-name": "Länder, Bundesländer, Regionen, etc."
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
                        "value-formatted": "4.077.937"
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
                "name": "Deutschland",
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
                    "srid": 4326
                },
                "feature": {
                    "code": "PCLI",
                    "code-name": "Unabhängige politische Instanz",
                    "class": "A",
                    "class-name": "Länder, Bundesländer, Regionen, etc."
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
                        "value-formatted": "82.927.922"
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
                            "decimal": 51.05089,
                            "dms": "51°3′3.204″N"
                        },
                        "longitude": {
                            "decimal": 13.73832,
                            "dms": "13°44′17.952″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Dresden"
                    }
                },
                "feature": {
                    "class": "H",
                    "class-name": "Flüsse, Seen, etc."
                },
                "places-number": 5,
                "places": [
                    {
                        "geoname-id": 2852073,
                        "name": "Prießnitz",
                        "updated-at": "2023-08-21T18:57:09+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.06439,
                                "dms": "51°3′51.804″N"
                            },
                            "longitude": {
                                "decimal": 13.76168,
                                "dms": "13°45′42.048″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 2217.9,
                                    "unit": "m",
                                    "value-formatted": "2.217,9 m"
                                },
                                "kilometers": {
                                    "value": 2.218,
                                    "unit": "km",
                                    "value-formatted": "2,218 km"
                                }
                            },
                            "direction": {
                                "degree": 59.98,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Fluss",
                            "class": "H",
                            "class-name": "Flüsse, Seen, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Priessnitz"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.064390+13.761680",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.064390&lon=13.761680&mlat=51.064390&mlon=13.761680&zoom=14&layers=M"
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
                    {
                        "geoname-id": 2931254,
                        "name": "Alberthafen",
                        "updated-at": "2023-08-21T18:59:44+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.06481,
                                "dms": "51°3′53.316″N"
                            },
                            "longitude": {
                                "decimal": 13.70682,
                                "dms": "13°42′24.552″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 2691.2,
                                    "unit": "m",
                                    "value-formatted": "2.691,2 m"
                                },
                                "kilometers": {
                                    "value": 2.691,
                                    "unit": "km",
                                    "value-formatted": "2,691 km"
                                }
                            },
                            "direction": {
                                "degree": -66.16,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            }
                        },
                        "feature": {
                            "code": "HBR",
                            "code-name": "Hafen(s)",
                            "class": "H",
                            "class-name": "Flüsse, Seen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.064810+13.706820",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.064810&lon=13.706820&mlat=51.064810&mlon=13.706820&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 108,
                                "unit": "m",
                                "value-formatted": "108 m"
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
                        "geoname-id": 2811802,
                        "name": "Weißeritz",
                        "updated-at": "2023-08-21T18:55:51+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.06039,
                                "dms": "51°3′37.404″N"
                            },
                            "longitude": {
                                "decimal": 13.68484,
                                "dms": "13°41′5.424″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 3884.3,
                                    "unit": "m",
                                    "value-formatted": "3.884,3 m"
                                },
                                "kilometers": {
                                    "value": 3.884,
                                    "unit": "km",
                                    "value-formatted": "3,884 km"
                                }
                            },
                            "direction": {
                                "degree": -79.93,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Fluss",
                            "class": "H",
                            "class-name": "Flüsse, Seen, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Wei%C3%9Feritz"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.060390+13.684840",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.060390&lon=13.684840&mlat=51.060390&mlon=13.684840&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 119,
                                "unit": "m",
                                "value-formatted": "119 m"
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
                        "geoname-id": 2876520,
                        "name": "Lockwitzbach",
                        "updated-at": "2023-08-21T18:58:05+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.01623,
                                "dms": "51°0′58.428″N"
                            },
                            "longitude": {
                                "decimal": 13.84612,
                                "dms": "13°50′46.032″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8466.2,
                                    "unit": "m",
                                    "value-formatted": "8.466,2 m"
                                },
                                "kilometers": {
                                    "value": 8.466,
                                    "unit": "km",
                                    "value-formatted": "8,466 km"
                                }
                            },
                            "direction": {
                                "degree": 107.82,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Fluss",
                            "class": "H",
                            "class-name": "Flüsse, Seen, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Lockwitzbach"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.016230+13.846120",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.016230&lon=13.846120&mlat=51.016230&mlon=13.846120&zoom=14&layers=M"
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
                    },
                    {
                        "geoname-id": 2852926,
                        "name": "Poisenbach",
                        "updated-at": "2023-08-21T18:57:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.99729,
                                "dms": "50°59′50.244″N"
                            },
                            "longitude": {
                                "decimal": 13.65227,
                                "dms": "13°39′8.172″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8470.2,
                                    "unit": "m",
                                    "value-formatted": "8.470,2 m"
                                },
                                "kilometers": {
                                    "value": 8.47,
                                    "unit": "km",
                                    "value-formatted": "8,47 km"
                                }
                            },
                            "direction": {
                                "degree": -121.92,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            }
                        },
                        "feature": {
                            "code": "STM",
                            "code-name": "Fluss",
                            "class": "H",
                            "class-name": "Flüsse, Seen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.997290+13.652270",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.997290&lon=13.652270&mlat=50.997290&mlon=13.652270&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 176,
                                "unit": "m",
                                "value-formatted": "176 m"
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
                            "decimal": 51.05089,
                            "dms": "51°3′3.204″N"
                        },
                        "longitude": {
                            "decimal": 13.73832,
                            "dms": "13°44′17.952″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Dresden"
                    }
                },
                "feature": {
                    "class": "L",
                    "class-name": "Parks, Gebiete, etc."
                },
                "places-number": 4,
                "places": [
                    {
                        "geoname-id": 2916391,
                        "name": "Großer Garten",
                        "updated-at": "2023-08-21T18:59:21+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.03832,
                                "dms": "51°2′17.952″N"
                            },
                            "longitude": {
                                "decimal": 13.76261,
                                "dms": "13°45′45.396″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 2199.4,
                                    "unit": "m",
                                    "value-formatted": "2.199,4 m"
                                },
                                "kilometers": {
                                    "value": 2.199,
                                    "unit": "km",
                                    "value-formatted": "2,199 km"
                                }
                            },
                            "direction": {
                                "degree": 117.36,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            }
                        },
                        "feature": {
                            "code": "PRK",
                            "code-name": "Park",
                            "class": "L",
                            "class-name": "Parks, Gebiete, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Gro%C3%9Fer_Garten"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.038320+13.762610",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.038320&lon=13.762610&mlat=51.038320&mlon=13.762610&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 114,
                                "unit": "m",
                                "value-formatted": "114 m"
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
                        "geoname-id": 2823903,
                        "name": "Wachwitzgrund",
                        "updated-at": "2023-08-21T18:56:24+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.04153,
                                "dms": "51°2′29.508″N"
                            },
                            "longitude": {
                                "decimal": 13.83646,
                                "dms": "13°50′11.256″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 6939.2,
                                    "unit": "m",
                                    "value-formatted": "6.939,2 m"
                                },
                                "kilometers": {
                                    "value": 6.939,
                                    "unit": "km",
                                    "value-formatted": "6,939 km"
                                }
                            },
                            "direction": {
                                "degree": 95.45,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            }
                        },
                        "feature": {
                            "code": "RESN",
                            "code-name": "Naturschutzgebiet",
                            "class": "L",
                            "class-name": "Parks, Gebiete, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.041530+13.836460",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.041530&lon=13.836460&mlat=51.041530&mlon=13.836460&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 188,
                                "unit": "m",
                                "value-formatted": "188 m"
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
                        "geoname-id": 2815774,
                        "name": "Helfenberger Grund",
                        "updated-at": "2023-08-21T18:56:06+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.03137,
                                "dms": "51°1′52.932″N"
                            },
                            "longitude": {
                                "decimal": 13.85378,
                                "dms": "13°51′13.608″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8359.1,
                                    "unit": "m",
                                    "value-formatted": "8.359,1 m"
                                },
                                "kilometers": {
                                    "value": 8.359,
                                    "unit": "km",
                                    "value-formatted": "8,359 km"
                                }
                            },
                            "direction": {
                                "degree": 99.6,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            }
                        },
                        "feature": {
                            "code": "RESN",
                            "code-name": "Naturschutzgebiet",
                            "class": "L",
                            "class-name": "Parks, Gebiete, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.031370+13.853780",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.031370&lon=13.853780&mlat=51.031370&mlon=13.853780&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 200,
                                "unit": "m",
                                "value-formatted": "200 m"
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
                        "geoname-id": 2902602,
                        "name": "Hofewiese",
                        "updated-at": "2023-08-21T18:58:47+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.11667,
                                "dms": "51°7′0.012″N"
                            },
                            "longitude": {
                                "decimal": 13.83333,
                                "dms": "13°49′59.988″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 9876.4,
                                    "unit": "m",
                                    "value-formatted": "9.876,4 m"
                                },
                                "kilometers": {
                                    "value": 9.876,
                                    "unit": "km",
                                    "value-formatted": "9,876 km"
                                }
                            },
                            "direction": {
                                "degree": 55.3,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            }
                        },
                        "feature": {
                            "code": "GRAZ",
                            "code-name": "Weidefläche",
                            "class": "L",
                            "class-name": "Parks, Gebiete, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.116670+13.833330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.116670&lon=13.833330&mlat=51.116670&mlon=13.833330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 257,
                                "unit": "m",
                                "value-formatted": "257 m"
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
                            "decimal": 51.05089,
                            "dms": "51°3′3.204″N"
                        },
                        "longitude": {
                            "decimal": 13.73832,
                            "dms": "13°44′17.952″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Dresden"
                    }
                },
                "feature": {
                    "class": "P",
                    "class-name": "Städte, Dörfer, etc."
                },
                "places-number": 10,
                "places": [
                    {
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
                            }
                        },
                        "feature": {
                            "code": "PPLA",
                            "code-name": "Sitz einer Verwaltungseinheit erster Ordnung",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
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
                                "value-formatted": "556.227"
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
                    {
                        "geoname-id": 12500891,
                        "name": "Innere Altstadt",
                        "updated-at": "2023-08-21T19:02:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.05117,
                                "dms": "51°3′4.212″N"
                            },
                            "longitude": {
                                "decimal": 13.73882,
                                "dms": "13°44′19.752″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 46.8,
                                    "unit": "m",
                                    "value-formatted": "46,8 m"
                                },
                                "kilometers": {
                                    "value": 0.047,
                                    "unit": "km",
                                    "value-formatted": "0,047 km"
                                }
                            },
                            "direction": {
                                "degree": 60.75,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.051170+13.738820",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.051170&lon=13.738820&mlat=51.051170&mlon=13.738820&zoom=14&layers=M"
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
                    {
                        "geoname-id": 2956832,
                        "name": "Altstadt",
                        "updated-at": "2023-08-21T19:00:41+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.04967,
                                "dms": "51°2′58.812″N"
                            },
                            "longitude": {
                                "decimal": 13.73323,
                                "dms": "13°43′59.628″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 380.8,
                                    "unit": "m",
                                    "value-formatted": "380,8 m"
                                },
                                "kilometers": {
                                    "value": 0.381,
                                    "unit": "km",
                                    "value-formatted": "0,381 km"
                                }
                            },
                            "direction": {
                                "degree": -103.48,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.049670+13.733230",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.049670&lon=13.733230&mlat=51.049670&mlon=13.733230&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 113,
                                "unit": "m",
                                "value-formatted": "113 m"
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
                                    "value": 859.8,
                                    "unit": "m",
                                    "value-formatted": "859,8 m"
                                },
                                "kilometers": {
                                    "value": 0.86,
                                    "unit": "km",
                                    "value-formatted": "0,86 km"
                                }
                            },
                            "direction": {
                                "degree": 24.24,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
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
                    {
                        "geoname-id": 12500908,
                        "name": "Pirnaische Vorstadt",
                        "updated-at": "2023-08-21T19:02:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.05027,
                                "dms": "51°3′0.972″N"
                            },
                            "longitude": {
                                "decimal": 13.75088,
                                "dms": "13°45′3.168″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 880.7,
                                    "unit": "m",
                                    "value-formatted": "880,7 m"
                                },
                                "kilometers": {
                                    "value": 0.881,
                                    "unit": "km",
                                    "value-formatted": "0,881 km"
                                }
                            },
                            "direction": {
                                "degree": 92.83,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.050270+13.750880",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.050270&lon=13.750880&mlat=51.050270&mlon=13.750880&zoom=14&layers=M"
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
                    },
                    {
                        "geoname-id": 12500902,
                        "name": "Wilsdruffer Vorstadt/Seevorstadt-West",
                        "updated-at": "2023-08-21T19:02:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.04943,
                                "dms": "51°2′57.948″N"
                            },
                            "longitude": {
                                "decimal": 13.72471,
                                "dms": "13°43′28.956″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 965.1,
                                    "unit": "m",
                                    "value-formatted": "965,1 m"
                                },
                                "kilometers": {
                                    "value": 0.965,
                                    "unit": "km",
                                    "value-formatted": "0,965 km"
                                }
                            },
                            "direction": {
                                "degree": -96.12,
                                "cardinal-direction": "W",
                                "cardinal-direction-translated": "West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.049430+13.724710",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.049430&lon=13.724710&mlat=51.049430&mlon=13.724710&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 117,
                                "unit": "m",
                                "value-formatted": "117 m"
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
                        "geoname-id": 12500894,
                        "name": "Seevorstadt-Ost/Großer Garten",
                        "updated-at": "2023-08-21T19:02:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.03862,
                                "dms": "51°2′19.032″N"
                            },
                            "longitude": {
                                "decimal": 13.75466,
                                "dms": "13°45′16.776″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1779.4,
                                    "unit": "m",
                                    "value-formatted": "1.779,4 m"
                                },
                                "kilometers": {
                                    "value": 1.779,
                                    "unit": "km",
                                    "value-formatted": "1,779 km"
                                }
                            },
                            "direction": {
                                "degree": 126.9,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.038620+13.754660",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.038620&lon=13.754660&mlat=51.038620&mlon=13.754660&zoom=14&layers=M"
                            }
                        },
                        "properties": {
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
                    {
                        "geoname-id": 12500895,
                        "name": "Johannstadt-Süd",
                        "updated-at": "2023-08-21T19:02:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.04837,
                                "dms": "51°2′54.132″N"
                            },
                            "longitude": {
                                "decimal": 13.76513,
                                "dms": "13°45′54.468″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 1894.9,
                                    "unit": "m",
                                    "value-formatted": "1.894,9 m"
                                },
                                "kilometers": {
                                    "value": 1.895,
                                    "unit": "km",
                                    "value-formatted": "1,895 km"
                                }
                            },
                            "direction": {
                                "degree": 95.37,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.048370+13.765130",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.048370&lon=13.765130&mlat=51.048370&mlon=13.765130&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 117,
                                "unit": "m",
                                "value-formatted": "117 m"
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
                        "geoname-id": 12500906,
                        "name": "Südvorstadt-Ost",
                        "updated-at": "2023-08-21T19:02:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.0326,
                                "dms": "51°1′57.36″N"
                            },
                            "longitude": {
                                "decimal": 13.74069,
                                "dms": "13°44′26.484″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 2040.5,
                                    "unit": "m",
                                    "value-formatted": "2.040,5 m"
                                },
                                "kilometers": {
                                    "value": 2.04,
                                    "unit": "km",
                                    "value-formatted": "2,04 km"
                                }
                            },
                            "direction": {
                                "degree": 172.62,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.032600+13.740690",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.032600&lon=13.740690&mlat=51.032600&mlon=13.740690&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 121,
                                "unit": "m",
                                "value-formatted": "121 m"
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
                        "geoname-id": 12500876,
                        "name": "Südvorstadt-West",
                        "updated-at": "2023-08-21T19:02:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.0357,
                                "dms": "51°2′8.52″N"
                            },
                            "longitude": {
                                "decimal": 13.72187,
                                "dms": "13°43′18.732″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 2043.4,
                                    "unit": "m",
                                    "value-formatted": "2.043,4 m"
                                },
                                "kilometers": {
                                    "value": 2.043,
                                    "unit": "km",
                                    "value-formatted": "2,043 km"
                                }
                            },
                            "direction": {
                                "degree": -132.72,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            }
                        },
                        "feature": {
                            "code": "PPLX",
                            "code-name": "Ausschnitt eines Wohngebiets (Stadtteil)",
                            "class": "P",
                            "class-name": "Städte, Dörfer, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.035700+13.721870",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.035700&lon=13.721870&mlat=51.035700&mlon=13.721870&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 130,
                                "unit": "m",
                                "value-formatted": "130 m"
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
                            "decimal": 51.05089,
                            "dms": "51°3′3.204″N"
                        },
                        "longitude": {
                            "decimal": 13.73832,
                            "dms": "13°44′17.952″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Dresden"
                    }
                },
                "feature": {
                    "class": "R",
                    "class-name": "Straßen, Schienenwege, etc."
                },
                "places-number": 1,
                "places": [
                    {
                        "geoname-id": 12500928,
                        "name": "Bürgerwiese",
                        "updated-at": "2023-08-21T19:02:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.04388,
                                "dms": "51°2′37.968″N"
                            },
                            "longitude": {
                                "decimal": 13.74125,
                                "dms": "13°44′28.5″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 805.9,
                                    "unit": "m",
                                    "value-formatted": "805,9 m"
                                },
                                "kilometers": {
                                    "value": 0.806,
                                    "unit": "km",
                                    "value-formatted": "0,806 km"
                                }
                            },
                            "direction": {
                                "degree": 157.32,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            }
                        },
                        "feature": {
                            "code": "RD",
                            "code-name": "Straße",
                            "class": "R",
                            "class-name": "Straßen, Schienenwege, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.043880+13.741250",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.043880&lon=13.741250&mlat=51.043880&mlon=13.741250&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 111,
                                "unit": "m",
                                "value-formatted": "111 m"
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
                            "decimal": 51.05089,
                            "dms": "51°3′3.204″N"
                        },
                        "longitude": {
                            "decimal": 13.73832,
                            "dms": "13°44′17.952″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Dresden"
                    }
                },
                "feature": {
                    "class": "S",
                    "class-name": "Orte, Gebäude, Betriebe, etc."
                },
                "places-number": 10,
                "places": [
                    {
                        "geoname-id": 10278776,
                        "name": "Star Inn Hotel Premium Dresden Im Haus Altmarkt",
                        "updated-at": "2023-08-21T19:01:45+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.05,
                                "dms": "51°2′60″N"
                            },
                            "longitude": {
                                "decimal": 13.739,
                                "dms": "13°44′20.4″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 109.8,
                                    "unit": "m",
                                    "value-formatted": "109,8 m"
                                },
                                "kilometers": {
                                    "value": 0.11,
                                    "unit": "km",
                                    "value-formatted": "0,11 km"
                                }
                            },
                            "direction": {
                                "degree": 142.62,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.050000+13.739000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.050000&lon=13.739000&mlat=51.050000&mlon=13.739000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 117,
                                "unit": "m",
                                "value-formatted": "117 m"
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
                        "geoname-id": 6496476,
                        "name": "Steigenberger Hotel De Saxe",
                        "updated-at": "2023-08-21T19:01:00+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.0511,
                                "dms": "51°3′3.96″N"
                            },
                            "longitude": {
                                "decimal": 13.7405,
                                "dms": "13°44′25.8″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 154.2,
                                    "unit": "m",
                                    "value-formatted": "154,2 m"
                                },
                                "kilometers": {
                                    "value": 0.154,
                                    "unit": "km",
                                    "value-formatted": "0,154 km"
                                }
                            },
                            "direction": {
                                "degree": 84.5,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.051100+13.740500",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.051100&lon=13.740500&mlat=51.051100&mlon=13.740500&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 114,
                                "unit": "m",
                                "value-formatted": "114 m"
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
                        "geoname-id": 10123614,
                        "name": "Swissotel Dresden Am Schloss",
                        "updated-at": "2023-08-21T19:01:44+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.0523,
                                "dms": "51°3′8.28″N"
                            },
                            "longitude": {
                                "decimal": 13.73768,
                                "dms": "13°44′15.648″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 163,
                                    "unit": "m",
                                    "value-formatted": "163 m"
                                },
                                "kilometers": {
                                    "value": 0.163,
                                    "unit": "km",
                                    "value-formatted": "0,163 km"
                                }
                            },
                            "direction": {
                                "degree": -24.41,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.052300+13.737680",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.052300&lon=13.737680&mlat=51.052300&mlon=13.737680&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 121,
                                "unit": "m",
                                "value-formatted": "121 m"
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
                        "geoname-id": 9253402,
                        "name": "Qf An Der Frauenkirche",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.05162,
                                "dms": "51°3′5.832″N"
                            },
                            "longitude": {
                                "decimal": 13.74066,
                                "dms": "13°44′26.376″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 182.6,
                                    "unit": "m",
                                    "value-formatted": "182,6 m"
                                },
                                "kilometers": {
                                    "value": 0.183,
                                    "unit": "km",
                                    "value-formatted": "0,183 km"
                                }
                            },
                            "direction": {
                                "degree": 72.67,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.051620+13.740660",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.051620&lon=13.740660&mlat=51.051620&mlon=13.740660&zoom=14&layers=M"
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
                    {
                        "geoname-id": 6946641,
                        "name": "Hotel Neumarkt Aparthotel",
                        "updated-at": "2023-08-21T19:01:25+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.05141,
                                "dms": "51°3′5.076″N"
                            },
                            "longitude": {
                                "decimal": 13.74084,
                                "dms": "13°44′27.024″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 185.4,
                                    "unit": "m",
                                    "value-formatted": "185,4 m"
                                },
                                "kilometers": {
                                    "value": 0.185,
                                    "unit": "km",
                                    "value-formatted": "0,185 km"
                                }
                            },
                            "direction": {
                                "degree": 78.34,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.051410+13.740840",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.051410&lon=13.740840&mlat=51.051410&mlon=13.740840&zoom=14&layers=M"
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
                    {
                        "geoname-id": 7645965,
                        "name": "Residenzschloß Dresden",
                        "updated-at": "2023-08-21T19:01:27+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.05256,
                                "dms": "51°3′9.216″N"
                            },
                            "longitude": {
                                "decimal": 13.73716,
                                "dms": "13°44′13.776″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 202.6,
                                    "unit": "m",
                                    "value-formatted": "202,6 m"
                                },
                                "kilometers": {
                                    "value": 0.203,
                                    "unit": "km",
                                    "value-formatted": "0,203 km"
                                }
                            },
                            "direction": {
                                "degree": -34.78,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            }
                        },
                        "feature": {
                            "code": "PAL",
                            "code-name": "Palast / Schloß",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Dresden_Castle"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.052560+13.737160",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.052560&lon=13.737160&mlat=51.052560&mlon=13.737160&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 121,
                                "unit": "m",
                                "value-formatted": "121 m"
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
                        "geoname-id": 6472447,
                        "name": "Kempinski Taschenbergpalais Dresden",
                        "updated-at": "2023-08-21T19:00:47+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.052,
                                "dms": "51°3′7.2″N"
                            },
                            "longitude": {
                                "decimal": 13.736,
                                "dms": "13°44′9.6″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 203.8,
                                    "unit": "m",
                                    "value-formatted": "203,8 m"
                                },
                                "kilometers": {
                                    "value": 0.204,
                                    "unit": "km",
                                    "value-formatted": "0,204 km"
                                }
                            },
                            "direction": {
                                "degree": -64.43,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.052000+13.736000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.052000&lon=13.736000&mlat=51.052000&mlon=13.736000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
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
                    {
                        "geoname-id": 6527774,
                        "name": "Taschenbergpalais Dresden",
                        "updated-at": "2023-08-21T19:01:01+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.05213,
                                "dms": "51°3′7.668″N"
                            },
                            "longitude": {
                                "decimal": 13.73604,
                                "dms": "13°44′9.744″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 210.7,
                                    "unit": "m",
                                    "value-formatted": "210,7 m"
                                },
                                "kilometers": {
                                    "value": 0.211,
                                    "unit": "km",
                                    "value-formatted": "0,211 km"
                                }
                            },
                            "direction": {
                                "degree": -61.46,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.052130+13.736040",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.052130&lon=13.736040&mlat=51.052130&mlon=13.736040&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 120,
                                "unit": "m",
                                "value-formatted": "120 m"
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
                        "geoname-id": 9253254,
                        "name": "Nh Altmarkt",
                        "updated-at": "2023-08-21T19:01:43+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.049,
                                "dms": "51°2′56.4″N"
                            },
                            "longitude": {
                                "decimal": 13.738,
                                "dms": "13°44′16.8″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 211.3,
                                    "unit": "m",
                                    "value-formatted": "211,3 m"
                                },
                                "kilometers": {
                                    "value": 0.211,
                                    "unit": "km",
                                    "value-formatted": "0,211 km"
                                }
                            },
                            "direction": {
                                "degree": -170.39,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.049000+13.738000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.049000&lon=13.738000&mlat=51.049000&mlon=13.738000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 120,
                                "unit": "m",
                                "value-formatted": "120 m"
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
                        "geoname-id": 9964944,
                        "name": "Nh Dresden Altmark",
                        "updated-at": "2023-08-21T19:01:44+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.04896,
                                "dms": "51°2′56.256″N"
                            },
                            "longitude": {
                                "decimal": 13.73818,
                                "dms": "13°44′17.448″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 214.8,
                                    "unit": "m",
                                    "value-formatted": "214,8 m"
                                },
                                "kilometers": {
                                    "value": 0.215,
                                    "unit": "km",
                                    "value-formatted": "0,215 km"
                                }
                            },
                            "direction": {
                                "degree": -175.85,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            }
                        },
                        "feature": {
                            "code": "HTL",
                            "code-name": "Hotel",
                            "class": "S",
                            "class-name": "Orte, Gebäude, Betriebe, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.048960+13.738180",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.048960&lon=13.738180&mlat=51.048960&mlon=13.738180&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 120,
                                "unit": "m",
                                "value-formatted": "120 m"
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
                            "decimal": 51.05089,
                            "dms": "51°3′3.204″N"
                        },
                        "longitude": {
                            "decimal": 13.73832,
                            "dms": "13°44′17.952″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Dresden"
                    }
                },
                "feature": {
                    "class": "T",
                    "class-name": "Berge, Hügel, Felsen, etc."
                },
                "places-number": 15,
                "places": [
                    {
                        "geoname-id": 2851881,
                        "name": "Proschhübel",
                        "updated-at": "2023-08-21T18:57:08+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.08333,
                                "dms": "51°4′59.988″N"
                            },
                            "longitude": {
                                "decimal": 13.75,
                                "dms": "13°45′0″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 3698.3,
                                    "unit": "m",
                                    "value-formatted": "3.698,3 m"
                                },
                                "kilometers": {
                                    "value": 3.698,
                                    "unit": "km",
                                    "value-formatted": "3,698 km"
                                }
                            },
                            "direction": {
                                "degree": 19.8,
                                "cardinal-direction": "N",
                                "cardinal-direction-translated": "North"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.083330+13.750000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.083330&lon=13.750000&mlat=51.083330&mlon=13.750000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 140,
                                "unit": "m",
                                "value-formatted": "140 m"
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
                        "geoname-id": 2806585,
                        "name": "Wolfshügel",
                        "updated-at": "2023-08-21T18:55:45+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.07057,
                                "dms": "51°4′14.052″N"
                            },
                            "longitude": {
                                "decimal": 13.80672,
                                "dms": "13°48′24.192″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 5257.3,
                                    "unit": "m",
                                    "value-formatted": "5.257,3 m"
                                },
                                "kilometers": {
                                    "value": 5.257,
                                    "unit": "km",
                                    "value-formatted": "5,257 km"
                                }
                            },
                            "direction": {
                                "degree": 73.95,
                                "cardinal-direction": "E",
                                "cardinal-direction-translated": "East"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.070570+13.806720",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.070570&lon=13.806720&mlat=51.070570&mlon=13.806720&zoom=14&layers=M"
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
                        "geoname-id": 2939918,
                        "name": "Collmberg",
                        "updated-at": "2023-08-21T19:00:03+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.01667,
                                "dms": "51°1′0.012″N"
                            },
                            "longitude": {
                                "decimal": 13.68333,
                                "dms": "13°40′59.988″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 5409.7,
                                    "unit": "m",
                                    "value-formatted": "5.409,7 m"
                                },
                                "kilometers": {
                                    "value": 5.41,
                                    "unit": "km",
                                    "value-formatted": "5,41 km"
                                }
                            },
                            "direction": {
                                "degree": -121.89,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.016670+13.683330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.016670&lon=13.683330&mlat=51.016670&mlon=13.683330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 209,
                                "unit": "m",
                                "value-formatted": "209 m"
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
                        "geoname-id": 2911155,
                        "name": "Hammerberg",
                        "updated-at": "2023-08-21T18:59:06+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.1,
                                "dms": "51°6′0″N"
                            },
                            "longitude": {
                                "decimal": 13.75,
                                "dms": "13°45′0″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 5521.4,
                                    "unit": "m",
                                    "value-formatted": "5.521,4 m"
                                },
                                "kilometers": {
                                    "value": 5.521,
                                    "unit": "km",
                                    "value-formatted": "5,521 km"
                                }
                            },
                            "direction": {
                                "degree": 13.38,
                                "cardinal-direction": "N",
                                "cardinal-direction-translated": "North"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.100000+13.750000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.100000&lon=13.750000&mlat=51.100000&mlon=13.750000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 170,
                                "unit": "m",
                                "value-formatted": "170 m"
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
                        "geoname-id": 2895385,
                        "name": "Jägerhübel",
                        "updated-at": "2023-08-21T18:58:41+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.1,
                                "dms": "51°6′0″N"
                            },
                            "longitude": {
                                "decimal": 13.76667,
                                "dms": "13°46′0.012″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 5808.9,
                                    "unit": "m",
                                    "value-formatted": "5.808,9 m"
                                },
                                "kilometers": {
                                    "value": 5.809,
                                    "unit": "km",
                                    "value-formatted": "5,809 km"
                                }
                            },
                            "direction": {
                                "degree": 30,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.100000+13.766670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.100000&lon=13.766670&mlat=51.100000&mlon=13.766670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 176,
                                "unit": "m",
                                "value-formatted": "176 m"
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
                        "geoname-id": 2922771,
                        "name": "Gamighübel",
                        "updated-at": "2023-08-21T18:59:26+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.00099,
                                "dms": "51°0′3.564″N"
                            },
                            "longitude": {
                                "decimal": 13.76878,
                                "dms": "13°46′7.608″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 5943.5,
                                    "unit": "m",
                                    "value-formatted": "5.943,5 m"
                                },
                                "kilometers": {
                                    "value": 5.944,
                                    "unit": "km",
                                    "value-formatted": "5,944 km"
                                }
                            },
                            "direction": {
                                "degree": 148.6,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.000990+13.768780",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.000990&lon=13.768780&mlat=51.000990&mlon=13.768780&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 178,
                                "unit": "m",
                                "value-formatted": "178 m"
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
                        "geoname-id": 2820807,
                        "name": "Tümmelsberg",
                        "updated-at": "2023-08-21T18:56:11+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.1,
                                "dms": "51°6′0″N"
                            },
                            "longitude": {
                                "decimal": 13.78333,
                                "dms": "13°46′59.988″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 6301.5,
                                    "unit": "m",
                                    "value-formatted": "6.301,5 m"
                                },
                                "kilometers": {
                                    "value": 6.301,
                                    "unit": "km",
                                    "value-formatted": "6,301 km"
                                }
                            },
                            "direction": {
                                "degree": 42.51,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.100000+13.783330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.100000&lon=13.783330&mlat=51.100000&mlon=13.783330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 191,
                                "unit": "m",
                                "value-formatted": "191 m"
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
                        "geoname-id": 2891189,
                        "name": "Kieferberg",
                        "updated-at": "2023-08-21T18:58:28+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51,
                                "dms": "51°0′0″N"
                            },
                            "longitude": {
                                "decimal": 13.66667,
                                "dms": "13°40′0.012″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 7558.6,
                                    "unit": "m",
                                    "value-formatted": "7.558,6 m"
                                },
                                "kilometers": {
                                    "value": 7.559,
                                    "unit": "km",
                                    "value-formatted": "7,559 km"
                                }
                            },
                            "direction": {
                                "degree": -125.38,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.000000+13.666670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.000000&lon=13.666670&mlat=51.000000&mlon=13.666670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 236,
                                "unit": "m",
                                "value-formatted": "236 m"
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
                        "geoname-id": 7304169,
                        "name": "Goldene Höhe",
                        "updated-at": "2023-08-21T19:01:27+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.98326,
                                "dms": "50°58′59.736″N"
                            },
                            "longitude": {
                                "decimal": 13.71941,
                                "dms": "13°43′9.876″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 7635.6,
                                    "unit": "m",
                                    "value-formatted": "7.635,6 m"
                                },
                                "kilometers": {
                                    "value": 7.636,
                                    "unit": "km",
                                    "value-formatted": "7,636 km"
                                }
                            },
                            "direction": {
                                "degree": -164.38,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.983260+13.719410",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.983260&lon=13.719410&mlat=50.983260&mlon=13.719410&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 346,
                                "unit": "m",
                                "value-formatted": "346 m"
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
                        "geoname-id": 2820875,
                        "name": "Trutzsch",
                        "updated-at": "2023-08-21T18:56:11+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.98745,
                                "dms": "50°59′14.82″N"
                            },
                            "longitude": {
                                "decimal": 13.79179,
                                "dms": "13°47′30.444″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 7984.4,
                                    "unit": "m",
                                    "value-formatted": "7.984,4 m"
                                },
                                "kilometers": {
                                    "value": 7.984,
                                    "unit": "km",
                                    "value-formatted": "7,984 km"
                                }
                            },
                            "direction": {
                                "degree": 139.87,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.987450+13.791790",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.987450&lon=13.791790&mlat=50.987450&mlon=13.791790&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 196,
                                "unit": "m",
                                "value-formatted": "196 m"
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
                        "geoname-id": 2808285,
                        "name": "Windberg",
                        "updated-at": "2023-08-21T18:55:47+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.99688,
                                "dms": "50°59′48.768″N"
                            },
                            "longitude": {
                                "decimal": 13.66197,
                                "dms": "13°39′43.092″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8036.4,
                                    "unit": "m",
                                    "value-formatted": "8.036,4 m"
                                },
                                "kilometers": {
                                    "value": 8.036,
                                    "unit": "km",
                                    "value-formatted": "8,036 km"
                                }
                            },
                            "direction": {
                                "degree": -125.28,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Windberg_%28Freital%29"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.996880+13.661970",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.996880&lon=13.661970&mlat=50.996880&mlon=13.661970&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 351,
                                "unit": "m",
                                "value-formatted": "351 m"
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
                        "geoname-id": 2803747,
                        "name": "Babisnauer Pappel",
                        "updated-at": "2023-08-21T18:55:41+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.97417,
                                "dms": "50°58′27.012″N"
                            },
                            "longitude": {
                                "decimal": 13.7496,
                                "dms": "13°44′58.56″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8567.3,
                                    "unit": "m",
                                    "value-formatted": "8.567,3 m"
                                },
                                "kilometers": {
                                    "value": 8.567,
                                    "unit": "km",
                                    "value-formatted": "8,567 km"
                                }
                            },
                            "direction": {
                                "degree": 171.64,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.974170+13.749600",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.974170&lon=13.749600&mlat=50.974170&mlon=13.749600&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 328,
                                "unit": "m",
                                "value-formatted": "328 m"
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
                        "geoname-id": 7645967,
                        "name": "Spitzhaus",
                        "updated-at": "2023-08-21T19:01:27+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.11384,
                                "dms": "51°6′49.824″N"
                            },
                            "longitude": {
                                "decimal": 13.6669,
                                "dms": "13°40′0.84″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8595.6,
                                    "unit": "m",
                                    "value-formatted": "8.595,6 m"
                                },
                                "kilometers": {
                                    "value": 8.596,
                                    "unit": "km",
                                    "value-formatted": "8,596 km"
                                }
                            },
                            "direction": {
                                "degree": -48.61,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.113840+13.666900",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.113840&lon=13.666900&mlat=51.113840&mlon=13.666900&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 237,
                                "unit": "m",
                                "value-formatted": "237 m"
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
                        "geoname-id": 7304170,
                        "name": "Wahnsdorfer Kuppe",
                        "updated-at": "2023-08-21T19:01:27+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.11935,
                                "dms": "51°7′9.66″N"
                            },
                            "longitude": {
                                "decimal": 13.6754,
                                "dms": "13°40′31.44″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8790,
                                    "unit": "m",
                                    "value-formatted": "8.790 m"
                                },
                                "kilometers": {
                                    "value": 8.79,
                                    "unit": "km",
                                    "value-formatted": "8,79 km"
                                }
                            },
                            "direction": {
                                "degree": -42.59,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.119350+13.675400",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.119350&lon=13.675400&mlat=51.119350&mlon=13.675400&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 246,
                                "unit": "m",
                                "value-formatted": "246 m"
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
                        "geoname-id": 2830335,
                        "name": "Spitzberg",
                        "updated-at": "2023-08-21T18:56:30+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.96667,
                                "dms": "50°58′0.012″N"
                            },
                            "longitude": {
                                "decimal": 13.73333,
                                "dms": "13°43′59.988″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 9371.3,
                                    "unit": "m",
                                    "value-formatted": "9.371,3 m"
                                },
                                "kilometers": {
                                    "value": 9.371,
                                    "unit": "km",
                                    "value-formatted": "9,371 km"
                                }
                            },
                            "direction": {
                                "degree": -176.61,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            }
                        },
                        "feature": {
                            "code": "HLL",
                            "code-name": "Hügel",
                            "class": "T",
                            "class-name": "Berge, Hügel, Felsen, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.966670+13.733330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.966670&lon=13.733330&mlat=50.966670&mlon=13.733330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 259,
                                "unit": "m",
                                "value-formatted": "259 m"
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
                            "decimal": 51.05089,
                            "dms": "51°3′3.204″N"
                        },
                        "longitude": {
                            "decimal": 13.73832,
                            "dms": "13°44′17.952″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Dresden"
                    }
                },
                "feature": {
                    "class": "U",
                    "class-name": "Unterwasserwelt, etc."
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
                            "decimal": 51.05089,
                            "dms": "51°3′3.204″N"
                        },
                        "longitude": {
                            "decimal": 13.73832,
                            "dms": "13°44′17.952″E"
                        },
                        "srid": 4326
                    },
                    "coordinate-type": "location",
                    "location": {
                        "name": "Dresden"
                    }
                },
                "feature": {
                    "class": "V",
                    "class-name": "Wälder, Heidelandschaften, etc."
                },
                "places-number": 10,
                "places": [
                    {
                        "geoname-id": 12076798,
                        "name": "Radeberger Land",
                        "updated-at": "2023-08-21T19:02:09+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.08074,
                                "dms": "51°4′50.664″N"
                            },
                            "longitude": {
                                "decimal": 13.79088,
                                "dms": "13°47′27.168″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 4950.4,
                                    "unit": "m",
                                    "value-formatted": "4.950,4 m"
                                },
                                "kilometers": {
                                    "value": 4.95,
                                    "unit": "km",
                                    "value-formatted": "4,95 km"
                                }
                            },
                            "direction": {
                                "degree": 60.41,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            }
                        },
                        "feature": {
                            "code": "FRST",
                            "code-name": "Wald / Wälder",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.080740+13.790880",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.080740&lon=13.790880&mlat=51.080740&mlon=13.790880&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 195,
                                "unit": "m",
                                "value-formatted": "195 m"
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
                        "geoname-id": 8224654,
                        "name": "Kaditzer Linde",
                        "updated-at": "2023-08-21T19:01:29+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.08333,
                                "dms": "51°4′59.988″N"
                            },
                            "longitude": {
                                "decimal": 13.67144,
                                "dms": "13°40′17.184″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 5903.5,
                                    "unit": "m",
                                    "value-formatted": "5.903,5 m"
                                },
                                "kilometers": {
                                    "value": 5.904,
                                    "unit": "km",
                                    "value-formatted": "5,904 km"
                                }
                            },
                            "direction": {
                                "degree": -64.12,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            }
                        },
                        "feature": {
                            "code": "TREE",
                            "code-name": "Baum / Bäume",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "wikipedia": {
                                "this": "https://en.wikipedia.org/wiki/Kaditz_Lime_Tree"
                            },
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.083330+13.671440",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.083330&lon=13.671440&mlat=51.083330&mlon=13.671440&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 112,
                                "unit": "m",
                                "value-formatted": "112 m"
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
                        "geoname-id": 2815015,
                        "name": "Waldfriedhof",
                        "updated-at": "2023-08-21T18:56:05+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.1,
                                "dms": "51°6′0″N"
                            },
                            "longitude": {
                                "decimal": 13.7,
                                "dms": "13°41′60″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 6081.7,
                                    "unit": "m",
                                    "value-formatted": "6.081,7 m"
                                },
                                "kilometers": {
                                    "value": 6.082,
                                    "unit": "km",
                                    "value-formatted": "6,082 km"
                                }
                            },
                            "direction": {
                                "degree": -37.96,
                                "cardinal-direction": "NW",
                                "cardinal-direction-translated": "North-West"
                            }
                        },
                        "feature": {
                            "code": "FRST",
                            "code-name": "Wald / Wälder",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.100000+13.700000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.100000&lon=13.700000&mlat=51.100000&mlon=13.700000&zoom=14&layers=M"
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
                        "geoname-id": 7645961,
                        "name": "König-Albert-Eiche",
                        "updated-at": "2023-08-21T19:01:27+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.99244,
                                "dms": "50°59′32.784″N"
                            },
                            "longitude": {
                                "decimal": 13.778,
                                "dms": "13°46′40.8″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 7067.1,
                                    "unit": "m",
                                    "value-formatted": "7.067,1 m"
                                },
                                "kilometers": {
                                    "value": 7.067,
                                    "unit": "km",
                                    "value-formatted": "7,067 km"
                                }
                            },
                            "direction": {
                                "degree": 145.83,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            }
                        },
                        "feature": {
                            "code": "TREE",
                            "code-name": "Baum / Bäume",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.992440+13.778000",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.992440&lon=13.778000&mlat=50.992440&mlon=13.778000&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 175,
                                "unit": "m",
                                "value-formatted": "175 m"
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
                        "geoname-id": 2941223,
                        "name": "Forst Burgk",
                        "updated-at": "2023-08-21T19:00:04+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51,
                                "dms": "51°0′0″N"
                            },
                            "longitude": {
                                "decimal": 13.66667,
                                "dms": "13°40′0.012″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 7558.6,
                                    "unit": "m",
                                    "value-formatted": "7.558,6 m"
                                },
                                "kilometers": {
                                    "value": 7.559,
                                    "unit": "km",
                                    "value-formatted": "7,559 km"
                                }
                            },
                            "direction": {
                                "degree": -125.38,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            }
                        },
                        "feature": {
                            "code": "FRST",
                            "code-name": "Wald / Wälder",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.000000+13.666670",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.000000&lon=13.666670&mlat=51.000000&mlon=13.666670&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 236,
                                "unit": "m",
                                "value-formatted": "236 m"
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
                        "geoname-id": 2935019,
                        "name": "Dresdener Heide",
                        "updated-at": "2023-08-21T18:59:58+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 51.09364,
                                "dms": "51°5′37.104″N"
                            },
                            "longitude": {
                                "decimal": 13.83724,
                                "dms": "13°50′14.064″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8388.3,
                                    "unit": "m",
                                    "value-formatted": "8.388,3 m"
                                },
                                "kilometers": {
                                    "value": 8.388,
                                    "unit": "km",
                                    "value-formatted": "8,388 km"
                                }
                            },
                            "direction": {
                                "degree": 66.63,
                                "cardinal-direction": "NE",
                                "cardinal-direction-translated": "North-East"
                            }
                        },
                        "feature": {
                            "code": "HTH",
                            "code-name": "Heide",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/51.093640+13.837240",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=51.093640&lon=13.837240&mlat=51.093640&mlon=13.837240&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 235,
                                "unit": "m",
                                "value-formatted": "235 m"
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
                        "geoname-id": 2953756,
                        "name": "Babisnauer Pappel",
                        "updated-at": "2023-08-21T19:00:26+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.97416,
                                "dms": "50°58′26.976″N"
                            },
                            "longitude": {
                                "decimal": 13.7498,
                                "dms": "13°44′59.28″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8569.7,
                                    "unit": "m",
                                    "value-formatted": "8.569,7 m"
                                },
                                "kilometers": {
                                    "value": 8.57,
                                    "unit": "km",
                                    "value-formatted": "8,57 km"
                                }
                            },
                            "direction": {
                                "degree": 171.49,
                                "cardinal-direction": "S",
                                "cardinal-direction-translated": "South"
                            }
                        },
                        "feature": {
                            "code": "TREE",
                            "code-name": "Baum / Bäume",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.974160+13.749800",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.974160&lon=13.749800&mlat=50.974160&mlon=13.749800&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 328,
                                "unit": "m",
                                "value-formatted": "328 m"
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
                        "geoname-id": 2852925,
                        "name": "Poisenwald",
                        "updated-at": "2023-08-21T18:57:10+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.97927,
                                "dms": "50°58′45.372″N"
                            },
                            "longitude": {
                                "decimal": 13.68911,
                                "dms": "13°41′20.796″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 8676,
                                    "unit": "m",
                                    "value-formatted": "8.676 m"
                                },
                                "kilometers": {
                                    "value": 8.676,
                                    "unit": "km",
                                    "value-formatted": "8,676 km"
                                }
                            },
                            "direction": {
                                "degree": -145.51,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            }
                        },
                        "feature": {
                            "code": "FRST",
                            "code-name": "Wald / Wälder",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.979270+13.689110",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.979270&lon=13.689110&mlat=50.979270&mlon=13.689110&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 313,
                                "unit": "m",
                                "value-formatted": "313 m"
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
                        "geoname-id": 7645960,
                        "name": "Burgstädtler Linde",
                        "updated-at": "2023-08-21T19:01:27+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.97119,
                                "dms": "50°58′16.284″N"
                            },
                            "longitude": {
                                "decimal": 13.78325,
                                "dms": "13°46′59.7″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 9403.2,
                                    "unit": "m",
                                    "value-formatted": "9.403,2 m"
                                },
                                "kilometers": {
                                    "value": 9.403,
                                    "unit": "km",
                                    "value-formatted": "9,403 km"
                                }
                            },
                            "direction": {
                                "degree": 150.59,
                                "cardinal-direction": "SE",
                                "cardinal-direction-translated": "South-East"
                            }
                        },
                        "feature": {
                            "code": "TREE",
                            "code-name": "Baum / Bäume",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.971190+13.783250",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.971190&lon=13.783250&mlat=50.971190&mlon=13.783250&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 245,
                                "unit": "m",
                                "value-formatted": "245 m"
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
                        "geoname-id": 2942194,
                        "name": "Buchwald",
                        "updated-at": "2023-08-21T19:00:05+00:00",
                        "coordinate": {
                            "latitude": {
                                "decimal": 50.96667,
                                "dms": "50°58′0.012″N"
                            },
                            "longitude": {
                                "decimal": 13.63333,
                                "dms": "13°37′59.988″E"
                            },
                            "srid": 4326,
                            "distance": {
                                "meters": {
                                    "value": 11902,
                                    "unit": "m",
                                    "value-formatted": "11.902 m"
                                },
                                "kilometers": {
                                    "value": 11.902,
                                    "unit": "km",
                                    "value-formatted": "11,902 km"
                                }
                            },
                            "direction": {
                                "degree": -128.74,
                                "cardinal-direction": "SW",
                                "cardinal-direction-translated": "South-West"
                            }
                        },
                        "feature": {
                            "code": "FRST",
                            "code-name": "Wald / Wälder",
                            "class": "V",
                            "class-name": "Wälder, Heidelandschaften, etc."
                        },
                        "links": {
                            "maps": {
                                "google": "https://www.google.de/maps/place/50.966670+13.633330",
                                "openstreetmap": "https://www.openstreetmap.org/?lat=50.966670&lon=13.633330&mlat=50.966670&mlon=13.633330&zoom=14&layers=M"
                            }
                        },
                        "properties": {
                            "elevation": {
                                "value": 331,
                                "unit": "m",
                                "value-formatted": "331 m"
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
            "raw": "2935022",
            "parsed": {
                "type": "search-geoname-id",
                "geoname-id": 2935022
            }
        },
        "next-places": true,
        "language": {
            "raw": "de",
            "parsed": {
                "name": "German"
            }
        },
        "country": {
            "raw": "DE",
            "parsed": {
                "name": "DE"
            }
        }
    },
    "valid": true,
    "date": "2024-02-05T20:01:31+00:00",
    "version": "0.1.41"
};

export default GeoNameSearch;