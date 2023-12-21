import React from "react";

/**
 * This is the birthday part.
 */
const Birthdays = ({data}) => {
    return (
        <>
            { Object.keys(data.birthdays).length > 0 ? <>
                <h3>Geburtstage</h3>
                <ul>
                    {Object.entries(data.birthdays).map(([date, names]) => (
                        <li key={'birthday-'.date}>
                            {date}: {names.join(', ')}
                        </li>
                    )) }
                </ul>
            </> : null }
        </>
    )
}

export default Birthdays;
