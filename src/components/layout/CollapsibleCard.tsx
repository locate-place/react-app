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
    title: string|JSX.Element,
    children?: JSX.Element|null|never[],
    introduction?: JSX.Element|null,
    epilogue?: JSX.Element|null,
    footer?: JSX.Element|null,
    footerInformation?: JSX.Element|null,
    footerInformationAdditional?: JSX.Element|null,
    backgroundColor?: string,
    collapsed?: boolean,
    collapsable?: boolean,
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
    introduction = null,
    epilogue = null,
    footer = null,
    footerInformation = null,
    footerInformationAdditional = null,
    backgroundColor = colorBackgroundLocation,
    collapsed = false,
    collapsable = true,
}: CollapsibleCardProps) =>
{
    const id = makeRandomId(10);
    const idMain = 'accordion-' + id;
    const idCollapse = 'collapse-' + id;
    const idToggler = 'toggler-' + id;

    return (
        <div className="accordion" id={idMain}>
            <div className="card shadow-own w-100 mb-4 mt-4" style={{'backgroundColor': backgroundColor}}>
                <div
                    className={'card-header' + ( collapsed ? ' collapsed' : '')}
                    id={idToggler}
                    data-bs-toggle={collapsable ? 'collapse' : ''}
                    data-bs-target={'#' + idCollapse}
                    aria-expanded={collapsed ? 'false' : 'true'}
                    aria-controls={idCollapse}
                    style={{"cursor": collapsable ? 'pointer' : 'auto'}}
                >
                    <div className="fw-bold">
                        {
                            collapsable ? <>
                                <ChevronDown size={sizeIcon.H3} className="collapse-close" />
                                <ChevronUp size={sizeIcon.H3} className="collapse-open" />
                            </> : <></>
                        }
                        {title}
                    </div>
                </div>

                <div
                    id={idCollapse}
                    className={'collapse' + (collapsed ? '' : ' show')}
                    aria-labelledby={idToggler}
                    data-bs-parent={'#' + idMain}
                >
                    {
                        introduction ? <div className="card-body p-0">{introduction}</div> : <></>
                    }
                    {
                        children ? <div className="card-body p-0">{children}</div> : <></>
                    }
                    {
                        epilogue ? <div className="card-footer">
                            <small><small>{epilogue}</small></small>
                        </div> : <></>
                    }
                    {
                        footer ? <div className="card-footer">
                            <small><small>{footer}</small></small>
                        </div> : <></>
                    }
                </div>
                {
                    footerInformation ? <div className="card-footer">
                        <small><small>{footerInformation}</small></small>
                    </div> : <></>
                }
                {
                    footerInformationAdditional ? <div className="card-footer">
                        <small><small>{footerInformationAdditional}</small></small>
                    </div> : <></>
                }
            </div>
        </div>
    )
}

export default CollapsibleCard;
