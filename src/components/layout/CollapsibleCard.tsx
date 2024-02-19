import React from "react";

/* Import configurations. */
import {colorBackgroundLocation} from "../../config/Colors";
import {sizeIcon} from "../../config/Config";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {
    ChevronDown,
    ChevronUp
} from "react-bootstrap-icons";

type CollapsibleCardProps = {
    title: string;
    children?: JSX.Element|null|never[];
    footer?: JSX.Element|null;
    backgroundColor?: string;
    collapsed?: boolean;
}

/**
 * Function to create a random id.
 *
 * @param length
 */
const makeRandomId = (length: number): string =>
{
    let result = '';

    const characters = 'ABCDEF0123456789';
    const characterLength = characters.length;

    let counter = 0;

    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characterLength));
        counter += 1;
    }

    return result;
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
    const id = makeRandomId(10);
    const idMain = 'accordion-' + id;
    const idCollapse = 'collapse-' + id;
    const idToggler = 'toggler-' + id;

    return (
        <div className="accordion" id={idMain}>
            <div className="card shadow-own mb-4 mt-4" style={{'backgroundColor': backgroundColor}}>
                <div
                    className="card-header"
                    id={idToggler}
                    data-bs-toggle="collapse"
                    data-bs-target={'#' + idCollapse}
                    aria-expanded={collapsed ? 'false' : 'true'}
                    aria-controls={idCollapse}
                    style={{"cursor": 'pointer'}}
                >
                    <p className="mb-0 fw-bold">
                        <ChevronDown size={sizeIcon.H3} className="collapse-close" />
                        <ChevronUp size={sizeIcon.H3} className="collapse-open" />
                        {title}
                    </p>
                </div>

                <div
                    id={idCollapse}
                    className={'collapse' + (collapsed ? '' : ' show')}
                    aria-labelledby={idToggler}
                    data-bs-parent={'#' + idMain}
                >
                <div className="card-body p-0">
                        {children ?? <></>}
                    </div>
                    {
                        footer ? <div className="card-footer">
                            <small><small>{footer}</small></small>
                        </div> : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default CollapsibleCard;
