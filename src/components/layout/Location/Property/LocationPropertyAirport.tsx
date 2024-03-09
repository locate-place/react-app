import React from "react";
import {useTranslation} from "react-i18next";

/* Import configuration. */
import {ClassNames} from "../../../../config/ClassNames";

/* Import functions. */
import {numberToRoman} from "../../../../functions/Number";

/* Import classes. */
import {LocationWrapper} from "../../../../classes/Api/Location/Location/LocationWrapper";

/* Add component parts. */
import CollapsibleCard from "../../CollapsibleCard";
import {formatNumber} from "../../../../functions/I18n";
import {addSoftHyphens, ucFirst} from "../../../../functions/Text";
import {convertToGermanFormatFromDate} from "../../../../functions/Date";

type LocationInformationProps = {
    location: LocationWrapper,
    number: number
}

/**
 * This is the LocationPropertyAirport part.
 */
const LocationPropertyAirport = ({location, number}: LocationInformationProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const classNamesRow1 = ClassNames.Row1;
    const classNamesRow2 = ClassNames.Row2;

    const hasPerYear = location.getProperties().getAirport()?.hasPassengers() || location.getProperties().getAirport()?.hasMovements() || location.getProperties().getAirport()?.hasPassengers() || location.getProperties().getAirport()?.hasCargo();

    const numberStatisticNumber = 1;
    const numberPerYear = 2;

    return (
        <CollapsibleCard title={numberToRoman(number) + ') ' + t('TEXT_WORD_AIRPORT')}
            footer={<>
                {
                    <>
                        {
                            location.getProperties().getAirport()?.hasStatisticYear() ? <>
                                {
                                    <>
                                        <sup>{numberStatisticNumber})</sup>&nbsp;
                                        <strong>{t('TEXT_WORD_STATISTIC_YEAR')}</strong>:
                                        {location.getProperties().getAirport()?.getStatisticYear()}
                                    </>
                                }
                            </> : <></>
                        }
                        {
                            hasPerYear ? <>
                                <br/><sup>{numberPerYear})</sup>&nbsp;{t('TEXT_WORD_PER_YEAR')}
                            </> : <></>
                        }
                    </>
                }
            </>}
            collapsed={true}
        >
            <table
                className="table table-responsive table-last-line location-detail mb-0"
                style={{
                    borderCollapse: 'collapse',
                    backgroundColor: "transparent"
                }}
            >
                <tbody>
                {
                    location.getProperties().getAirport()?.hasIata() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_LOCATION_AIRPORT_IATA')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}>{location.getProperties().getAirport()?.getIata()}</td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasIcao() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_LOCATION_AIRPORT_ICAO')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}>{location.getProperties().getAirport()?.getIcao()}</td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasWmo() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_LOCATION_AIRPORT_WMO')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}>{location.getProperties().getAirport()?.getWmo()}</td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasPassengers() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_LOCATION_AIRPORT_PASSENGERS')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}>
                                    {formatNumber(location.getProperties().getAirport()?.getPassengers() ?? 0)}
                                    {
                                        location.getProperties().getAirport()?.hasStatisticYear() ?
                                            <>
                                                <sup>{numberStatisticNumber})</sup>
                                                &nbsp;
                                                <sup>{numberPerYear})</sup>
                                            </> : <></>
                                    }
                                </td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasMovements() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_LOCATION_AIRPORT_MOVEMENTS')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}>
                                    {formatNumber(location.getProperties().getAirport()?.getMovements() ?? 0)}
                                    {
                                        location.getProperties().getAirport()?.hasStatisticYear() ?
                                            <>
                                                <sup>{numberStatisticNumber})</sup>
                                                &nbsp;
                                                <sup>{numberPerYear})</sup>
                                            </> : <></>
                                    }
                                </td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasCargo() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_LOCATION_AIRPORT_CARGO')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}>
                                    {formatNumber(location.getProperties().getAirport()?.getCargo() ?? 0)} t
                                    {
                                        location.getProperties().getAirport()?.hasStatisticYear() ?
                                            <>
                                                <sup>{numberStatisticNumber})</sup>
                                                &nbsp;
                                                <sup>{numberPerYear})</sup>
                                            </> : <></>
                                    }
                                </td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasWebsite() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_WORD_WEBSITE')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}><a
                                    href={location.getProperties().getAirport()?.getWebsite() ?? ''}
                                    target={'_blank'} rel="noreferrer"
                                    dangerouslySetInnerHTML={{__html: addSoftHyphens(decodeURI(location.getProperties().getAirport()?.getWebsite() ?? ''))}}/></td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasOperator() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_LOCATION_AIRPORT_OPERATOR')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}>{location.getProperties().getAirport()?.getOperator()}</td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasOpened() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_WORD_OPENED')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}>{convertToGermanFormatFromDate(location.getProperties().getAirport()?.getOpened() ?? null)}</td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasType() ? <>
                        {
                            <tr>
                                <td className={classNamesRow1.join(' ')}>{t('TEXT_LOCATION_AIRPORT_TYPE')}</td>
                                <td className={classNamesRow2.join(' ')} colSpan={2}>{ucFirst(location.getProperties().getAirport()?.getType() ?? '')}</td>
                            </tr>
                        }
                    </> : <></>
                }
                {
                    location.getProperties().getAirport()?.hasRunways() ? <>
                        {
                            (location?.getProperties().getAirport()?.getRunways() as string[]).map((runway: string, index: number) =>
                                <tr key={'airport-runway-' + index}>
                                    <td className={classNamesRow1.join(' ')}>{t('TEXT_LOCATION_AIRPORT_RUNWAY')} {index + 1}</td>
                                    <td className={classNamesRow2.join(' ')} colSpan={2}>{runway}
                                    </td>
                                </tr>
                            )
                        }
                    </> : <></>
                }
                </tbody>
            </table>
        </CollapsibleCard>
    );
}

export default LocationPropertyAirport;
