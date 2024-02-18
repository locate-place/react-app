import React from "react";
import {useTranslation} from "react-i18next";

/* Import functions */
import {convertToGermanFormatFromDate} from "../../functions/Date";

/* Import types */
import {TypeBirthdays} from "../../types/Types";

type HolidaysProps = {
    data: TypeBirthdays|undefined
}

/**
 * This is the birthday part.
 */
const Birthdays = ({data}: HolidaysProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    if (data === undefined || Object.keys(data).length <= 0) {
        return <></>
    }

    return (
        <>
            <h3 className="mt-5">{t('TEXT_WORD_BIRTHDAYS')}</h3>
            <ul className="list-group list-group-numbered">
                {Object.entries(data).map(([date, birthdays]) => (
                    <li key={'birthday-' + date}
                        className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{convertToGermanFormatFromDate(date)}</div>
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
