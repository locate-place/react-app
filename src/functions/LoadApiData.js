import axios from "axios";
import semver from "semver";

/**
 * API data load function.
 */
const loadApiData = (url, setLoaded, setError, setData) => {
    axios.get(url)
        .then(response => {

            let versionResponse = !!url.match(/version.json/);
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
            if (!semver.satisfies(version, process.env.REACT_APP_VERSION_API)) {
                setLoaded(false);
                setError({message: 'The api version does not match the required version. Required version: ' + process.env.REACT_APP_VERSION_API + '. Current version: ' + version});
                return;
            }

            /* Set data */
            setData(data.data);
            setLoaded(true);
        })
        .catch(error => {
            setLoaded(false);
            setError(error);
        });
}

export default loadApiData;