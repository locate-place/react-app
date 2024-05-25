import React from "react";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

/* Import component parts */
import HeaderSmall from "../layout/HeaderSmall";

/* Include configurations. */
import {languageDE} from "../../config/Language";

/**
 * This is the data privacy page.
 */
const DataPrivacy = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const language = i18n.language;

    return (
        <>
            <HeaderSmall title={t('TEXT_DATA_PRIVACY_TITLE')} subtitle={t('TEXT_DATA_PRIVACY_SUBTITLE')} />
            <div className="container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                        <h2>{t('TEXT_DATA_PRIVACY_TITLE')}</h2>
                        {
                            language !== languageDE && <p>
                                {t('TEXT_DATA_PRIVACY_LANGUAGE_HINT')}
                            </p>
                        }

                        <h3>1. Verantwortliche Stelle</h3>
                        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                        <p>
                            Björn Hempel<br/>
                            Königstr. 3<br/>
                            01097 Dresden<br/>
                            Deutschland<br />
                            Telefon: +49 151 700 70 70 6<br/>
                            E-Mail: bjoern@hempel.li
                        </p>

                        <h3>2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h3>

                        <h4>a) Beim Besuch der Website</h4>
                        <p>
                            Beim Aufrufen unserer Website locate.place sowie loc8.place werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                        </p>
                        <ul>
                            <li>IP-Adresse des anfragenden Rechners,</li>
                            <li>Datum und Uhrzeit des Zugriffs,</li>
                            <li>Name und URL der abgerufenen Datei,</li>
                            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>
                            <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li>
                        </ul>
                        <p>
                            Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
                        </p>
                        <ul>
                            <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li>
                            <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
                            <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                            <li>zu weiteren administrativen Zwecken.</li>
                        </ul>

                        <h4>b) Bei Nutzung unseres Kontaktformulars</h4>
                        <p>
                            Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website
                            bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen
                            E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese
                            beantworten zu können. Weitere Angaben können freiwillig getätigt werden. Die Datenverarbeitung
                            zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf
                            Grundlage Ihrer freiwillig erteilten Einwilligung.
                        </p>

                        <h3>3. Weitergabe von Daten</h3>
                        <p>
                            Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden
                            aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte
                            weiter, wenn:
                        </p>
                        <ul>
                            <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,</li>
                            <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,</li>
                            <li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</li>
                            <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li>
                        </ul>

                        <h3>4. Cookies</h3>
                        <p>
                            Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien,
                            die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet,
                            Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf
                            Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige
                            Schadsoftware.
                        </p>

                        <h3>5. Betroffenenrechte</h3>
                        <p>Sie haben das Recht:</p>
                        <ul>
                            <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
                            <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</li>
                            <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</li>
                            <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                            <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.</li>
                            <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen.</li>
                            <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
                        </ul>

                        <h3>6. Datensicherheit</h3>
                        <p>
                            Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket
                            Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser
                            unterstützt wird.
                        </p>

                        <h3>7. Aktualität und Änderung dieser Datenschutzerklärung</h3>
                        <p>
                            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2024. Durch die
                            Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter
                            gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese
                            Datenschutzerklärung zu ändern.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataPrivacy;
