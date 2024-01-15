import axios from "axios";
import semver from "semver";

/**
 * API data load function.
 */
const loadApiData = (type, path, setLoaded, setError, setData, setProperties) => {

    let url = null;
    let name = null;

    switch (type) {
        case process.env.REACT_APP_TYPE_CALENDAR_BUILDER:
            url = process.env.REACT_APP_CALENDAR_BUILDER_URL;
            name = 'PHP Calendar Builder';
            break;

        case process.env.REACT_APP_TYPE_LOCATION_API:
            url = process.env.REACT_APP_LOCATION_API_URL;
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

            /* Check required api version */
            if (!semver.satisfies(version, process.env.REACT_APP_CALENDAR_BUILDER_VERSION)) {
                setLoaded(false);
                setError({message: 'The api version does not match the required version. Required version: ' + process.env.REACT_APP_CALENDAR_BUILDER_VERSION + '. Current version: ' + version});
                return;
            }

            /* Set data */
            setData(data.data);
            setLoaded(true);

            if (setProperties) {
                setProperties({
                    'date': data['date'],
                    'given': data['given'],
                    'memory-taken': data['memory-taken'],
                    'time-taken': data['time-taken'],
                    'valid': data['valid'],
                    'version': data['version'],
                    'name': name,
                    'url': url,
                    'path': path,
                    'type': type,
                    'api-url': apiUrl
                });
            }
        })
        .catch(error => {
            setLoaded(false);
            setError(error);
            setProperties({
                'name': name,
                'url': url,
                'path': path,
                'type': type,
                'api-url': apiUrl
            });
        });
}

export default loadApiData;