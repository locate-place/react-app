import {LocationApiWrapper} from "../../src/functions/LocationApiWrapper";

test('LocationApiWrapper: Test getType', () => {
    let locationApiWrapper = new LocationApiWrapper({
        "valid": true,
        "api-url": "",
        "name": null,
        "path": "",
        "type": "",
        "url": null
    });

    expect(locationApiWrapper.getType()).toBe('location');
});