import React from "react";
import {useTranslation} from "react-i18next";

/* Import configuration. */
import {ClassNames} from "../../../config/ClassNames";

/* Import classes. */
import {LocationWrapper} from "../../../classes/Api/Location/Location/LocationWrapper";

/* Add component parts. */
import CollapsibleCard from "../CollapsibleCard";
import Flag from "../Flag";

type LocationDetailProps = {
    location: LocationWrapper
}

/**
 * This is the LocationOverview part.
 */
const LocationDetail = ({location}: LocationDetailProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const classNamesRow1 = ClassNames.Row1;
    const classNamesRow2 = ClassNames.Row2;

    return (
        <CollapsibleCard title={location.getNameFull() ?? ''} collapsable={false}>
            <table
                className="table table-responsive table-last-line location-detail mb-0"
                style={{
                    borderCollapse: 'collapse',
                    backgroundColor: "transparent"
                }}
            >
                <tbody>
                {
                    location.hasDistrictLocality() ? <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DISTRICT_LOCALITY')}</td>
                        <td className={classNamesRow2.join(' ')}
                            colSpan={2}>{location.getDistrictLocality()?.getName()}</td>
                    </tr> : <></>
                }
                {
                    location.hasCityMunicipality() ? <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_CITY_MUNICIPALITY')}</td>
                        <td className={classNamesRow2.join(' ')}
                            colSpan={2}>{location.getCityMunicipality()?.getName()}</td>
                    </tr> : <></>
                }
                {
                    location.hasState() ? <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_STATE')}</td>
                        <td className={classNamesRow2.join(' ')}
                            colSpan={2}>{location.getState()?.getName()}</td>
                    </tr> : <></>
                }
                {
                    location.hasCountry() ? <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_COUNTRY')}</td>
                        <td className={classNamesRow2.join(' ')}
                            colSpan={2}>{location.getCountry()?.getName()}, <code>{location.getCountry()?.getProperties()?.getCountryCode()}</code>, <Flag
                            country={location.getCountry()?.getProperties()?.getCountryCode() ?? 'DE'} size={1}
                            title={location.getCountry()?.getProperties().getCountryCodeTranslated()}/></td>
                    </tr> : <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_COUNTRY_CODE')}</td>
                        <td className={classNamesRow2.join(' ')}
                            colSpan={2}>
                            <code>{location.getProperties().getCountryCode()}</code>, <Flag
                            country={location.getProperties().getCountryCode()} size={1}
                            title={location.getProperties().getCountryCodeTranslated()}/></td>
                    </tr>
                }
                </tbody>
            </table>
        </CollapsibleCard>
    );
}

export default LocationDetail;
