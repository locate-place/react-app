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
    expect(locationApiWrapper.getType()).toBe(typeLocation);
    expect(locationApiWrapper.isLocations()).toBe(false);
    expect(locationApiWrapper.isLocation()).toBe(true);

    /* Test data license */
    expect(locationApiWrapper.getDataLicence()['full']).toBe('Creative Commons Attribution 4.0 License');
    expect(locationApiWrapper.getDataLicence()['short']).toBe('CC-BY 4.0');
    expect(locationApiWrapper.getDataLicence()['url']).toBe('https://download.geonames.org/export/dump/readme.txt');

    /* Test time taken */
    expect(locationApiWrapper.getTimeTaken()).toBe('293ms');

    /* Test memory taken */
    expect(locationApiWrapper.getMemoryTaken()).toBe('4.54 MB');

    /* Test performance */
    expect(typeof locationApiWrapper.getPerformance()).toBe('object');

    /* Test results */
    expect(locationApiWrapper.getResults()).toBeNull();

    /* Test valid */
    expect(locationApiWrapper.getValid()).toBe(true);

    /* Test date */
    expect(locationApiWrapper.getDate()).toBe('2024-02-05T20:01:31+00:00');

    /* Test version parameter. */
    expect(locationApiWrapper.getVersion()).toBe('0.1.41');
});

/**
 * Check locations PlaceSearch
 */
test('LocationApiWrapper: Test locations PlaceSearch', () =>
{
    let locationApiWrapper = new LocationApiWrapper(PlaceSearch);

    /* Test the type of the api data. */
    expect(locationApiWrapper.getType()).toBe(typeLocations);
    expect(locationApiWrapper.isLocations()).toBe(true);
    expect(locationApiWrapper.isLocation()).toBe(false);

    /* Test data license */
    expect(locationApiWrapper.getDataLicence()['full']).toBe('Creative Commons Attribution 4.0 License');
    expect(locationApiWrapper.getDataLicence()['short']).toBe('CC-BY 4.0');
    expect(locationApiWrapper.getDataLicence()['url']).toBe('https://download.geonames.org/export/dump/readme.txt');

    /* Test time taken */
    expect(locationApiWrapper.getTimeTaken()).toBe('111ms');

    /* Test memory taken */
    expect(locationApiWrapper.getMemoryTaken()).toBe('2.37 MB');

    /* Test performance */
    expect(typeof locationApiWrapper.getPerformance()).toBe('object');

    /* Test results */
    expect(locationApiWrapper.getResults()).not.toBeNull();

    /* Test valid */
    expect(locationApiWrapper.getValid()).toBe(true);

    /* Test date */
    expect(locationApiWrapper.getDate()).toBe('2024-02-05T22:30:26+00:00');

    /* Test version parameter. */
    expect(locationApiWrapper.getVersion()).toBe('0.1.41');
});