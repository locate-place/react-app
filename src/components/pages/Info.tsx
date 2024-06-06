import React from "react";
import {useTranslation} from "react-i18next";

/* Add component parts */
import Header from "../layout/Header";
import {Link} from "react-router-dom";

/**
 * This is the app info page.
 */
const Info = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    return (
        <>
            <Header title={t('TEXT_HOME_TITLE')} subtitle={t('TEXT_HOME_SUBTITLE')} />
            <div className="home container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    {/* One column */}
                    <div className="col-12">
                        <h1>{t('TEXT_HOME_TITLE')}</h1>
                        <p>Willkommen bei locate.place – Ihrem vielseitigen Assistenten für Ortsinformationen!</p>

                        <p>
                            Ob Sie detaillierte Infos zu einem bestimmten Ort suchen oder mehr über Ihre aktuelle Umgebung
                            erfahren möchten, <Link to={'/locations.html'}>locate.place</Link> ist zur Stelle. Mit nur wenigen Klicks erhalten Sie umfangreiche
                            Daten zu fast jedem Ort weltweit.
                        </p>

                        <p>Was wir Ihnen bieten:</p>

                        <ul>
                            <li><strong>Einwohnerzahlen</strong>: Neugierig, wie viele Menschen in einer Stadt oder einem Stadtteil leben? Wir liefern die aktuellsten Statistiken.</li>
                            <li><strong>Berginformationen</strong>: Begeistert von Bergen? Erfahren Sie mehr über Höhe und interessante Fakten zu Bergen weltweit.</li>
                            <li><strong>Flugplatzdaten</strong>: Planen Sie eine Reise und benötigen Infos zu Flugplätzen? Wir bieten Ihnen Daten zu Lage, Codes und mehr.</li>
                            <li><strong>Wikipedia-Links</strong>: Für tiefergehende Informationen verweisen wir direkt auf die entsprechenden Wikipedia-Seiten.</li>
                            <li><strong>Postleitzahlen (PLZ)</strong>: Suchen Sie die PLZ eines bestimmten Ortes? Wir haben die Antwort.</li>
                            <li><strong>Verwaltungsinformationen</strong>: Von Bundesland und Land bis hin zu Stadt und Stadtteil – entdecken Sie umfassende Infos zu jeder geografischen Einheit.</li>
                        </ul>

                        <p>
                            Unser Ziel ist es, Ihnen schnellen und einfachen Zugang zu den Informationen zu bieten, die Sie brauchen. Ob Sie unterwegs wandern, in der Stadt unterwegs sind oder einfach neugierig sind – <Link to={'/locations.html'}>locate.place</Link> ist Ihr zuverlässiger Partner.
                        </p>

                        <p>
                            Die Nutzung ist kinderleicht: Geben Sie einfach den Namen des gesuchten Ortes in unsere Suchleiste ein oder nutzen Sie die Standorterkennung, um Infos zu Ihrer Umgebung zu erhalten. In Sekunden präsentieren wir Ihnen eine umfassende Liste von Daten, die Ihnen helfen, den Ort besser zu verstehen.
                        </p>

                        <p>
                            Starten Sie jetzt Ihre Entdeckungsreise mit <Link to={'/locations.html'}>locate.place</Link> und entdecken Sie die Welt um sich herum auf eine ganz neue Weise!
                        </p>

                        <h2>{t('TEXT_HOME_H2')}</h2>
                        <p>Starte nachfolgend mit der Suche der <Link to={'/locations.html'}>Lokalisierung</Link>.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;
