import React from "react";

/**
 * This is the holiday part.
 */
const Holidays = ({data}) => {
    return (
        <>
            { Object.keys(data.holidays).length > 0 ? <>
                <h3>Feiertage</h3>
                <ul>
                    {Object.entries(data.holidays).map(([date, name]) => (
                        <li key={'holiday-'.date}>
                            {date}: {name}
                        </li>
                    )) }
                </ul>
            </> : null }
        </>
    )
}

export default Holidays;
