import React from "react";

/**
 * This is the holiday part.
 */
const Holidays = ({data}) => {
    if (data.holidays === undefined || Object.keys(data.holidays).length <= 0) {
        return <></>
    }

    const convertToGermanFormat = (dateString) => {
        const parts = dateString.split('-');
        return `${parts[2]}.${parts[1]}.${parts[0]}`;
    };

    return (
        <>
            <h3>Feiertage</h3>
            <ul>
                {Object.entries(data.holidays).map(([date, holiday]) => (
                    <li key={'holiday-' + date}>
                        {convertToGermanFormat(date)}: {holiday.name}
                    </li>
                )) }
            </ul>
        </>
    )
}

export default Holidays;
