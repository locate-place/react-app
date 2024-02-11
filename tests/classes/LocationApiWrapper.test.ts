/* Import mocks. */
import GeoNameSearch from "../../mocks/location/GeoNameSearch";
import PlaceSearch from "../../mocks/locations/PlaceSearch";

/* Import types. */
import {typeLocation, typeLocations} from "../../src/types/Types";

/* Import classes. */
import {LocationApiWrapper} from "../../src/classes/LocationApiWrapper";

/**
 * Check location GeoNameSearch
 */
test('LocationApiWrapper: Test location GeoNameSearch', () =>
{
    let locationApiWrapper = new LocationApiWrapper(GeoNameSearch);

    /* Test the type of the api data. */
    expect(locationApiWrapper.getType()).toEqual(typeLocation);
    expect(locationApiWrapper.isLocations()).toEqual(false);
    expect(locationApiWrapper.isLocation()).toEqual(true);

    /* Test data license */
    expect(locationApiWrapper.getDataLicence()['full']).toEqual('Creative Commons Attribution 4.0 License');
    expect(locationApiWrapper.getDataLicence()['short']).toEqual('CC-BY 4.0');
    expect(locationApiWrapper.getDataLicence()['url']).toEqual('https://download.geonames.org/export/dump/readme.txt');

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
    expect(locationApiWrapper.getLocation().getDMS()).toEqual('51°3′3.204″N, 13°44′17.952″E');
    expect(locationApiWrapper.getLocation().getDecimal()).toEqual('51.05089, 13.73832');
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