/* Import mocks. */
import GeoNameSearch from "../../mocks/location/GeoNameSearch";
import GeoNameSearchWithCurrentPosition from "../../mocks/location/GeoNameSearchWithCurrentPosition";
import PlaceSearch from "../../mocks/locations/PlaceSearch";

/* Import types. */
import {typeLocation, typeLocations} from "../../src/types/Types";

/* Import classes. */
import {LocationApiWrapper} from "../../src/classes/LocationApiWrapper";

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
    expect(locationApiWrapper.getLocation().getDistrictLocality()).toEqual('Innere Altstadt');
    expect(locationApiWrapper.getLocation().getCityMunicipality()).toEqual('Dresden');
    expect(locationApiWrapper.getLocation().getState()).toEqual('Sachsen');
    expect(locationApiWrapper.getLocation().getCountry()).toEqual('Deutschland');
    expect(locationApiWrapper.getLocation().getCountryCode()).toEqual('DE');
    expect(locationApiWrapper.getLocation().getElevation()).toEqual({"value": 116, "unit": "m", "value-formatted": "116 m"});
    expect(locationApiWrapper.getLocation().getCoordinate().getDMS()).toEqual('51°3′3.204″N, 13°44′17.952″E');
    expect(locationApiWrapper.getLocation().getCoordinate().getDecimal()).toEqual('51.05089, 13.73832');
    expect(locationApiWrapper.getLocation().getCoordinate().getDistance()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDistanceUser()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirection()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionString()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionUser()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionUserString()).toEqual(null);
    expect(locationApiWrapper.getLocation().getFeature().getClass()).toEqual({"code": "P", "name": "Städte, Dörfer, etc."});
    expect(locationApiWrapper.getLocation().getFeature().getCode()).toEqual({"code": "PPLA", "name": "Sitz einer Verwaltungseinheit erster Ordnung"});
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
    expect(locationApiWrapper.getLocation().getDistrictLocality()).toEqual('Altstadt Nord');
    expect(locationApiWrapper.getLocation().getCityMunicipality()).toEqual('Cologne');
    expect(locationApiWrapper.getLocation().getState()).toEqual('North Rhine-Westphalia');
    expect(locationApiWrapper.getLocation().getCountry()).toEqual('Germany');
    expect(locationApiWrapper.getLocation().getCountryCode()).toEqual('DE');
    expect(locationApiWrapper.getLocation().getElevation()).toEqual({"value": 62, "unit": "m", "value-formatted": "62 m"});
    expect(locationApiWrapper.getLocation().getCoordinate().getDMS()).toEqual('50°56′28.428″N, 6°57′29.628″E');
    expect(locationApiWrapper.getLocation().getCoordinate().getDecimal()).toEqual('50.94123, 6.95823');
    expect(locationApiWrapper.getLocation().getCoordinate().getDistance()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDistanceUser()).toEqual({"kilometers": {"unit": "km", "value": 474.627, "value-formatted": "474.627 km"}, "meters": {"unit": "m", "value": 474626.6, "value-formatted": "474,626.6 m"}});
    expect(locationApiWrapper.getLocation().getCoordinate().getDirection()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionString()).toEqual(null);
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionUser()).toEqual({"cardinal-direction": "W", "cardinal-direction-translated": "West", "degree": -91.01});
    expect(locationApiWrapper.getLocation().getCoordinate().getDirectionUserString()).toEqual('West');
    expect(locationApiWrapper.getLocation().getFeature().getClass()).toEqual({"code": "S", "name": "Spots, Buildings, Farms, etc."});
    expect(locationApiWrapper.getLocation().getFeature().getCode()).toEqual({"code": "CH", "name": "Church"});
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