import React, {createContext, useContext, ReactNode, useState, useEffect, useRef} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import {Button} from "react-bootstrap";

/* Import types. */
import {CallableString} from "../../types/Types";

interface LoaderContextType {
    showLoader: (messageLoader: string, messageInformation?: CallableString|string|null, messageInformationAdditional?: CallableString|string|null) => void,
    hideLoader: (messageInformation?: CallableString|string|null, messageInformationAdditional?: CallableString|string|null) => void,
    showInformation: (messageInformation: string) => void,
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
    const waitGapStart = 200;
    const waitGapClose = 1000;

    const { t } = useTranslation();

    const [isShowLoader, setIsShowLoader] = useState<boolean>(false);
    const [messageLoader, setMessageLoader] = useState<string>(t('TEXT_WORD_LOAD'));

    const [isShowInformation, setIsShowInformation] = useState<boolean>(false);
    const [messageInformation, setMessageInformation] = useState<string|null>(null);
    const [messageInformationAdditional, setMessageInformationAdditional] = useState<string|null>(null);
    const messageInformationRef = useRef<CallableString|string|null>(null);
    const messageInformationAdditionalRef = useRef<CallableString|string|null>(null);

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
        messageInformationAdditional: CallableString|string|null = null
    ) =>
    {
        if (messageInformation !== null) {
            messageInformationRef.current = messageInformation;
        }
        if (messageInformationAdditional !== null) {
            messageInformationAdditionalRef.current = messageInformationAdditional;
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

        return () =>
        {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId, messageInformationRef, messageInformationAdditionalRef]);

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
                        <p className="m-3">{messageInformationAdditional}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hideInformation}>{t('TEXT_WORD_CLOSE')}</Button>
                </Modal.Footer>
            </Modal>
        </LoaderContext.Provider>
    );
};
