import React, {createContext, useContext, ReactNode, useState, useEffect, useRef} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import {Button} from "react-bootstrap";

/* Import types. */
import {CallableString} from "../../types/Types";
import {Link} from "react-router-dom";
import {Query} from "../../classes/Query";
import {
    searchTypeCoordinate,
    searchTypeCoordinateDecimal,
    searchTypeCoordinateDms,
    searchTypeEmpty
} from "../../config/SearchType";

interface LoaderContextType {
    showLoader: (
        messageLoader: string,
        messageInformation?: CallableString|string|null,
        messageInformationAdditional?: CallableString|string|null
    ) => void,
    hideLoader: (
        messageInformation?: CallableString|string|null,
        messageInformationAdditional?: CallableString|string|null,
        queryString?: string|null,
        queryType?: string|null,
        positionString?: string|null,
        query?: Query|null
    ) => void,
    showInformation: (
        messageInformation: string
    ) => void,
    hideInformation: () => void,
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

/**
 * Provides the showLoader and hideLoader functions via:
 *
 * const { showLoader, hideLoader } = useLoader();
 */
export const useLoader = () =>
{
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
};

interface LoaderProviderProps {
    children: ReactNode;
}

/**
 * This is the LoaderProvider component. This initializes the loader context and integrates the required components.
 *
 * @param children
 * @constructor
 */
export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) =>
{
    const waitGapStart = 500;
    const waitGapClose = 1000;

    const { t } = useTranslation();

    const [isShowLoader, setIsShowLoader] = useState<boolean>(false);
    const [messageLoader, setMessageLoader] = useState<string>(t('TEXT_WORD_LOAD'));

    const [isShowInformation, setIsShowInformation] = useState<boolean>(false);
    const [messageInformation, setMessageInformation] = useState<string|null>(null);
    const [messageInformationAdditional, setMessageInformationAdditional] = useState<string|null>(null);
    const [queryString, setQueryString] = useState<string|null>(null);
    const [queryType, setQueryType] = useState<string|null>(null);
    const [positionString, setPositionString] = useState<string|null>(null);
    const [query, setQuery] = useState<Query|null>(null);

    const messageInformationRef = useRef<CallableString|string|null>(null);
    const messageInformationAdditionalRef = useRef<CallableString|string|null>(null);
    const queryStringRef = useRef<string|null>(null);
    const queryTypeRef = useRef<string|null>(null);
    const positionStringRef = useRef<string|null>(null);
    const queryRef = useRef<Query|null>(null);

    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    /**
     * Shows the loader.
     *
     * @param messageLoader
     * @param messageInformation
     * @param messageInformationAdditional
     */
    const showLoader = (
        messageLoader: string,
        messageInformation: CallableString|string|null = null,
        messageInformationAdditional: CallableString|string|null = null
    ) =>
    {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        setMessageLoader(messageLoader);
        messageInformationRef.current = messageInformation;
        messageInformationAdditionalRef.current = messageInformationAdditional;

        const id = setTimeout(() => setIsShowLoader(true), waitGapStart);

        setTimeoutId(id);
    };

    /**
     * Hides the loader.
     */
    const hideLoader = (
        messageInformation: CallableString|string|null = null,
        messageInformationAdditional: CallableString|string|null = null,
        queryString: string|null = null,
        queryType: string|null = null,
        positionString: string|null = null,
        query: Query|null = null
    ) =>
    {
        if (messageInformation !== null) {
            messageInformationRef.current = messageInformation;
        }
        if (messageInformationAdditional !== null) {
            messageInformationAdditionalRef.current = messageInformationAdditional;
        }
        if (queryString !== null) {
            queryStringRef.current = queryString;
        }
        if (queryType !== null) {
            queryTypeRef.current = queryType;
        }
        if (positionString !== null) {
            positionStringRef.current = positionString;
        }
        if (query !== null) {
            queryRef.current = query;
        }

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const id = setTimeout(() =>
        {
            setIsShowLoader(false);
            setTimeoutId(null);

            if (messageInformationRef.current !== null) {
                setIsShowInformation(true);
            }
        }, isShowLoader ? waitGapClose : 0);

        if (isShowLoader) {
            setTimeoutId(id);
        }
    };

    /**
     * Shows the information message.
     *
     * @param messageInformation
     * @param messageInformationAdditional
     */
    const showInformation = (messageInformation: CallableString|string, messageInformationAdditional: CallableString|string|null = null) =>
    {
        messageInformationRef.current = messageInformation;
        messageInformationAdditionalRef.current = messageInformationAdditional;
        setIsShowInformation(true);
    }

    /**
     * Hides the information message.
     */
    const hideInformation = () =>
    {
        setIsShowInformation(false);
    }

    const processMessageInformation = (): string|null =>
    {
        const currentValue = messageInformationRef.current;

        if (typeof currentValue === 'string') {
            return currentValue;
        } else if (typeof currentValue === 'function') {
            return currentValue();
        } else {
            return null;
        }
    };

    const processMessageAdditionalInformation = (): string|null =>
    {
        const currentValue = messageInformationAdditionalRef.current;

        if (typeof currentValue === 'string') {
            return currentValue;
        } else if (typeof currentValue === 'function') {
            return currentValue();
        } else {
            return null;
        }
    };

    /**
     *
     */
    useEffect(() =>
    {
        setMessageInformation(processMessageInformation());
        setMessageInformationAdditional(processMessageAdditionalInformation());
        setQueryString(queryStringRef.current);
        setQueryType(queryTypeRef.current);
        setPositionString(positionStringRef.current);
        setQuery(queryRef.current);

        return () =>
        {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [
        timeoutId,
        messageInformationRef,
        messageInformationAdditionalRef,
        queryStringRef,
        positionStringRef,
        queryRef
    ]);

    let isCoordinateSearch: boolean|null = queryType === null ? null : (
        queryType === searchTypeCoordinateDms ||
        queryType === searchTypeCoordinateDecimal ||
        queryType === searchTypeCoordinate ||
        queryType === searchTypeEmpty
    );

    return (
        <LoaderContext.Provider value={{ showLoader, hideLoader, showInformation, hideInformation }}>
            {children}
            <Modal show={isShowLoader} onHide={() => hideLoader()} centered>
                <Modal.Body className="text-center">
                    <div className="spinner-border mt-3" role="status">
                        <span className="visually-hidden">{messageLoader}</span>
                    </div>
                    <div>
                        <p className="mb-0 mt-3">{messageLoader}</p>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={isShowInformation} onHide={() => hideLoader()} centered>
                <Modal.Header className="text-center">
                    <strong>{t('TEXT_WORD_INFORMATION_SINGLE')}</strong>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p className="m-3">{messageInformation}</p>
                        <p className="m-3" dangerouslySetInnerHTML={{__html: messageInformationAdditional ?? ''}} />
                        <p className="m-3">
                            {
                                messageInformationAdditional !== null && isCoordinateSearch !== null && !isCoordinateSearch && positionString !== null && query !== null ? <>
                                        {t('TEXT_WORD_POSITION_CURRENT_ADOPT')}?&nbsp;
                                        <Link
                                            to={query.getFilterConfig().getLinkCurrent({q: positionString})}
                                            onClick={hideInformation}
                                        >
                                            {positionString}
                                        </Link>
                                    </>
                                     :
                                    null
                            }
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hideInformation}>{t('TEXT_WORD_CLOSE')}</Button>
                </Modal.Footer>
            </Modal>
        </LoaderContext.Provider>
    );
};
