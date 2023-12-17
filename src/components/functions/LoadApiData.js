import axios from "axios";

/**
 * API data load function.
 */
const loadApiData = (url, setData) => {
    axios.get(url)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error while trying to retrieve the api endpoint.', error);
        });
}

export default loadApiData;