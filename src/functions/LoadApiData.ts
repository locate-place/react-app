import React from "react";
import axios from "axios";
import semver from "semver";

/* Import types. */
import {TypeApiProperties, TypeDataVersion, TypeError, TypeLoaded} from "../types/Types";

/**
 * API data load function.
 */
const loadApiData = (
    type: string,
    path: string,
    setLoaded: React.Dispatch<React.SetStateAction<TypeLoaded>>,
    setError: React.Dispatch<React.SetStateAction<TypeError>>,
    setData: React.Dispatch<React.SetStateAction<TypeDataVersion|null>>,
    setProperties: React.Dispatch<React.SetStateAction<TypeApiProperties|null>>,
    callback: Function|null = null
) =>
{
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
                setData(data);
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
            setData(data.data);
            setLoaded(true);

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