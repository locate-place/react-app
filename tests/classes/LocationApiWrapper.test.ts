/* Import mocks. */
import GeoNameSearch from "../../mocks/location/GeoNameSearch";
import GeoNameSearchWithCurrentPosition from "../../mocks/location/GeoNameSearchWithCurrentPosition";
import PlaceSearch from "../../mocks/locations/PlaceSearch";

/* Import types. */
import {typeLocation, typeLocations} from "../../src/types/Types";

/* Import classes. */
import {LocationApiWrapper} from "../../src/classes/LocationApiWrapper";

/* Import configuration. */
import {
    administrativeLocationCityMunicipality,
    administrativeLocationCountry,
    administrativeLocationDistrictLocality,
    administrativeLocationState
} from "../../src/config/AdministrativeLocations";
import {
    featureClassH,
    featureClassT,
    featureClassV
} from "../../src/config/FeatureClass";
import {
    mapTypeGoogle,
    mapTypeOpenStreetMap
} from "../../src/config/MapTypes";

/**
 * General location checker.
 *
 * @param locationApiWrapper
 */
const testLocationGeneral = (locationApiWrapper: LocationApiWrapper) =>
{
    /* Test the type of the api data. */
    expect(locationApiWrapper.getType()).toEqual(typeLocation);
    expect(locationApiWrapper.isLocations()).toEqual(false);
    expect(locationApiWrapper.isLocation()).toEqual(true);

    /* Test data license */
    expect(locationApiWrapper.getDataLicence()['full']).toEqual('Creative Commons Attribution 4.0 License');
    expect(locationApiWrapper.getDataLicence()['short']).toEqual('CC-BY 4.0');
    expect(locationApiWrapper.getDataLicence()['url']).toEqual('https://download.geonames.org/export/dump/readme.txt');
}

/**
 * Check location GeoNameSearch
 */
test('LocationApiWrapper: Test location GeoNameSearch', () =>
{
    let locationApiWrapper = new LocationApiWrapper(GeoNameSearch);

    /* Test general things from location entity. */
    testLocationGeneral(locationApiWrapper);

    /* Test time taken */
    expect(locationApiWrapper.getTimeTaken()).toEqual('293ms');

    /* Test memory taken */
    expect(locationApiWrapper.getMemoryTaken()).toEqual('4.54 MB');

    /* Test performance */
    expect(typeof locationApiWrapper.getPerformance()).toEqual('object');

    /* Test results */
    expect(locationApiWrapper.getResults()).toBeNull();

    /* Test valid */
    expect(locationApiWrapper.getValid()).toEqual(true);

    /* Test date */
    expect(locationApiWrapper.getDate()).toEqual('2024-02-05T20:01:31+00:00');

    /* Test version parameter. */
    expect(locationApiWrapper.getVersion()).toEqual('0.1.41');

    /* Test location. */
    expect(locationApiWrapper.getLocation().getName()).toEqual('Dresden');
    expect(locationApiWrapper.getLocation().getGeonameId()).toEqual(2935022);
    expect(locationApiWrapper.getLocation().getUpdateAt()).toEqual('2023-08-21T18:59:58+00:00');

    /* Test administrative locations. */
    expect(locationApiWrapper.getLocation().getDistrictLocality()?.getName()).toEqual('Innere Altstadt');
    expect(locationApiWrapper.getLocation().getCityMunicipality()?.getName()).toEqual('Dresden');
    expect(locationApiWrapper.getLocation().getState()?.getName()).toEqual('Sachsen');
    expect(locationApiWrapper.getLocation().getCountry()?.getName()).toEqual('Deutschland');

    /* Test properties. */
    expect(locationApiWrapper.getLocation().getProperties().getCountryCode()).toEqual('DE');
    expect(locationApiWrapper.getLocation().getProperties().getElevation()).toEqual({"value": 116, "unit": "m", "value-formatted": "116 m"});
    expect(locationApiWrapper.getLocation().getProperties().getPopulation()).toEqual({"unit": "#", "value": 556227, "value-formatted": "556.227"});

    /* Test coordinate. */
    expect(locationApiWrapper.getLocation().getCoordinate().getDMS()).toEqual('51°3′3.204″N, 13°44′17.952″E');
    expect(locationApiWrapper.getLocation().getCoordinate().getDecimal()).toEqual('51.05089, 13.73832');
    expect(locationApiWrapper.getLocation().getCoordinate().getDistance()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDistanceUser()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirection()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionTranslated()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionUser()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionUserTranslated()).toEqual(null);

    /* Test feature. */
    expect(locationApiWrapper.getLocation().getFeature().getClass().getCode()).toEqual("P");
    expect(locationApiWrapper.getLocation().getFeature().getClass().getName()).toEqual("Städte, Dörfer, etc.");
    expect(locationApiWrapper.getLocation().getFeature().getCode().getCode()).toEqual("PPLA");
    expect(locationApiWrapper.getLocation().getFeature().getCode().getName()).toEqual("Sitz einer Verwaltungseinheit erster Ordnung");

    /* Test timezone. */
    expect(locationApiWrapper.getLocation().getTimezone()?.getTimezone()).toEqual('Europe/Berlin');
    expect(locationApiWrapper.getLocation().getTimezone()?.getOffset()).toEqual('+01:00');

    /* Test links. */
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipedia()).toEqual('https://en.wikipedia.org/wiki/Dresden');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationDistrictLocality)).toEqual(null);
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationCityMunicipality)).toEqual('https://en.wikipedia.org/wiki/Dresden');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationState)).toEqual('https://en.wikipedia.org/wiki/Saxony');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationCountry)).toEqual('https://en.wikipedia.org/wiki/Germany');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassH, 0)).toEqual('https://en.wikipedia.org/wiki/Priessnitz');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassH, 1)).toEqual(null);
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassH, 2)).toEqual('https://en.wikipedia.org/wiki/Wei%C3%9Feritz');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassV, 0)).toEqual(null);
    expect(locationApiWrapper.getLocation().getLinks()?.getMaps(mapTypeGoogle)).toEqual('https://www.google.de/maps/place/51.050890+13.738320');
    expect(locationApiWrapper.getLocation().getLinks()?.getMaps(mapTypeOpenStreetMap)).toEqual('https://www.openstreetmap.org/?lat=51.050890&lon=13.738320&mlat=51.050890&mlon=13.738320&zoom=14&layers=M');

    /* Test next places config. */
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getConfigKeysNextPlaces()).toEqual(["cities", "parks", "airports", "stations", "cinemas", "beaches", "churches", "waters", "hotels", "hospitals", "mountains"]);
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.hasConfigByNexPlace("mountains")).toEqual(true);
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.hasConfigByNexPlace("xyz")).toEqual(false);
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getConfigByNexPlace("mountains")).toEqual({"distance": 50000, "feature_codes": ["HLL", "MT", "PK"], "limit": 10, "name": "mountains, hills"});
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getConfigByNexPlace("xyz")).toEqual(null);
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getEndpoints()).toEqual({"coordinate": "/api/v1/location/coordinate.json", "list": "/api/v1/location.json"});
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getEndpoint('coordinate')).toEqual('/api/v1/location/coordinate.json');
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getEndpoint('list')).toEqual('/api/v1/location.json');

    /* Test next places. */
    expect(locationApiWrapper.getLocation().getNextPlaces()?.getFeatureClasses()).toEqual(["H", "L", "P", "R", "S", "T", "U", "V"]);
    expect(locationApiWrapper.getLocation().getNextPlaces()?.getNextPlaceConfig('H')).toEqual({"coordinate": {"latitude": {"decimal": 51.05089, "dms": "51°3′3.204″N"}, "longitude": {"decimal": 13.73832, "dms": "13°44′17.952″E"}, "srid": 4326}, "coordinate-type": "location", "distance-meter": 10000, "limit": 10, "location": {"name": "Dresden"}});
    expect(locationApiWrapper.getLocation().getNextPlaces()?.getNextPlacePlacesNumber('H')).toEqual(5);
});

/**
 * Check location GeoNameSearch (with current location)
 */
test('LocationApiWrapper: Test location GeoNameSearch with current location', () =>
{
    let locationApiWrapper = new LocationApiWrapper(GeoNameSearchWithCurrentPosition);

    /* Test general things from location entity. */
    testLocationGeneral(locationApiWrapper);

    /* Test time taken */
    expect(locationApiWrapper.getTimeTaken()).toEqual('472ms');

    /* Test memory taken */
    expect(locationApiWrapper.getMemoryTaken()).toEqual('5.07 MB');

    /* Test performance */
    expect(typeof locationApiWrapper.getPerformance()).toEqual('object');

    /* Test results */
    expect(locationApiWrapper.getResults()).toBeNull();

    /* Test valid */
    expect(locationApiWrapper.getValid()).toEqual(true);

    /* Test date */
    expect(locationApiWrapper.getDate()).toEqual('2024-02-11T15:47:39+00:00');

    /* Test version parameter. */
    expect(locationApiWrapper.getVersion()).toEqual('0.1.42');

    /* Test location. */
    expect(locationApiWrapper.getLocation().getName()).toEqual('Cologne Cathedral');
    expect(locationApiWrapper.getLocation().getGeonameId()).toEqual(6324464);
    expect(locationApiWrapper.getLocation().getUpdateAt()).toEqual('2023-08-21T19:00:47+00:00');

    /* Test administrative locations. */
    expect(locationApiWrapper.getLocation().getDistrictLocality()?.getName()).toEqual('Altstadt Nord');
    expect(locationApiWrapper.getLocation().getCityMunicipality()?.getName()).toEqual('Cologne');
    expect(locationApiWrapper.getLocation().getState()?.getName()).toEqual('North Rhine-Westphalia');
    expect(locationApiWrapper.getLocation().getCountry()?.getName()).toEqual('Germany');

    /* Test properties. */
    expect(locationApiWrapper.getLocation().getProperties().getCountryCode()).toEqual('DE');
    expect(locationApiWrapper.getLocation().getProperties().getElevation()).toEqual({"value": 62, "unit": "m", "value-formatted": "62 m"});
    expect(locationApiWrapper.getLocation().getProperties().getPopulation()).toEqual(null);

    /* Test coordinate. */
    expect(locationApiWrapper.getLocation().getCoordinate().getDMS()).toEqual('50°56′28.428″N, 6°57′29.628″E');
    expect(locationApiWrapper.getLocation().getCoordinate().getDecimal()).toEqual('50.94123, 6.95823');
    expect(locationApiWrapper.getLocation().getCoordinate().getDistance()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDistanceUser()).toEqual({"kilometers": {"unit": "km", "value": 474.627, "value-formatted": "474.627 km"}, "meters": {"unit": "m", "value": 474626.6, "value-formatted": "474,626.6 m"}});
    expect(locationApiWrapper.getLocation().getCoordinate().getDirection()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionTranslated()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionUser()).toEqual({"cardinal-direction": "W", "cardinal-direction-translated": "West", "degree": -91.01});
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionUserTranslated()).toEqual('West');

    /* Test feature. */
    expect(locationApiWrapper.getLocation().getFeature().getClass().getCode()).toEqual("S");
    expect(locationApiWrapper.getLocation().getFeature().getClass().getName()).toEqual("Spots, Buildings, Farms, etc.");
    expect(locationApiWrapper.getLocation().getFeature().getCode().getCode()).toEqual("CH");
    expect(locationApiWrapper.getLocation().getFeature().getCode().getName()).toEqual("Church");

    /* Test timezone. */
    expect(locationApiWrapper.getLocation().getTimezone()?.getTimezone()).toEqual('Europe/Berlin');
    expect(locationApiWrapper.getLocation().getTimezone()?.getOffset()).toEqual('+01:00');

    /* Test links. */
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipedia()).toEqual('https://en.wikipedia.org/wiki/Cologne_Cathedral');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationDistrictLocality)).toEqual('https://de.wikipedia.org/wiki/K%C3%B6ln-Altstadt-Nord');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationCityMunicipality)).toEqual('https://en.wikipedia.org/wiki/Cologne');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationState)).toEqual('https://en.wikipedia.org/wiki/North_Rhine-Westphalia');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationCountry)).toEqual('https://en.wikipedia.org/wiki/Germany');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassT, 2)).toEqual('https://en.wikipedia.org/wiki/Cologne_Lowland');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassT, 3)).toEqual(null);
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassT, 4)).toEqual('https://en.wikipedia.org/wiki/Monte_Troodel%C3%B6h');
    expect(locationApiWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassV, 0)).toEqual(null);
    expect(locationApiWrapper.getLocation().getLinks()?.getMaps(mapTypeGoogle)).toEqual('https://www.google.de/maps/place/50.941230+6.958230');
    expect(locationApiWrapper.getLocation().getLinks()?.getMaps(mapTypeOpenStreetMap)).toEqual('https://www.openstreetmap.org/?lat=50.941230&lon=6.958230&mlat=50.941230&mlon=6.958230&zoom=14&layers=M');

    /* Test next places config. */
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getConfigKeysNextPlaces()).toEqual(["cities", "parks", "airports", "stations", "cinemas", "beaches", "churches", "waters", "hotels", "hospitals", "mountains"]);
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.hasConfigByNexPlace("mountains")).toEqual(true);
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.hasConfigByNexPlace("abc")).toEqual(false);
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getConfigByNexPlace("mountains")).toEqual({"distance": 50000, "feature_codes": ["HLL", "MT", "PK"], "limit": 10, "name": "mountains, hills"});
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getConfigByNexPlace("abc")).toEqual(null);
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getEndpoints()).toEqual({"coordinate": "/api/v1/location/coordinate.json", "list": "/api/v1/location.json"});
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getEndpoint('coordinate')).toEqual('/api/v1/location/coordinate.json');
    expect(locationApiWrapper.getLocation().getNextPlacesConfig()?.getEndpoint('list')).toEqual('/api/v1/location.json');

    /* Test next places. */
    expect(locationApiWrapper.getLocation().getNextPlaces()?.getFeatureClasses()).toEqual(["H", "L", "P", "R", "S", "T", "U", "V"]);
    expect(locationApiWrapper.getLocation().getNextPlaces()?.getNextPlaceConfig('H')).toEqual({"coordinate": {"latitude": {"decimal": 50.94123, "dms": "50°56′28.428″N"}, "longitude": {"decimal": 6.95823, "dms": "6°57′29.628″E"}, "srid": 4326}, "coordinate-type": "location", "distance-meter": 10000, "limit": 10, "location": {"name": "Cologne Cathedral"}});
    expect(locationApiWrapper.getLocation().getNextPlaces()?.getNextPlacePlacesNumber('H')).toEqual(10);
});

/**
 * Check locations PlaceSearch
 */
test('LocationApiWrapper: Test locations PlaceSearch', () =>
{
    let locationApiWrapper = new LocationApiWrapper(PlaceSearch);

    /* Test the type of the api data. */
    expect(locationApiWrapper.getType()).toEqual(typeLocations);
    expect(locationApiWrapper.isLocations()).toEqual(true);
    expect(locationApiWrapper.isLocation()).toEqual(false);

    /* Test data license */
    expect(locationApiWrapper.getDataLicence()['full']).toEqual('Creative Commons Attribution 4.0 License');
    expect(locationApiWrapper.getDataLicence()['short']).toEqual('CC-BY 4.0');
    expect(locationApiWrapper.getDataLicence()['url']).toEqual('https://download.geonames.org/export/dump/readme.txt');

    /* Test time taken */
    expect(locationApiWrapper.getTimeTaken()).toEqual('111ms');

    /* Test memory taken */
    expect(locationApiWrapper.getMemoryTaken()).toEqual('2.37 MB');

    /* Test performance */
    expect(typeof locationApiWrapper.getPerformance()).toEqual('object');

    /* Test results */
    expect(locationApiWrapper.getResults()).not.toBeNull();

    /* Test valid */
    expect(locationApiWrapper.getValid()).toEqual(true);

    /* Test date */
    expect(locationApiWrapper.getDate()).toEqual('2024-02-05T22:30:26+00:00');

    /* Test version parameter. */
    expect(locationApiWrapper.getVersion()).toEqual('0.1.41');
});