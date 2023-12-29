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
            <h3 className="mt-5">Geburtstage</h3>
            <ul className="list-group list-group-numbered">
                {Object.entries(data.birthdays).map(([date, birthdays]) => (
                    <li key={'birthday-' + date}
                        className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{convertToGermanFormat(date)}</div>
                            {birthdays.map(birthday => birthday.name).join(', ')}
                        </div>
                        <span className="badge bg-primary rounded-pill">{birthdays.length}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Birthdays;
