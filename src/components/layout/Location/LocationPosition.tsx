import React from "react";
import {useTranslation} from "react-i18next";

/* Import configuration. */
import {sizeIcon} from "../../../config/Config";
import {ClassNames} from "../../../config/ClassNames";

/* Import functions. */
import {numberToRoman} from "../../../functions/Number";
import {
    classUserDegree,
    classUserDirection,
    classUserDirectionShort,
    classUserDistance, classUserPositionDms,
    updateUserPosition
} from "../../../functions/Position";

/* Import classes. */
import {LocationWrapper} from "../../../classes/Api/Location/Location/LocationWrapper";
import {Query} from "../../../classes/Query";

/* Add component parts. */
import LinkV2 from "../LinkV2";
import CollapsibleCard from "../CollapsibleCard";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {CursorFill} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

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
                                     {location.getCoordinate().getDistanceUserTextSimple(t)}&nbsp;
                                     <span
                                         className={classUserPositionDms}
                                         onClick={() => { updateUserPosition(t) }}
                                         data-latitude={location.getCoordinate().getLatitudeDecimal()}
                                         data-longitude={location.getCoordinate().getLongitudeDecimal()}
                                     >
                                         {location.getCoordinate().getDistanceUserTextCoordinate()}
                                     </span>
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
                    <td className={classNamesRow2.join(' ')} colSpan={2}>
                        <Link
                            to={query.getFilterConfig().getLinkCurrent({q: location.getCoordinate().getDMS()})}
                        >
                            {location.getCoordinate().getDMS()}
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DECIMAL')}</td>
                    <td className={classNamesRow2.join(' ')} colSpan={2}>
                        <Link
                            to={query.getFilterConfig().getLinkCurrent({q: location.getCoordinate().getDecimal()})}
                        >
                            {location.getCoordinate().getDecimal()}
                        </Link>
                    </td>
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
                                                <span
                                                    className={classUserDistance}
                                                    onClick={() => { updateUserPosition(t) }}
                                                    data-latitude={location.getCoordinate().getLatitudeDecimal()}
                                                    data-longitude={location.getCoordinate().getLongitudeDecimal()}
                                                >
                                                    {location.getCoordinate().getDistanceUserKilometerFormatted()}
                                                </span><sup>*)</sup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DIRECTION')}</td>
                                            <td className={classNamesRow2.join(' ')}
                                                title={location.getCoordinate().getDistanceUserText(t) ?? ''}
                                            >
                                                <span
                                                    className={classUserDirectionShort}
                                                    onClick={() => { updateUserPosition(t) }}
                                                    data-latitude={location.getCoordinate().getLatitudeDecimal()}
                                                    data-longitude={location.getCoordinate().getLongitudeDecimal()}
                                                >
                                                    {location.getCoordinate().getDirectionUserCode()}
                                                </span> -&nbsp;
                                                <span
                                                    className={classUserDirection}
                                                    onClick={() => { updateUserPosition(t) }}
                                                    data-latitude={location.getCoordinate().getLatitudeDecimal()}
                                                    data-longitude={location.getCoordinate().getLongitudeDecimal()}
                                                >
                                                    {location.getCoordinate().getDirectionUserCodeTranslated(t)}
                                                </span><sup>*)</sup>
                                            </td>
                                            <td className={classNamesRow3.join(' ')}
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "flex-end"
                                                }}>
                                                <div
                                                    className="compass compass-direction shadow-own">
                                                    <div
                                                        className={'arrow arrow-direction ' + classUserDegree}
                                                        onClick={() => { updateUserPosition(t) }}
                                                        data-degree={location.getCoordinate().getDirectionUserDegree()}
                                                        data-latitude={location.getCoordinate().getLatitudeDecimal()}
                                                        data-longitude={location.getCoordinate().getLongitudeDecimal()}
                                                    ></div>
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
                                    textLoader={t('TEXT_WORD_DETERMINE_CURRENT_LOCATION')}
                                    textInformation={t('TEXT_WORD_DETERMINED_CURRENT_LOCATION')}
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
