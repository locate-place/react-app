import React from "react";

/* Import functions */
import {convertToGermanFormatFromDate} from "../../functions/Date.ts";

/* Import types */
import {TypeHolidays} from "../../types/Types.ts";

type HolidaysProps = {
    data: TypeHolidays
}

/**
 * This is the holiday part.
 */
const Holidays = ({data}: HolidaysProps) =>
{
    if (data === undefined || data.holidays === undefined || Object.keys(data.holidays).length <= 0) {
        return <></>
    }

    console.log(data);

    let hasHolidays = !!data.holidays;
    let holidays = hasHolidays ? data.holidays : [];

    return (
        <>
            <h3 className="mt-5">Feiertage</h3>
            <ul className="list-group list-group-numbered">
                {Object.entries(holidays).map(([index, holiday]) => (
                    <li key={'holiday-' + index} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{convertToGermanFormatFromDate(holiday.date)}</div>
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
