import React from "react";
import {useTranslation} from "react-i18next";

/* Add component parts */
import Header from "../layout/Header";
import {Link} from "react-router-dom";

/**
 * This is the app home page.
 */
const Home = () =>
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
                        <p>Willkommen bei locate.place - Ihr umfassender Assistent für Ortsinformationen!</p>

                        <p>
                            Egal, ob Sie auf der Suche nach detaillierten Informationen zu einem bestimmten Ort sind oder einfach nur mehr über Ihre aktuelle Umgebung erfahren möchten,&nbsp;
                            <Link to={'/locations.html'}>locate.place</Link> ist hier, um Ihnen zu helfen. Mit nur wenigen Klicks erhalten Sie Zugang zu einer Vielzahl von Daten zu nahezu jedem Ort auf der Welt.
                        </p>

                        <p>Unser Dienst bietet Ihnen:</p>

                        <ul>
                            <li><strong>Einwohnerzahlen</strong>: Möchten Sie wissen, wie viele Menschen in einer Stadt oder einem Stadtteil leben? Wir liefern Ihnen die aktuellsten Einwohnerstatistiken.</li>
                            <li><strong>Berginformationen</strong>: Fasziniert von Bergen? Erfahren Sie mehr über die Höhe und andere interessante Fakten von Bergen weltweit.</li>
                            <li><strong>Flugplatzdaten</strong>: Planen Sie eine Reise und benötigen Informationen zu Flugplätzen? Wir bieten Ihnen Daten zu Lage, Codes und mehr.</li>
                            <li><strong>Wikipedia-Links</strong>: Für tiefergehende Informationen verweisen wir direkt auf die entsprechenden Wikipedia-Seiten.</li>
                            <li><strong>Postleitzahlen (PLZ)</strong>: Benötigen Sie die PLZ eines bestimmten Ortes? Wir haben sie für Sie.</li>
                            <li><strong>Bundesland, Land, Stadt, Stadtteil</strong>: Von der größten Verwaltungseinheit bis zum kleinsten Stadtteil - entdecken Sie umfassende Informationen zu jeder geografischen Einheit.</li>
                        </ul>

                        <p>
                            Unser Ziel ist es, Ihnen einen einfachen und schnellen Zugang zu den Informationen zu bieten, die Sie benötigen. Egal, ob Sie einen Umzug planen, eine Reise vorbereiten oder einfach nur aus Neugier mehr über einen Ort erfahren möchten, locate.place ist Ihr zuverlässiger Partner.
                        </p>

                        <p>
                            Die Nutzung von locate.place ist denkbar einfach. Geben Sie einfach den Namen des gesuchten Ortes in unsere Suchleiste ein oder nutzen Sie unsere Funktion zur Erkennung des aktuellen Standorts, um Informationen zu Ihrer unmittelbaren Umgebung zu erhalten. Innerhalb von Sekunden präsentieren wir Ihnen eine umfassende Liste von Daten, die Ihnen helfen, den gesuchten Ort besser zu verstehen.
                        </p>

                        <p>
                            Starten Sie jetzt Ihre Entdeckungsreise mit <Link to={'/locations.html'}>locate.place</Link> und entdecken Sie die Welt um sich herum auf eine völlig neue Weise!
                        </p>

                        <h2>{t('TEXT_HOME_H2')}</h2>
                        <p>Starte nachfolgend mit der Suche der <Link to={'/locations.html'}>Lokalisierung</Link>.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
