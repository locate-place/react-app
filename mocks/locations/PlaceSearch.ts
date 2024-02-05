import {TypeApiData} from "../../src/types/Types";

const PlaceSearch: TypeApiData = {
    "data-licence": {
        "full": "Creative Commons Attribution 4.0 License",
        "short": "CC-BY 4.0",
        "url": "https://download.geonames.org/export/dump/readme.txt"
    },
    "time-taken": "111ms",
    "memory-taken": "2.37 MB",
    "performance": {
        "LocationService": {
            "findLocationsByName": [
                {
                    "time": {
                        "value": 50.19,
                        "value-formatted": "50.19 ms"
                    },
                    "memory": {
                        "value": 1.85,
                        "value-formatted": "1.85 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationsBySearch",
                        "line": 278
                    }
                }
            ],
            "array_filter": [
                {
                    "time": {
                        "value": 27.26,
                        "value-formatted": "27.26 ms"
                    },
                    "memory": {
                        "value": 1.98,
                        "value-formatted": "1.98 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationsBySearch",
                        "line": 293
                    }
                }
            ],
            "usort": [
                {
                    "time": {
                        "value": 3.22,
                        "value-formatted": "3.22 ms"
                    },
                    "memory": {
                        "value": 2.01,
                        "value-formatted": "2.01 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationsBySearch",
                        "line": 315
                    }
                }
            ],
            "array_slice": [
                {
                    "time": {
                        "value": 0.01,
                        "value-formatted": "0.01 ms"
                    },
                    "memory": {
                        "value": 2.01,
                        "value-formatted": "2.01 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationsBySearch",
                        "line": 326
                    }
                }
            ],
            "addLocationResourceSimple": [
                {
                    "time": {
                        "value": 30.19,
                        "value-formatted": "30.19 ms"
                    },
                    "memory": {
                        "value": 2.36,
                        "value-formatted": "2.36 MB"
                    },
                    "additional": {
                        "class-name": "App\\Service\\LocationService",
                        "method": "getLocationsBySearch",
                        "line": 343
                    }
                }
            ]
        }
    },
    "results": {
        "total": 57,
        "results": 10,
        "page": 1
    },
    "data": [
        {
            "geoname-id": 2935022,
            "name": "Dresden",
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
                    "timezone": "2024-02-05T23:30:26+01:00",
                    "utc": "2024-02-05T22:30:26+00:00"
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
                    "this": "https://en.wikipedia.org/wiki/Dresden"
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
            }
        },
        {
            "geoname-id": 6551127,
            "name": "Dresden",
            "updated-at": "2023-08-21T19:01:04+00:00",
            "properties": {
                "population": {
                    "value": 555351,
                    "unit": "#",
                    "value-formatted": "555.351"
                },
                "elevation": {
                    "value": 118,
                    "unit": "m",
                    "value-formatted": "118 m"
                },
                "country": "DE"
            },
            "feature": {
                "code": "ADM4",
                "code-name": "Verwaltungsgliederung vierter Ordnung",
                "class": "A",
                "class-name": "Länder, Bundesländer, Regionen, etc."
            },
            "coordinate": {
                "latitude": {
                    "decimal": 51.05,
                    "dms": "51°2′60″N"
                },
                "longitude": {
                    "decimal": 13.75,
                    "dms": "13°45′0″E"
                },
                "srid": 4326
            },
            "timezone": {
                "timezone": "Europe/Berlin",
                "country": "DE",
                "current-time": {
                    "timezone": "2024-02-05T23:30:26+01:00",
                    "utc": "2024-02-05T22:30:26+00:00"
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
                    "this": "https://en.wikipedia.org/wiki/Dresden"
                },
                "maps": {
                    "google": "https://www.google.de/maps/place/51.050000+13.750000",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=51.050000&lon=13.750000&mlat=51.050000&mlon=13.750000&zoom=14&layers=M"
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
            }
        },
        {
            "geoname-id": 3305799,
            "name": "Direktionsbezirk Dresden",
            "updated-at": "2023-08-21T19:00:46+00:00",
            "properties": {
                "population": {
                    "value": 1631486,
                    "unit": "#",
                    "value-formatted": "1.631.486"
                },
                "elevation": {
                    "value": 315,
                    "unit": "m",
                    "value-formatted": "315 m"
                },
                "country": "DE"
            },
            "feature": {
                "code": "ADM2H",
                "code-name": "Historische Verwaltungsgliederung zweiter Ordnung",
                "class": "A",
                "class-name": "Länder, Bundesländer, Regionen, etc."
            },
            "coordinate": {
                "latitude": {
                    "decimal": 51.16667,
                    "dms": "51°10′0.012″N"
                },
                "longitude": {
                    "decimal": 14.08333,
                    "dms": "14°4′59.988″E"
                },
                "srid": 4326
            },
            "timezone": {
                "timezone": "Europe/Berlin",
                "country": "DE",
                "current-time": {
                    "timezone": "2024-02-05T23:30:26+01:00",
                    "utc": "2024-02-05T22:30:26+00:00"
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
                    "this": "https://de.wikipedia.org/wiki/Direktionsbezirk_Dresden"
                },
                "maps": {
                    "google": "https://www.google.de/maps/place/51.166670+14.083330",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=51.166670&lon=14.083330&mlat=51.166670&mlon=14.083330&zoom=14&layers=M"
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
            }
        },
        {
            "geoname-id": 4619013,
            "name": "Dresden",
            "updated-at": "2023-08-21T19:53:00+00:00",
            "properties": {
                "population": {
                    "value": 2898,
                    "unit": "#",
                    "value-formatted": "2.898"
                },
                "elevation": {
                    "value": 132,
                    "unit": "m",
                    "value-formatted": "132 m"
                },
                "country": "US"
            },
            "feature": {
                "code": "PPLA2",
                "code-name": "Sitz einer Verwaltungseinheit zweiter Ordnung",
                "class": "P",
                "class-name": "Städte, Dörfer, etc."
            },
            "coordinate": {
                "latitude": {
                    "decimal": 36.29145,
                    "dms": "36°17′29.22″N"
                },
                "longitude": {
                    "decimal": -88.70811,
                    "dms": "88°42′29.196″W"
                },
                "srid": 4326
            },
            "timezone": {
                "timezone": "America/Chicago",
                "country": "US",
                "current-time": {
                    "timezone": "2024-02-05T16:30:26-06:00",
                    "utc": "2024-02-05T22:30:26+00:00"
                },
                "offset": "-06:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 41.85,
                        "dms": "41°51′0″N"
                    },
                    "longitude": {
                        "decimal": -87.65,
                        "dms": "87°39′0″W"
                    },
                    "srid": 4326
                }
            },
            "links": {
                "wikipedia": {
                    "this": "https://en.wikipedia.org/wiki/Dresden%2C_Tennessee"
                },
                "maps": {
                    "google": "https://www.google.de/maps/place/36.291450+-88.708110",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=36.291450&lon=-88.708110&mlat=36.291450&mlon=-88.708110&zoom=14&layers=M"
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
                            "PPLA3",
                            "PPLA4"
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
            "geoname-id": 5152291,
            "name": "Dresden, USA",
            "updated-at": "2023-08-21T20:23:20+00:00",
            "properties": {
                "population": {
                    "value": 1706,
                    "unit": "#",
                    "value-formatted": "1.706"
                },
                "elevation": {
                    "value": 227,
                    "unit": "m",
                    "value-formatted": "227 m"
                },
                "country": "US"
            },
            "feature": {
                "code": "PPL",
                "code-name": "Besiedelter Ort (Stadtteil)",
                "class": "P",
                "class-name": "Städte, Dörfer, etc."
            },
            "coordinate": {
                "latitude": {
                    "decimal": 40.12146,
                    "dms": "40°7′17.256″N"
                },
                "longitude": {
                    "decimal": -82.01069,
                    "dms": "82°0′38.484″W"
                },
                "srid": 4326
            },
            "timezone": {
                "timezone": "America/New_York",
                "country": "US",
                "current-time": {
                    "timezone": "2024-02-05T17:30:26-05:00",
                    "utc": "2024-02-05T22:30:26+00:00"
                },
                "offset": "-05:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 40.71416,
                        "dms": "40°42′50.976″N"
                    },
                    "longitude": {
                        "decimal": -74.00638,
                        "dms": "74°0′22.968″W"
                    },
                    "srid": 4326
                }
            },
            "links": {
                "wikipedia": {
                    "this": "https://en.wikipedia.org/wiki/Dresden%2C_Ohio"
                },
                "maps": {
                    "google": "https://www.google.de/maps/place/40.121460+-82.010690",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=40.121460&lon=-82.010690&mlat=40.121460&mlon=-82.010690&zoom=14&layers=M"
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
                            "PPLA3",
                            "PPLA4"
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
            "geoname-id": 5115302,
            "name": "Dresden",
            "updated-at": "2023-08-21T20:21:05+00:00",
            "properties": {
                "population": {
                    "value": 300,
                    "unit": "#",
                    "value-formatted": "300"
                },
                "elevation": {
                    "value": 159,
                    "unit": "m",
                    "value-formatted": "159 m"
                },
                "country": "US"
            },
            "feature": {
                "code": "PPL",
                "code-name": "Besiedelter Ort (Stadtteil)",
                "class": "P",
                "class-name": "Städte, Dörfer, etc."
            },
            "coordinate": {
                "latitude": {
                    "decimal": 42.68396,
                    "dms": "42°41′2.256″N"
                },
                "longitude": {
                    "decimal": -76.9558,
                    "dms": "76°57′20.88″W"
                },
                "srid": 4326
            },
            "timezone": {
                "timezone": "America/New_York",
                "country": "US",
                "current-time": {
                    "timezone": "2024-02-05T17:30:26-05:00",
                    "utc": "2024-02-05T22:30:26+00:00"
                },
                "offset": "-05:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 40.71416,
                        "dms": "40°42′50.976″N"
                    },
                    "longitude": {
                        "decimal": -74.00638,
                        "dms": "74°0′22.968″W"
                    },
                    "srid": 4326
                }
            },
            "links": {
                "wikipedia": {
                    "this": "https://en.wikipedia.org/wiki/Dresden%2C_Yates_County%2C_New_York"
                },
                "maps": {
                    "google": "https://www.google.de/maps/place/42.683960+-76.955800",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=42.683960&lon=-76.955800&mlat=42.683960&mlon=-76.955800&zoom=14&layers=M"
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
                            "PPLA3",
                            "PPLA4"
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
            "geoname-id": 5445306,
            "name": "Dresden",
            "updated-at": "2023-08-21T21:47:55+00:00",
            "properties": {
                "population": {
                    "value": 41,
                    "unit": "#",
                    "value-formatted": "41"
                },
                "elevation": {
                    "value": 840,
                    "unit": "m",
                    "value-formatted": "840 m"
                },
                "country": "US"
            },
            "feature": {
                "code": "PPL",
                "code-name": "Besiedelter Ort (Stadtteil)",
                "class": "P",
                "class-name": "Städte, Dörfer, etc."
            },
            "coordinate": {
                "latitude": {
                    "decimal": 39.62417,
                    "dms": "39°37′27.012″N"
                },
                "longitude": {
                    "decimal": -100.42236,
                    "dms": "100°25′20.496″W"
                },
                "srid": 4326
            },
            "timezone": {
                "timezone": "America/Chicago",
                "country": "US",
                "current-time": {
                    "timezone": "2024-02-05T16:30:26-06:00",
                    "utc": "2024-02-05T22:30:26+00:00"
                },
                "offset": "-06:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 41.85,
                        "dms": "41°51′0″N"
                    },
                    "longitude": {
                        "decimal": -87.65,
                        "dms": "87°39′0″W"
                    },
                    "srid": 4326
                }
            },
            "links": {
                "wikipedia": {
                    "this": "https://en.wikipedia.org/wiki/Dresden%2C_Kansas"
                },
                "maps": {
                    "google": "https://www.google.de/maps/place/39.624170+-100.422360",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=39.624170&lon=-100.422360&mlat=39.624170&mlon=-100.422360&zoom=14&layers=M"
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
                            "PPLA3",
                            "PPLA4"
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
            "geoname-id": 5942576,
            "name": "Dresden",
            "updated-at": "2023-08-22T13:53:13+00:00",
            "properties": {
                "elevation": {
                    "value": 182,
                    "unit": "m",
                    "value-formatted": "182 m"
                },
                "country": "CA"
            },
            "feature": {
                "code": "PPL",
                "code-name": "Besiedelter Ort (Stadtteil)",
                "class": "P",
                "class-name": "Städte, Dörfer, etc."
            },
            "coordinate": {
                "latitude": {
                    "decimal": 42.58338,
                    "dms": "42°35′0.168″N"
                },
                "longitude": {
                    "decimal": -82.1831,
                    "dms": "82°10′59.16″W"
                },
                "srid": 4326
            },
            "timezone": {
                "timezone": "America/Toronto",
                "country": "CA",
                "current-time": {
                    "timezone": "2024-02-05T17:30:26-05:00",
                    "utc": "2024-02-05T22:30:26+00:00"
                },
                "offset": "-05:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 43.65,
                        "dms": "43°38′60″N"
                    },
                    "longitude": {
                        "decimal": -79.38333,
                        "dms": "79°22′59.988″W"
                    },
                    "srid": 4326
                }
            },
            "links": {
                "wikipedia": {
                    "this": "https://en.wikipedia.org/wiki/Dresden%2C_Ontario"
                },
                "maps": {
                    "google": "https://www.google.de/maps/place/42.583380+-82.183100",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=42.583380&lon=-82.183100&mlat=42.583380&mlon=-82.183100&zoom=14&layers=M"
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
            }
        },
        {
            "geoname-id": 4384451,
            "name": "Dresden",
            "updated-at": "2023-08-21T19:43:32+00:00",
            "properties": {
                "elevation": {
                    "value": 254,
                    "unit": "m",
                    "value-formatted": "254 m"
                },
                "country": "US"
            },
            "feature": {
                "code": "PPL",
                "code-name": "Besiedelter Ort (Stadtteil)",
                "class": "P",
                "class-name": "Städte, Dörfer, etc."
            },
            "coordinate": {
                "latitude": {
                    "decimal": 38.75113,
                    "dms": "38°45′4.068″N"
                },
                "longitude": {
                    "decimal": -93.33493,
                    "dms": "93°20′5.748″W"
                },
                "srid": 4326
            },
            "timezone": {
                "timezone": "America/Chicago",
                "country": "US",
                "current-time": {
                    "timezone": "2024-02-05T16:30:26-06:00",
                    "utc": "2024-02-05T22:30:26+00:00"
                },
                "offset": "-06:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 41.85,
                        "dms": "41°51′0″N"
                    },
                    "longitude": {
                        "decimal": -87.65,
                        "dms": "87°39′0″W"
                    },
                    "srid": 4326
                }
            },
            "links": {
                "maps": {
                    "google": "https://www.google.de/maps/place/38.751130+-93.334930",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=38.751130&lon=-93.334930&mlat=38.751130&mlon=-93.334930&zoom=14&layers=M"
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
                            "PPLA3",
                            "PPLA4"
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
            "geoname-id": 5058924,
            "name": "Dresden",
            "updated-at": "2023-08-21T20:15:03+00:00",
            "properties": {
                "elevation": {
                    "value": 481,
                    "unit": "m",
                    "value-formatted": "481 m"
                },
                "country": "US"
            },
            "feature": {
                "code": "PPL",
                "code-name": "Besiedelter Ort (Stadtteil)",
                "class": "P",
                "class-name": "Städte, Dörfer, etc."
            },
            "coordinate": {
                "latitude": {
                    "decimal": 48.8275,
                    "dms": "48°49′39″N"
                },
                "longitude": {
                    "decimal": -98.48123,
                    "dms": "98°28′52.428″W"
                },
                "srid": 4326
            },
            "timezone": {
                "timezone": "America/Chicago",
                "country": "US",
                "current-time": {
                    "timezone": "2024-02-05T16:30:26-06:00",
                    "utc": "2024-02-05T22:30:26+00:00"
                },
                "offset": "-06:00",
                "coordinate": {
                    "latitude": {
                        "decimal": 41.85,
                        "dms": "41°51′0″N"
                    },
                    "longitude": {
                        "decimal": -87.65,
                        "dms": "87°39′0″W"
                    },
                    "srid": 4326
                }
            },
            "links": {
                "wikipedia": {
                    "this": "https://en.wikipedia.org/wiki/Dresden%2C_North_Dakota"
                },
                "maps": {
                    "google": "https://www.google.de/maps/place/48.827500+-98.481230",
                    "openstreetmap": "https://www.openstreetmap.org/?lat=48.827500&lon=-98.481230&mlat=48.827500&mlon=-98.481230&zoom=14&layers=M"
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
                            "PPLA3",
                            "PPLA4"
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
    ],
    "given": {
        "query": {
            "raw": "Dresden",
            "parsed": {
                "type": "search-list-general",
                "search": "Dresden"
            }
        },
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
        },
        "next-places": false
    },
    "valid": true,
    "date": "2024-02-05T22:30:26+00:00",
    "version": "0.1.41"
};

export default PlaceSearch;