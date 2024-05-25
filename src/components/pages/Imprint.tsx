import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";

/* Import component parts */
import HeaderSmall from "../layout/HeaderSmall";
import {Link, useSearchParams} from "react-router-dom";
import {Query} from "../../classes/Query";
import i18n from "i18next";
import {languageDE} from "../../config/Language";

/**
 * This is the impress page.
 */
const Imprint = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* API types */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    let query = new Query(searchParams, env);

    let filterConfig = query.getFilterConfig();

    const language = i18n.language;

    return (
        <>
            <HeaderSmall title={t('TEXT_IMPRINT_TITLE')} subtitle={t('TEXT_IMPRINT_SUBTITLE')} />
            <div className="container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                        <h2>{t('TEXT_IMPRINT_TITLE')}</h2>
                        {
                            language !== languageDE && <p>
                                {t('TEXT_IMPRINT_LANGUAGE_HINT')}
                            </p>
                        }

                        <h3>Angaben gemäß § 5 TMG</h3>

                        <h4>Name und Anschrift des Anbieters</h4>
                        <p>
                            Björn Hempel<br/>
                            Königstr. 3<br/>
                            01097 Dresden<br/>
                            Deutschland
                        </p>

                        <h4>Kontakt</h4>
                        <p>
                            Telefon: +49 151 700 70 70 6<br/>
                            E-Mail: bjoern@hempel.li
                        </p>

                        <h4>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
                        <p>
                            Björn Hempel<br/>
                            Königstr. 3<br/>
                            01097 Dresden<br/>
                            Deutschland
                        </p>

                        <h4>Haftungsausschluss</h4>
                        <h5>Haftung für Inhalte</h5>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                            nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                        <p>
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>
                        <h5>Haftung für Links</h5>
                        <p>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                            haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                            Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                            erkennbar.
                        </p>
                        <p>
                            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                            werden wir derartige Links umgehend entfernen.
                        </p>

                        <h4>Urheberrecht</h4>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                            jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                            nicht kommerziellen Gebrauch gestattet.
                        </p>
                        <p>
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                            Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                            umgehend entfernen.
                        </p>

                        <h4>Datenschutzerklärung</h4>
                        <p>
                            Informationen zum Datenschutz findest du in unserer <Link to={filterConfig.getLinkTo('/data-privacy.html')}>Datenschutzerklärung</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Imprint;
