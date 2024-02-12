import axios from "axios";
import semver from "semver";

/* Import types. */
import {
    TypeApiProperties,
    TypeLoadApiArguments
} from "../types/Types";

/**
 * API data load function.
 */
const loadApiData = (
    parameters: TypeLoadApiArguments
) =>
{
    const type = parameters.type;
    const path = parameters.path;
    const setLoaded = parameters.setLoaded;
    const setError = parameters.setError;
    const setProperties = parameters.setProperties;

    const setDataVersion = parameters.setDataVersion ?? null;
    const setDataCalendarPage = parameters.setDataCalendarPage ?? null;
    const setDataCalendar = parameters.setDataCalendar ?? null;
    const setDataCalendars = parameters.setDataCalendars ?? null;
    const setDataLocation = parameters.setDataLocation ?? null;
    const setDataLocations = parameters.setDataLocations ?? null;
    const setDataApi = parameters.setDataApi ?? null;
    const callback = parameters.callback ?? null;

    let url: string|null = null;
    let name: string|null = null;

    switch (type) {
        case process.env.REACT_APP_TYPE_CALENDAR_BUILDER:
            url = process.env.REACT_APP_CALENDAR_BUILDER_URL !== undefined ?
                process.env.REACT_APP_CALENDAR_BUILDER_URL :
                null;
            name = 'PHP Calendar Builder';
            break;

        case process.env.REACT_APP_TYPE_LOCATION_API:
            url = process.env.REACT_APP_LOCATION_API_URL !== undefined ?
                process.env.REACT_APP_LOCATION_API_URL :
                null;
            name = 'PHP Location API';
            break;

        default:
            url = null;
            break;
    }

    if (!url) {
        alert('Wrong API type given.');
        return;
    }

    let apiUrl = url + path;

    axios.get(apiUrl)
        .then(response => {

            let versionResponse = !!path.match(/version.json/);
            let data = response.data;

            /* Use raw data */
            if (versionResponse) {
                setLoaded(true);

                if (setDataVersion !== null) {
                    setDataVersion(data);
                }
                if (setDataCalendarPage !== null) {
                    setDataCalendarPage(data);
                }
                if (setDataCalendar !== null) {
                    setDataCalendar(data);
                }
                if (setDataCalendars !== null) {
                    setDataCalendars(data);
                }
                if (setDataLocation !== null) {
                    setDataLocation(data);
                }
                if (setDataLocations !== null) {
                    setDataLocations(data);
                }
                if (setDataApi !== null) {
                    setDataApi(data);
                }

                return;
            }

            let version = data.version;
            let valid = data.valid;

            /* Check API response */
            if (!valid) {
                setLoaded(false);
                setError({message: 'The API response is not valid.'});
                return;
            }

            let calendarBuilderVersion: string = process.env.REACT_APP_CALENDAR_BUILDER_VERSION !== undefined ?
                process.env.REACT_APP_CALENDAR_BUILDER_VERSION :
                '0.1.0';

            /* Check required api version */
            if (!semver.satisfies(version, calendarBuilderVersion)) {
                setLoaded(false);
                setError({message: 'The api version does not match the required version. Required version: ' + process.env.REACT_APP_CALENDAR_BUILDER_VERSION + '. Current version: ' + version});
                return;
            }

            /* Set data */
            setLoaded(true);

            if (setDataVersion !== null) {
                setDataVersion(data.data);
            }
            if (setDataCalendarPage !== null) {
                setDataCalendarPage(data.data);
            }
            if (setDataCalendar !== null) {
                setDataCalendar(data.data);
            }
            if (setDataCalendars !== null) {
                setDataCalendars(data.data);
            }
            if (setDataLocation !== null) {
                setDataLocation(data.data);
            }
            if (setDataLocations !== null) {
                setDataLocations(data.data);
            }
            if (setDataApi !== null) {
                setDataApi(data);
            }

            if (setProperties) {
                let propertiesApi: TypeApiProperties = {
                    "date": data['date'],
                    "given": data['given'],
                    "memory-taken": data['memory-taken'],
                    "time-taken": data['time-taken'],
                    "valid": data['valid'],
                    "version": data['version'],
                    "name": name,
                    "url": url,
                    "path": path,
                    "type": type,
                    "api-url": apiUrl
                };

                if (data['results']) {
                    propertiesApi['results'] = data['results'];
                }

                setProperties(propertiesApi);
            }

            if (callback !== null) {
                callback();
            }
        })
        .catch(error => {
            setLoaded(false);
            setError(error);
            setProperties({
                "valid": false,
                "name": name,
                "url": url,
                "path": path,
                "type": type,
                "api-url": apiUrl
            });
        });
}

export default loadApiData;