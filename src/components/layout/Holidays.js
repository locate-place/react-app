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
            <h3 className="mt-5">Feiertage</h3>
            <ul className="list-group list-group-numbered">
                {Object.entries(data.holidays).map(([date, holiday]) => (
                    <li key={'holiday-' + date} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{convertToGermanFormat(date)}</div>
                            {holiday.name}
                        </div>
                        <span className="badge bg-primary rounded-pill">1</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Holidays;
