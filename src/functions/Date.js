/**
 * This function is used to convert the date and time into a German format.
 *
 * @param dateTimeString
 * @returns {`${string}${number}.${string}${number}.${number} ${string}${number}:${string}${number}`}
 */
const convertToGermanFormat = (dateTimeString) => {
    /* Convert date and time into a Date object */
    const dateTime = new Date(dateTimeString);

    // Extract day, month, and year
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1; // Months are 0-based
    const year = dateTime.getFullYear();

    // Extract hour and minute
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();

    // Create the German format: DD.MM.YYYY HH:MM:SS Timezone
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year} ${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`;
}

/*
 * Export functions.
 */
export {
    convertToGermanFormat
}
