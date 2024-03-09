import React from "react";
import {useTranslation} from "react-i18next";

/* Import configuration. */
import {sizeIcon} from "../../../config/Config";
import {ClassNames} from "../../../config/ClassNames";

/* Import functions. */
import {numberToRoman} from "../../../functions/Number";

/* Import classes. */
import {LocationWrapper} from "../../../classes/Api/Location/Location/LocationWrapper";
import {Query} from "../../../classes/Query";

/* Add component parts. */
import LinkV2 from "../LinkV2";
import CollapsibleCard from "../CollapsibleCard";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {CursorFill} from "react-bootstrap-icons";

type LocationPositionProps = {
    location: LocationWrapper,
    query: Query,
    number: number
}

/**
 * This is the LocationPosition part.
 */
const LocationPosition = ({location, query, number}: LocationPositionProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const classNamesRow1 = ClassNames.Row1;
    const classNamesRow2 = ClassNames.Row2;
    const classNamesRow3 = ClassNames.Row3;

    return (
        <CollapsibleCard title={numberToRoman(number) + ') ' + t('TEXT_WORD_POSITION_LOCATION')} collapsed={true}
                         footer={
                             location.getCoordinate().getDistanceUserKilometerValue() >= 0 ?
                                 <>
                                     <sup>*)</sup>&nbsp;
                                     {location.getCoordinate().getDistanceUserText(t)}
                                 </> :
                                 null
                         }>
            <table
                className="table table-responsive table-last-line location-detail mb-0"
                style={{
                    borderCollapse: 'collapse',
                    backgroundColor: "transparent"
                }}
            >
                <tbody>
                <tr>
                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DMS')}</td>
                    <td className={classNamesRow2.join(' ')}
                        colSpan={2}>{location.getCoordinate().getDMS()}</td>
                </tr>
                <tr>
                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DECIMAL')}</td>
                    <td className={classNamesRow2.join(' ')}
                        colSpan={2}>{location.getCoordinate().getDecimal()}</td>
                </tr>
                {
                    location.getCoordinate().hasDistanceUser() ?
                        <>
                            {
                                location.getCoordinate().getDistanceUserKilometerValue() > 0 ?
                                    <>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DISTANCE')}</td>
                                            <td className={classNamesRow2.join(' ')}
                                                colSpan={2}
                                                title={location.getCoordinate().getDistanceUserText(t) ?? ''}>
                                                {location.getCoordinate().getDistanceUserKilometerFormatted()}<sup>*)</sup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DIRECTION')}</td>
                                            <td className={classNamesRow2.join(' ')}
                                                title={location.getCoordinate().getDistanceUserText(t) ?? ''}
                                            >
                                                {location.getCoordinate().getDirectionUserCode()} - {location.getCoordinate().getDirectionUserCodeTranslated(t)}<sup>*)</sup>
                                            </td>
                                            <td className={classNamesRow3.join(' ')}
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "flex-end"
                                                }}>
                                                <div
                                                    className="compass compass-direction shadow-own">
                                                    <div className="arrow arrow-direction"
                                                         data-degree={location.getCoordinate().getDirectionUserDegree()}></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </> :
                                    <>
                                    </>
                            }
                        </>
                        :
                        <tr>
                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DISTANCE')}</td>
                            <td className={classNamesRow2.join(' ')}
                                title={location.getCoordinate().getDistanceUserText(t) ?? ''}
                            >
                                {t('TEXT_LOCATION_CURRENT_POSITION_UNKNOWN')}
                            </td>
                            <td className={classNamesRow2.join(' ')}
                                title={location.getCoordinate().getDistanceUserText(t) ?? ''}
                                style={{textAlign: 'right'}}>
                                <LinkV2
                                    to={query.getFilterConfig().getLinkCurrent()}
                                    useCurrentPosition={true}
                                    className="btn btn-outline-primary shadow-own mt-2 mb-2 button-own-position button-minimized"
                                    title={t('TEXT_LOCATION_DETERMINE_CURRENT_POSITION')}
                                >
                                    <CursorFill size={sizeIcon.H3}/>
                                </LinkV2>
                            </td>
                        </tr>
                }
                </tbody>
            </table>
        </CollapsibleCard>
    );
}

export default LocationPosition;
