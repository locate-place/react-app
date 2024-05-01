import React, {useMemo} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

/* Add font awesome icons */
import {faMapLocation, faMaximize} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/* Import configuration. */
import {mapTypeGoogle, mapTypeOpenStreetMap} from "../../config/MapTypes";

/* Import functions */
import {convertToGermanFormat} from "../../functions/Date";
import {getLocationAirportCodeJsxText, getLocationJsxText} from "../../functions/LocationTexts";

/* Add translations */
import {translateCountryCode} from "../../translations/Country";

/* Add component parts */
import CoordinateDistanceDirection from "./CoordinateDistanceDirection";

/* Import classes. */
import {Query} from "../../classes/Query";
import {LocationWrapper} from "../../classes/Api/Location/Location/LocationWrapper";
import {ApiResponseProperty} from "../../classes/Api/ApiResponseProperty";

/* Import configuration. */
import Flag from "./Flag";
import LinkV2 from "./LinkV2";
import CollapsibleCard from "./CollapsibleCard";
import {classUserPositionDms, updateUserPosition} from "../../functions/Position";

type LocationCardProps = {
    locationWrapper: LocationWrapper|null,
    apiResponseProperty: ApiResponseProperty,
    showOwnPosition: boolean,
    page?: number,
    useAlwaysName?: boolean
}

/**
 * This is the example part.
 *
 * - ownPosition - Use own position instead of the one from the given location.
 */
const LocationCard = ({locationWrapper, apiResponseProperty, showOwnPosition, page, useAlwaysName = false}: LocationCardProps) =>
{
    /* true - use geoname id as query; false - use coordinate as query */
    let useGeonameIdAsQuery = true;

    /* Import translation. */
    const { t } = useTranslation();

    /* API types */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    /* Gets the Query class to have access to the filter config. */
    let query = new Query(searchParams, env);
    let filterConfig = query.getFilterConfig();

    /* No location wrapper given. */
    if (locationWrapper === null) {
        return <></>;
    }

    /* Use own position or from the given location. */
    let ownPositionCard = showOwnPosition ?
        (apiResponseProperty.getGiven()?.getCoordinate()?.getParsed() ?? null) :
        null;

    let latitudeDms = showOwnPosition ?
        (ownPositionCard?.getLatitude().getDMS() ?? null) :
        locationWrapper.getCoordinate().getLatitude().getDMS();
    let longitudeDms = showOwnPosition ?
        (ownPositionCard?.getLongitude().getDMS() ?? null) :
        locationWrapper.getCoordinate().getLongitude().getDMS();

    let latitudeDecimal = showOwnPosition ?
        (ownPositionCard?.getLatitude().getDecimal() ?? null) :
        locationWrapper.getCoordinate().getLatitude().getDecimal();
    let longitudeDecimal = showOwnPosition ?
        (ownPositionCard?.getLongitude().getDecimal() ?? null) :
        locationWrapper.getCoordinate().getLongitude().getDecimal();

    let linkGoogleMaps = showOwnPosition ?
        (ownPositionCard?.getLinks().getGoogle() ?? null) :
        locationWrapper.getLinks().getMaps(mapTypeGoogle);
    let linkOpenStreetMaps = showOwnPosition ?
        (ownPositionCard?.getLinks().getOpenStreetMap() ?? null) :
        locationWrapper.getLinks().getMaps(mapTypeOpenStreetMap);

    let locationText = getLocationJsxText(locationWrapper, t);
    let airportText = getLocationAirportCodeJsxText(locationWrapper, t);

    let queryString = useGeonameIdAsQuery ?
        locationWrapper.getGeonameId() :
        locationWrapper.getCoordinate().getDecimal();

    let name = useAlwaysName ?
        locationWrapper.getName() :
        (locationWrapper.getNameFull() || locationWrapper.getName());

    let wikipediaLink = locationWrapper.getLinks().getWikipedia();

    return (
        <>
            <CollapsibleCard collapsed={true} title={
                <>
                    <Flag
                        country={locationWrapper.getProperties().getCountryCode()}
                        size={1.5}
                    /> &nbsp;
                    {
                        showOwnPosition ?
                            <span>
                                <span className="fw-bold">{name}, <small>{translateCountryCode(locationWrapper.getProperties().getCountryCode())}</small></span>
                            </span> :
                            <LinkV2
                                to={filterConfig.getLinkLocationQuery(queryString.toString())}
                            >
                                <span>
                                    <span className="fw-bold">{name}, <small>{translateCountryCode(locationWrapper.getProperties().getCountryCode())}</small></span>{page !== undefined ? <sup>&nbsp;(#{page})</sup> : null}
                                </span>
                            </LinkV2>
                    }
                    {
                        locationWrapper.getProperties().showAirportCode(locationWrapper) ?
                            <>{airportText}</> :
                            <></>
                    }
                </>
            } footerInformation={
                <>
                    <strong>
                        {locationWrapper.getNameFull() ? locationWrapper.getNameFull() : locationWrapper.getName()}
                    </strong>
                    {locationText}
                    <br/>
                    <span>
                        <strong>{locationWrapper.getFeature().getCode().getName()}</strong>: {locationWrapper.getFeature().getClass().getName()} - <code>{locationWrapper.getFeature().getClass().getCode() + '::' + locationWrapper.getFeature().getCode().getCode()}</code>
                    </span>
                    <br/>
                    <span>
                        <strong>{t('TEXT_WORD_LAST_UPDATE')}</strong>: {convertToGermanFormat(locationWrapper.getUpdateAt())}
                    </span>
                </>
            } footerInformationAdditional={
                showOwnPosition ?
                    <>
                        <strong>{t('TEXT_WORD_POSITION')}</strong>: <span
                            className={classUserPositionDms}
                            onClick={() => { updateUserPosition(t) }}
                            data-latitude={latitudeDecimal?.toString()}
                            data-longitude={longitudeDecimal?.toString()}
                        >{latitudeDms}, {longitudeDms}</span>
                    </> :
                    <CoordinateDistanceDirection location={locationWrapper.get()} query={query} />
            }>
                <div className="container p-3 pb-0">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <h4>{t('TEXT_HEADER_INFORMATION')}</h4>
                            <p className="m-0">
                                <Link
                                    to={filterConfig.getLinkLocationQuery(queryString.toString())}
                                ><span><FontAwesomeIcon
                                    icon={faMaximize}
                                    style={{'color': 'rgb(114, 135, 42)'}}
                                /> {name}</span></Link>{
                                wikipediaLink ?
                                    <>,<br/><Link
                                        to={wikipediaLink}
                                        target={'_blank'}
                                        rel="noreferrer"
                                    ><span><FontAwesomeIcon
                                        icon={faMaximize}
                                        style={{'color': 'rgb(114, 135, 42)'}}
                                    /> Wikipedia</span></Link>
                                    </> :
                                    null
                            }
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <h4>{t('TEXT_HEADER_NEXT_PLACES')}</h4>
                            <p className="m-0">
                                {locationWrapper.getNextPlacesConfig().getConfigKeysNextPlaces().map((key, index) => {
                                    return (
                                        <span key={'next-place-' + key}>
                                                {index !== 0 ? ', ' : ''}
                                            <Link
                                                key={'next-place-' + key}
                                                to={filterConfig.getLinkNextListPlacesByNextPlacesConfig(locationWrapper, key, true)}
                                            >{t('TEXT_LOCATION_CARD_' + key.toUpperCase())}</Link>
                                            </span>
                                    );
                                })}
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <h4>{t('TEXT_HEADER_MAPS')}</h4>
                            <p className="m-0">
                                {
                                    linkGoogleMaps ?
                                        <Link
                                            to={linkGoogleMaps}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                                <span className="text-nowrap">
                                                    <FontAwesomeIcon icon={faMapLocation}
                                                                     style={{'color': 'rgb(23, 34, 52)'}}/> Google Maps
                                                </span>
                                        </Link> : <></>
                                },<br/>
                                {
                                    linkOpenStreetMaps ?
                                        <Link
                                            to={linkOpenStreetMaps}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                                <span className="text-nowrap">
                                                    <FontAwesomeIcon icon={faMapLocation}
                                                                     style={{'color': 'rgb(23, 34, 52)'}}/> OpenStreetMap
                                                </span>
                                        </Link> : <></>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </CollapsibleCard>
        </>
    )
}

export default LocationCard;
