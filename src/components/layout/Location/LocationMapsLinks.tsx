import React from "react";
import {useTranslation} from "react-i18next";

/* Import configuration. */
import {ClassNames} from "../../../config/ClassNames";

/* Import functions. */
import {numberToRoman} from "../../../functions/Number";

/* Import classes. */
import {LocationWrapper} from "../../../classes/Api/Location/Location/LocationWrapper";

/* Add component parts. */
import CollapsibleCard from "../CollapsibleCard";
import {addSoftHyphens} from "../../../functions/Text";

type LocationMapsLinksProps = {
    location: LocationWrapper,
    number: number
}

/**
 * This is the LocationMapsLinks part.
 */
const LocationMapsLinks = ({location, number}: LocationMapsLinksProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const classNamesRow1 = ClassNames.Row1;
    const classNamesRow2 = ClassNames.Row2;

    return (
        <CollapsibleCard title={numberToRoman(number) + ') ' + t('TEXT_WORD_LINK_ADDRESSES_MAPS')} collapsed={true}>
            <table
                className="table table-responsive table-last-line location-detail mb-0"
                style={{
                    borderCollapse: 'collapse',
                    backgroundColor: "transparent"
                }}
            >
                <tbody>
                <tr>
                    <td className={classNamesRow1.join(' ')} dangerouslySetInnerHTML={{__html: t('TEXT_CAPTION_GOOGLE_MAPS')}} />
                    <td className={classNamesRow2.join(' ')} colSpan={2}><a
                        href={location.getLinks().getMaps('google') ?? ''} target={'_blank'}
                        rel="noreferrer"
                        dangerouslySetInnerHTML={{__html: addSoftHyphens(location.getLinks().getMaps('google') ?? '')}} />
                    </td>
                </tr>
                <tr>
                    <td className={classNamesRow1.join(' ')} dangerouslySetInnerHTML={{__html: addSoftHyphens(t('TEXT_CAPTION_OPEN_STREET_MAP'))}} />
                    <td className={classNamesRow2.join(' ')} colSpan={2}><a
                        href={location.getLinks().getMaps('openstreetmap') ?? ''}
                        target={'_blank'}
                        rel="noreferrer"
                        dangerouslySetInnerHTML={{__html: addSoftHyphens(location.getLinks().getMaps('openstreetmap') ?? '')}}/>
                    </td>
                </tr>
                {
                    location.getLinks().hasWikipedia() ? <tr>
                        <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_WIKIPEDIA')}</td>
                        <td className={classNamesRow2.join(' ')} colSpan={2}><a
                            href={location.getLinks().getWikipedia() ?? ''}
                            target={'_blank'} rel="noreferrer"
                            dangerouslySetInnerHTML={{__html: addSoftHyphens(decodeURI(location.getLinks().getWikipedia() ?? ''))}}/>
                        </td>
                    </tr> : <></>
                }
                {
                    location.getLinks().hasOther() ? <>
                        {
                            (location.getLinks().getOther() as string[]).map((link: string) =>
                                <tr>
                                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_OTHER_LINK')}</td>
                                    <td className={classNamesRow2.join(' ')} colSpan={2}><a
                                        href={link}
                                        target={'_blank'} rel="noreferrer"
                                        dangerouslySetInnerHTML={{__html: addSoftHyphens(decodeURI(link))}}/>
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

export default LocationMapsLinks;
