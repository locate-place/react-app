import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

/* Import configuration. */
import {ClassNames} from "../../../config/ClassNames";

/* Import functions. */
import {convertToGermanFormat} from "../../../functions/Date";
import {numberToRoman} from "../../../functions/Number";

/* Import classes. */
import {LocationWrapper} from "../../../classes/Api/Location/Location/LocationWrapper";

/* Add component parts. */
import CollapsibleCard from "../CollapsibleCard";

type LocationInformationProps = {
    location: LocationWrapper,
    number: number
}

const getTimeWithOffset = (offset: string) =>
{
    const now = new Date();
    const [hoursOffset, minutesOffset] = offset.split(':').map(Number);
    const totalOffsetMinutes = (hoursOffset * 60) + (Math.sign(hoursOffset) * minutesOffset);

    // Calculate the current time in UTC
    const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
    // Apply the offset to get the target time
    const targetTime = new Date(utcTime.getTime() + (totalOffsetMinutes * 60000));

    return targetTime.toTimeString().split(' ')[0];
}

/**
 * This is the LocationInformation part.
 */
const LocationInformation = ({location, number}: LocationInformationProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const [time, setTime] = useState<string>('');

    useEffect(() => {
        if (location.hasTimezone()) {
            const offset = location.getTimezone()?.getOffset() ?? '00:00';
            setTime(getTimeWithOffset(offset));

            const intervalId = setInterval(() => {
                setTime(getTimeWithOffset(offset));
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [location]);

    const classNamesRow1 = ClassNames.Row1;
    const classNamesRow2 = ClassNames.Row2;

    return (
        <CollapsibleCard title={numberToRoman(number) + ') ' + t('TEXT_WORD_LOCATION_INFORMATION')} collapsed={true}>
            <table
                className="table table-responsive table-last-line location-detail mb-0"
                style={{
                    borderCollapse: 'collapse',
                    backgroundColor: "transparent"
                }}
            >
                <tbody>
                <tr>
                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_MASTER_CODE')}</td>
                    <td className={classNamesRow2.join(' ')} colSpan={2}>
                        <code>{location.getFeature().getClass().getCode()}</code> - {location.getFeature().getClass().getName()}
                    </td>
                </tr>
                <tr>
                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_CODE')}</td>
                    <td className={classNamesRow2.join(' ')} colSpan={2}>
                        <code>{location.getFeature().getCode().getCode()}</code> - {location.getFeature().getCode().getName()}
                    </td>
                </tr>
                {
                    location.hasAlternateNames() && <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_OTHER_NAMES')}</td>
                        <td
                            className={classNamesRow2.join(' ')}
                            colSpan={2}
                            title={location.getTimezone()?.getCoordinate().getDMS() ?? ''}
                        >
                            <ol style={{paddingLeft: '1em', marginBottom: '0'}}>
                                {
                                    location.getAlternateNames()?.map((alternativeName, index) => {
                                        return (
                                            <li key={'alternative-name-' + index}>
                                                {alternativeName}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </td>
                    </tr>
                }
                {
                    location.hasTimezone() ?
                        <tr>
                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_TIME_ZONE')}</td>
                            <td
                                className={classNamesRow2.join(' ')}
                                colSpan={2}
                                title={location.getTimezone()?.getCoordinate().getDMS() ?? ''}
                            >{location.getTimezone()?.getTimezone()}&nbsp;
                                <code>{location.getTimezone()?.getOffset()}</code><br />
                                <span>{time}</span>
                            </td>
                        </tr> : <></>
                }
                {
                    location.getProperties().hasElevation() ? <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_ELEVATION')}</td>
                        <td className={classNamesRow2.join(' ')}
                            colSpan={2}>{location.getProperties().getElevation()?.["value-formatted"]}</td>
                    </tr> : <></>
                }
                {
                    location.getProperties().hasPopulation() ? <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_POPULATION')}</td>
                        <td className={classNamesRow2.join(' ')}
                            colSpan={2}>{location.getProperties().getPopulation()?.["value-formatted"]} {t('TEXT_WORD_INHABITANTS')}</td>
                    </tr> : <></>
                }
                <tr>
                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_GEONAME_ID')}</td>
                    <td className={classNamesRow2.join(' ')}
                        colSpan={2}>{location.getGeonameId()}</td>
                </tr>
                {
                    location.hasZipCode() && <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_ZIP_CODE')}</td>
                        <td className={classNamesRow2.join(' ')}
                            colSpan={2}>{location.getZipCode()}</td>
                    </tr>
                }
                <tr>
                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_LAST_UPDATE')}</td>
                    <td className={classNamesRow2.join(' ')}
                        colSpan={2}>{convertToGermanFormat(location.getUpdateAt())}</td>
                </tr>
                </tbody>
            </table>
        </CollapsibleCard>
    );
}

export default LocationInformation;
