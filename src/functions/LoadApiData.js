import axios from "axios";

/**
 * API data load function.
 */
const loadApiData = (url, setLoaded, setError, setData) => {
    axios.get(url)
        .then(response => {
            setData(response.data);
            setLoaded(true);
        })
        .catch(error => {
            setLoaded(false);
            setError(error);
        });
}

export default loadApiData;