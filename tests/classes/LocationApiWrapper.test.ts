/* Import mocks. */
import GeoNameSearch from "../../mocks/location/GeoNameSearch";
import GeoNameSearchWithCurrentPosition from "../../mocks/location/GeoNameSearchWithCurrentPosition";
import PlaceSearch from "../../mocks/locations/PlaceSearch";

/* Import types. */
import {typeLocation, typeLocations} from "../../src/types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../src/classes/Api/Location/ApiLocationWrapper";

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
 * @param apiLocationWrapper
 */
const testLocationGeneral = (apiLocationWrapper: ApiLocationWrapper) =>
{
    /* Test the type of the api data. */
    expect(apiLocationWrapper.getType()).toEqual(typeLocation);
    expect(apiLocationWrapper.isLocations()).toEqual(false);
    expect(apiLocationWrapper.isLocation()).toEqual(true);

    /* Test data license */
    expect(apiLocationWrapper.getDataLicence()['full']).toEqual('Creative Commons Attribution 4.0 License');
    expect(apiLocationWrapper.getDataLicence()['short']).toEqual('CC-BY 4.0');
    expect(apiLocationWrapper.getDataLicence()['url']).toEqual('https://download.geonames.org/export/dump/readme.txt');
}

/**
 * Check location GeoNameSearch
 */
test('LocationApiWrapper: Test location GeoNameSearch', () =>
{
    let apiLocationWrapper = new ApiLocationWrapper(GeoNameSearch);

    /* Test general things from location entity. */
    testLocationGeneral(apiLocationWrapper);

    /* Test time taken */
    expect(apiLocationWrapper.getTimeTaken()).toEqual('293ms');

    /* Test memory taken */
    expect(apiLocationWrapper.getMemoryTaken()).toEqual('4.54 MB');

    /* Test performance */
    expect(typeof apiLocationWrapper.getPerformance()).toEqual('object');

    /* Test results */
    expect(apiLocationWrapper.getResults()).toBeNull();

    /* Test valid */
    expect(apiLocationWrapper.getValid()).toEqual(true);

    /* Test date */
    expect(apiLocationWrapper.getDate()).toEqual('2024-02-05T20:01:31+00:00');

    /* Test version parameter. */
    expect(apiLocationWrapper.getVersion()).toEqual('0.1.41');

    /* Test location. */
    expect(apiLocationWrapper.getLocation().getName()).toEqual('Dresden');
    expect(apiLocationWrapper.getLocation().getGeonameId()).toEqual(2935022);
    expect(apiLocationWrapper.getLocation().getUpdateAt()).toEqual('2023-08-21T18:59:58+00:00');

    /* Test administrative locations. */
    expect(apiLocationWrapper.getLocation().getDistrictLocality()?.getName()).toEqual('Innere Altstadt');
    expect(apiLocationWrapper.getLocation().getCityMunicipality()?.getName()).toEqual('Dresden');
    expect(apiLocationWrapper.getLocation().getState()?.getName()).toEqual('Sachsen');
    expect(apiLocationWrapper.getLocation().getCountry()?.getName()).toEqual('Deutschland');

    /* Test properties. */
    expect(apiLocationWrapper.getLocation().getProperties().getCountryCode()).toEqual('DE');
    expect(apiLocationWrapper.getLocation().getProperties().getElevation()).toEqual({"value": 116, "unit": "m", "value-formatted": "116 m"});
    expect(apiLocationWrapper.getLocation().getProperties().getPopulation()).toEqual({"unit": "#", "value": 556227, "value-formatted": "556.227"});

    /* Test coordinate. */
    expect(apiLocationWrapper.getLocation().getCoordinate().getDMS()).toEqual('51°3′3.204″N, 13°44′17.952″E');
    expect(apiLocationWrapper.getLocation().getCoordinate().getDecimal()).toEqual('51.05089, 13.73832');
    expect(apiLocationWrapper.getLocation().getCoordinate().getDistance()).toEqual(null);
    expect(apiLocationWrapper.getLocation().getCoordinate().getDistanceUser()).toEqual(null);
    expect(apiLocationWrapper.getLocation().getCoordinate().getDirection()).toEqual(null);
    expect(apiLocationWrapper.getLocation().getCoordinate().getDirectionTranslated()).toEqual(null);
    expect(apiLocationWrapper.getLocation().getCoordinate().getDirectionUser()).toEqual(null);
    expect(apiLocationWrapper.getLocation().getCoordinate().getDirectionUserTranslated()).toEqual(null);

    /* Test feature. */
    expect(apiLocationWrapper.getLocation().getFeature().getClass().getCode()).toEqual("P");
    expect(apiLocationWrapper.getLocation().getFeature().getClass().getName()).toEqual("Städte, Dörfer, etc.");
    expect(apiLocationWrapper.getLocation().getFeature().getCode().getCode()).toEqual("PPLA");
    expect(apiLocationWrapper.getLocation().getFeature().getCode().getName()).toEqual("Sitz einer Verwaltungseinheit erster Ordnung");

    /* Test timezone. */
    expect(apiLocationWrapper.getLocation().getTimezone()?.getTimezone()).toEqual('Europe/Berlin');
    expect(apiLocationWrapper.getLocation().getTimezone()?.getOffset()).toEqual('+01:00');

    /* Test links. */
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipedia()).toEqual('https://en.wikipedia.org/wiki/Dresden');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationDistrictLocality)).toEqual(null);
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationCityMunicipality)).toEqual('https://en.wikipedia.org/wiki/Dresden');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationState)).toEqual('https://en.wikipedia.org/wiki/Saxony');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationCountry)).toEqual('https://en.wikipedia.org/wiki/Germany');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassH, 0)).toEqual('https://en.wikipedia.org/wiki/Priessnitz');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassH, 1)).toEqual(null);
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassH, 2)).toEqual('https://en.wikipedia.org/wiki/Wei%C3%9Feritz');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassV, 0)).toEqual(null);
    expect(apiLocationWrapper.getLocation().getLinks()?.getMaps(mapTypeGoogle)).toEqual('https://www.google.de/maps/place/51.050890+13.738320');
    expect(apiLocationWrapper.getLocation().getLinks()?.getMaps(mapTypeOpenStreetMap)).toEqual('https://www.openstreetmap.org/?lat=51.050890&lon=13.738320&mlat=51.050890&mlon=13.738320&zoom=14&layers=M');

    /* Test next places config. */
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getConfigKeysNextPlaces()).toEqual(["cities", "parks", "airports", "stations", "cinemas", "beaches", "churches", "waters", "hotels", "hospitals", "mountains"]);
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.hasConfigByNexPlace("mountains")).toEqual(true);
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.hasConfigByNexPlace("xyz")).toEqual(false);
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getConfigByNexPlace("mountains")).toEqual({"distance": 50000, "feature_codes": ["HLL", "MT", "PK"], "limit": 10, "name": "mountains, hills"});
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getConfigByNexPlace("xyz")).toEqual(null);
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getEndpoints()).toEqual({"coordinate": "/api/v1/location/coordinate.json", "list": "/api/v1/location.json"});
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getEndpoint('coordinate')).toEqual('/api/v1/location/coordinate.json');
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getEndpoint('list')).toEqual('/api/v1/location.json');

    /* Test next places. */
    expect(apiLocationWrapper.getLocation().getNextPlaces()?.getFeatureClasses()).toEqual(["H", "L", "P", "R", "S", "T", "U", "V"]);
    expect(apiLocationWrapper.getLocation().getNextPlaces()?.getNextPlaceConfig('H')).toEqual({"coordinate": {"latitude": {"decimal": 51.05089, "dms": "51°3′3.204″N"}, "longitude": {"decimal": 13.73832, "dms": "13°44′17.952″E"}, "srid": 4326}, "coordinate-type": "location", "distance-meter": 10000, "limit": 10, "location": {"name": "Dresden"}});
    expect(apiLocationWrapper.getLocation().getNextPlaces()?.getNextPlacePlacesNumber('H')).toEqual(5);
});

/**
 * Check location GeoNameSearch (with current location)
 */
test('LocationApiWrapper: Test location GeoNameSearch with current location', () =>
{
    let apiLocationWrapper = new ApiLocationWrapper(GeoNameSearchWithCurrentPosition);

    /* Test general things from location entity. */
    testLocationGeneral(apiLocationWrapper);

    /* Test time taken */
    expect(apiLocationWrapper.getTimeTaken()).toEqual('472ms');

    /* Test memory taken */
    expect(apiLocationWrapper.getMemoryTaken()).toEqual('5.07 MB');

    /* Test performance */
    expect(typeof apiLocationWrapper.getPerformance()).toEqual('object');

    /* Test results */
    expect(apiLocationWrapper.getResults()).toBeNull();

    /* Test valid */
    expect(apiLocationWrapper.getValid()).toEqual(true);

    /* Test date */
    expect(apiLocationWrapper.getDate()).toEqual('2024-02-11T15:47:39+00:00');

    /* Test version parameter. */
    expect(apiLocationWrapper.getVersion()).toEqual('0.1.42');

    /* Test location. */
    expect(apiLocationWrapper.getLocation().getName()).toEqual('Cologne Cathedral');
    expect(apiLocationWrapper.getLocation().getGeonameId()).toEqual(6324464);
    expect(apiLocationWrapper.getLocation().getUpdateAt()).toEqual('2023-08-21T19:00:47+00:00');

    /* Test administrative locations. */
    expect(apiLocationWrapper.getLocation().getDistrictLocality()?.getName()).toEqual('Altstadt Nord');
    expect(apiLocationWrapper.getLocation().getCityMunicipality()?.getName()).toEqual('Cologne');
    expect(apiLocationWrapper.getLocation().getState()?.getName()).toEqual('North Rhine-Westphalia');
    expect(apiLocationWrapper.getLocation().getCountry()?.getName()).toEqual('Germany');

    /* Test properties. */
    expect(apiLocationWrapper.getLocation().getProperties().getCountryCode()).toEqual('DE');
    expect(apiLocationWrapper.getLocation().getProperties().getElevation()).toEqual({"value": 62, "unit": "m", "value-formatted": "62 m"});
    expect(apiLocationWrapper.getLocation().getProperties().getPopulation()).toEqual(null);

    /* Test coordinate. */
    expect(apiLocationWrapper.getLocation().getCoordinate().getDMS()).toEqual('50°56′28.428″N, 6°57′29.628″E');
    expect(apiLocationWrapper.getLocation().getCoordinate().getDecimal()).toEqual('50.94123, 6.95823');
    expect(apiLocationWrapper.getLocation().getCoordinate().getDistance()).toEqual(null);
    expect(apiLocationWrapper.getLocation().getCoordinate().getDistanceUser()).toEqual({"kilometers": {"unit": "km", "value": 474.627, "value-formatted": "474.627 km"}, "meters": {"unit": "m", "value": 474626.6, "value-formatted": "474,626.6 m"}});
    expect(apiLocationWrapper.getLocation().getCoordinate().getDirection()).toEqual(null);
    expect(apiLocationWrapper.getLocation().getCoordinate().getDirectionTranslated()).toEqual(null);
    expect(apiLocationWrapper.getLocation().getCoordinate().getDirectionUser()).toEqual({"cardinal-direction": "W", "cardinal-direction-translated": "West", "degree": -91.01});
    expect(apiLocationWrapper.getLocation().getCoordinate().getDirectionUserTranslated()).toEqual('West');

    /* Test feature. */
    expect(apiLocationWrapper.getLocation().getFeature().getClass().getCode()).toEqual("S");
    expect(apiLocationWrapper.getLocation().getFeature().getClass().getName()).toEqual("Spots, Buildings, Farms, etc.");
    expect(apiLocationWrapper.getLocation().getFeature().getCode().getCode()).toEqual("CH");
    expect(apiLocationWrapper.getLocation().getFeature().getCode().getName()).toEqual("Church");

    /* Test timezone. */
    expect(apiLocationWrapper.getLocation().getTimezone()?.getTimezone()).toEqual('Europe/Berlin');
    expect(apiLocationWrapper.getLocation().getTimezone()?.getOffset()).toEqual('+01:00');

    /* Test links. */
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipedia()).toEqual('https://en.wikipedia.org/wiki/Cologne_Cathedral');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationDistrictLocality)).toEqual('https://de.wikipedia.org/wiki/K%C3%B6ln-Altstadt-Nord');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationCityMunicipality)).toEqual('https://en.wikipedia.org/wiki/Cologne');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationState)).toEqual('https://en.wikipedia.org/wiki/North_Rhine-Westphalia');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaLocation(administrativeLocationCountry)).toEqual('https://en.wikipedia.org/wiki/Germany');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassT, 2)).toEqual('https://en.wikipedia.org/wiki/Cologne_Lowland');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassT, 3)).toEqual(null);
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassT, 4)).toEqual('https://en.wikipedia.org/wiki/Monte_Troodel%C3%B6h');
    expect(apiLocationWrapper.getLocation().getLinks()?.getWikipediaNextLocation(featureClassV, 0)).toEqual(null);
    expect(apiLocationWrapper.getLocation().getLinks()?.getMaps(mapTypeGoogle)).toEqual('https://www.google.de/maps/place/50.941230+6.958230');
    expect(apiLocationWrapper.getLocation().getLinks()?.getMaps(mapTypeOpenStreetMap)).toEqual('https://www.openstreetmap.org/?lat=50.941230&lon=6.958230&mlat=50.941230&mlon=6.958230&zoom=14&layers=M');

    /* Test next places config. */
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getConfigKeysNextPlaces()).toEqual(["cities", "parks", "airports", "stations", "cinemas", "beaches", "churches", "waters", "hotels", "hospitals", "mountains"]);
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.hasConfigByNexPlace("mountains")).toEqual(true);
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.hasConfigByNexPlace("abc")).toEqual(false);
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getConfigByNexPlace("mountains")).toEqual({"distance": 50000, "feature_codes": ["HLL", "MT", "PK"], "limit": 10, "name": "mountains, hills"});
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getConfigByNexPlace("abc")).toEqual(null);
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getEndpoints()).toEqual({"coordinate": "/api/v1/location/coordinate.json", "list": "/api/v1/location.json"});
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getEndpoint('coordinate')).toEqual('/api/v1/location/coordinate.json');
    expect(apiLocationWrapper.getLocation().getNextPlacesConfig()?.getEndpoint('list')).toEqual('/api/v1/location.json');

    /* Test next places. */
    expect(apiLocationWrapper.getLocation().getNextPlaces()?.getFeatureClasses()).toEqual(["H", "L", "P", "R", "S", "T", "U", "V"]);
    expect(apiLocationWrapper.getLocation().getNextPlaces()?.getNextPlaceConfig('H')).toEqual({"coordinate": {"latitude": {"decimal": 50.94123, "dms": "50°56′28.428″N"}, "longitude": {"decimal": 6.95823, "dms": "6°57′29.628″E"}, "srid": 4326}, "coordinate-type": "location", "distance-meter": 10000, "limit": 10, "location": {"name": "Cologne Cathedral"}});
    expect(apiLocationWrapper.getLocation().getNextPlaces()?.getNextPlacePlacesNumber('H')).toEqual(10);
});

/**
 * Check locations PlaceSearch
 */
test('LocationApiWrapper: Test locations PlaceSearch', () =>
{
    let apiLocationWrapper = new ApiLocationWrapper(PlaceSearch);

    /* Test the type of the api data. */
    expect(apiLocationWrapper.getType()).toEqual(typeLocations);
    expect(apiLocationWrapper.isLocations()).toEqual(true);
    expect(apiLocationWrapper.isLocation()).toEqual(false);

    /* Test data license */
    expect(apiLocationWrapper.getDataLicence()['full']).toEqual('Creative Commons Attribution 4.0 License');
    expect(apiLocationWrapper.getDataLicence()['short']).toEqual('CC-BY 4.0');
    expect(apiLocationWrapper.getDataLicence()['url']).toEqual('https://download.geonames.org/export/dump/readme.txt');

    /* Test time taken */
    expect(apiLocationWrapper.getTimeTaken()).toEqual('111ms');

    /* Test memory taken */
    expect(apiLocationWrapper.getMemoryTaken()).toEqual('2.37 MB');

    /* Test performance */
    expect(typeof apiLocationWrapper.getPerformance()).toEqual('object');

    /* Test results */
    expect(apiLocationWrapper.getResults()).not.toBeNull();

    /* Test valid */
    expect(apiLocationWrapper.getValid()).toEqual(true);

    /* Test date */
    expect(apiLocationWrapper.getDate()).toEqual('2024-02-05T22:30:26+00:00');

    /* Test version parameter. */
    expect(apiLocationWrapper.getVersion()).toEqual('0.1.41');
});