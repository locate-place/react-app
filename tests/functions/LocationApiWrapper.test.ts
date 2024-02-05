import {LocationApiWrapper} from "../../src/functions/LocationApiWrapper";
import GeoNameSearch from "../../mocks/location/GeoNameSearch";

test('LocationApiWrapper: Test getType', () => {
    let locationApiWrapper = new LocationApiWrapper(GeoNameSearch);

    /* Test data license */
    expect(locationApiWrapper.getDataLicence()['full']).toBe('Creative Commons Attribution 4.0 License');
    expect(locationApiWrapper.getDataLicence()['short']).toBe('CC-BY 4.0');
    expect(locationApiWrapper.getDataLicence()['url']).toBe('https://download.geonames.org/export/dump/readme.txt');

    /* Test version parameter. */
    expect(locationApiWrapper.getVersion()).toBe('0.1.41');


});