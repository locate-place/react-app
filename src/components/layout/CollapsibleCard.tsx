import React from "react";
import {useTranslation} from "react-i18next";
import {colorBackgroundLocation} from "../../config/Colors";

type CollapsibleCardProps = {
    title: string;
    children?: JSX.Element|null|never[];
    footer?: JSX.Element|null;
    backgroundColor?: string;
    collapsed?: boolean;
}

/**
 * This is the error part.
 */
const CollapsibleCard = ({
    title,
    children,
    footer = null,
    backgroundColor = colorBackgroundLocation,
    collapsed = false,
}: CollapsibleCardProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    return (
        <div className="card shadow-own mb-4 mt-4"
             style={{'backgroundColor': backgroundColor}}>
            <div className="card-header">
                <p className="mb-0 fw-bold">{title}</p>
            </div>
            <div className="card-body p-0">
                {children ?? <></>}
            </div>
            <div className="card-footer">
                <small><small>{footer ?? <></>}</small></small>
            </div>
        </div>
    )
}

export default CollapsibleCard;
