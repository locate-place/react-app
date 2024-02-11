import {NavigateFunction} from "react-router-dom";

/**
 * Redirect function.
 *
 * @param navigate
 */
const redirect = (navigate: NavigateFunction) => {

    let path = window.location.pathname;

    let regexCalendar = /^\/l\/([a-zA-Z0-9]+)$/;
    let regexImage = /^\/d\/([a-zA-Z0-9]+)\/([0-9]+)$/;
    let regexRoot = /^\/$/;

    /* Redirect calendar page */
    let matchRoot = regexRoot.exec(path);
    if (matchRoot) {
        navigate('/index.html');
    }

    /* Redirect calendar page */
    let matchCalendar = regexCalendar.exec(path);
    if (matchCalendar) {
        navigate('/calendar.html?c=' + matchCalendar[1]);
    }

    /* Redirect image page from calendar */
    let matchImage = regexImage.exec(path);
    if (matchImage) {
        navigate('/page.html?c=' + matchImage[1] + '&m=' + matchImage[2]);
    }
}

export default redirect;