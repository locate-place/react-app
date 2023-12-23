import React from "react";

/**
 * This is the birthday part.
 */
const Birthdays = ({data}) => {
    if (data.birthdays === undefined || Object.keys(data.birthdays).length <= 0) {
        return <></>
    }

    const convertToGermanFormat = (dateString) => {
        const parts = dateString.split('-');
        return `${parts[2]}.${parts[1]}.${parts[0]}`;
    };

    return (
        <>
            <h3>Geburtstage</h3>
            <ul>
                {Object.entries(data.birthdays).map(([date, names]) => (
                    <li key={'birthday-' + date}>
                        {convertToGermanFormat(date)}: {names.join(', ')}
                    </li>
                )) }
            </ul>
        </>
    )
}

export default Birthdays;
