import React from "react";
import {useTranslation} from "react-i18next";

/* Import functions */
import {convertToGermanFormatFromDate} from "../../functions/Date";

/* Import types */
import {TypeHolidays} from "../../types/Types";

type HolidaysProps = {
    data: TypeHolidays|undefined
}

/**
 * This is the holiday part.
 */
const Holidays = ({data}: HolidaysProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    if (data === undefined || Object.keys(data).length <= 0) {
        return <></>
    }

    let hasHolidays = !!data;
    let holidays = hasHolidays ? data : [];

    return (
        <>
            <h3 className="mt-5">{t('TEXT_WORD_PUBLIC_HOLIDAYS')}</h3>
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
