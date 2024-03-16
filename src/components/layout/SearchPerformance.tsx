import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import JSONPretty from "react-json-pretty";
import 'react-json-pretty/themes/adventure_time.css';

/* Import functions */
import {addSoftHyphens} from "../../functions/Text";

/* Import configurations */
import {colorBackgroundPerformance} from "../../config/Colors";
import {sizeIcon} from "../../config/Config";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {Activity} from "react-bootstrap-icons";
import {Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";

type Types = "calendar" | "location";

type SearchPerformanceProps = {
    properties: any,
    type: Types,
    apiPathWithParameter: string
    apiPathWithoutParameter: string
}

/**
 * This renders the search performance part.
 */
const SearchPerformance = ({
    properties,
    type,
    apiPathWithParameter,
    apiPathWithoutParameter
}: SearchPerformanceProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    let url: string|null = null;
    let name: string|null = null;

    switch (type) {
        case 'location':
            url = process.env.REACT_APP_LOCATION_API_URL !== undefined ?
                process.env.REACT_APP_LOCATION_API_URL :
                null;
            name = t('TEXT_WORD_API_DATA') + ': PHP Location API';
            break;

        default:
            url = null;
            break;
    }

    const [show, setShow] = useState(false);
    const [data, setData] = useState('');

    const apiUrl = url + apiPathWithParameter;
    const apiUrlWithoutParameter = url + apiPathWithoutParameter;

    const handleClose = () => setShow(false);
    const handleShow = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setShow(true);
        event.preventDefault();
    }

    useEffect(() => {
        const fetchDataAsync = async () => {
            if (show) {
                try {
                    const response = await fetch(apiUrl);
                    const jsonData = await response.json();
                    setData(JSON.stringify(jsonData, null, 2));
                } catch (error) {
                    console.error('Fehler beim Abrufen der API-Daten:', error);
                    setData('Fehler beim Laden der Daten.');
                }
            }
        };

        fetchDataAsync().then(r => {});
    }, [show, t, apiUrl]);

    return (
        <>
            <hr/>
            <div className="card mt-4" style={{"backgroundColor": colorBackgroundPerformance}}>
                <div className="card-header">
                    <Activity size={sizeIcon.H3} /> <strong>{t('TEXT_WORD_PERFORMANCE')}</strong>
                </div>
                <div className="card-body">
                    <small><small>
                        <strong>Query</strong>: {properties['time-taken']}, {properties['memory-taken']} - <strong>{properties['name']}</strong>:
                        Version {properties['version']}
                        <br/>
                        <strong>API</strong>:&nbsp;
                        <Link
                            to={apiUrl}
                            onClick={handleShow}
                            dangerouslySetInnerHTML={{__html: addSoftHyphens(apiUrlWithoutParameter)}}
                        />
                    </small></small>
                </div>
            </div>

            <Modal dialogClassName="custom-modal" show={show} onHide={handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="first">
                        <Link
                            to={apiUrl}
                            dangerouslySetInnerHTML={{__html: addSoftHyphens(apiUrlWithoutParameter)}}
                            target="_blank"
                            rel="noreferrer"
                        />
                    </Modal.Body>
                    <Modal.Body className="scrollable"><JSONPretty id="api-json-data" data={data}></JSONPretty></Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>{t('TEXT_WORD_CLOSE')}</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    );
}

export default SearchPerformance;
