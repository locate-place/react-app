import React, {ReactNode, useMemo} from 'react';
import {Link, LinkProps, To, useNavigate, useSearchParams} from 'react-router-dom';

/* Import classes. */
import {Query} from "../../classes/Query";

/* Interface definitions. */
interface CustomLinkProps extends LinkProps {
    to: To,
    children: ReactNode,
    useCurrentPosition?: boolean,
}

/**
 * This is the LinkV2 component. This extends the Link component with additional functionality.
 *
 * @param to
 * @param children
 * @param boolean
 * @param props
 * @constructor
 */
const LinkV2: React.FC<CustomLinkProps> = ({to, children, useCurrentPosition = false, ...props}) =>
{
    let navigate = useNavigate();

    /* API types */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    let query = new Query(searchParams, env);

    /**
     * Round function.
     *
     * @param value
     * @param decimals
     */
    const round = (value: number, decimals: number): number =>
    {
        return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
    };

    /**
     * Get position string from GeolocationPosition.
     *
     * @param position
     */
    const getPosition = (position: GeolocationPosition): string =>
    {
        return round(position.coords.latitude, 6) + ',' + round(position.coords.longitude, 6);
    }

    /**
     * Handles the click event.
     *
     * @param event
     */
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
    {
        if (!useCurrentPosition) {
            return;
        }

        let filterConfig = query.getFilterConfig();

        filterConfig.setFilterConfigByLink(to);
        filterConfig.setDoNotResetFilterConfig();

        let pathName = filterConfig.getPathname(to);

        // /* The current position is set. Force to use the current one. */
        // if (filterConfig.getCurrentPosition()) {
        //     navigate(query.getFilterConfig().getCurrentLinkWithLanguage(null, null, pathName));
        //     event.preventDefault();
        //     return;
        // }

        /* Add current position to query. */
        navigator.geolocation.getCurrentPosition((position) =>
        {
            filterConfig.setDoNotResetFilterConfig();
            filterConfig.setCurrentPosition(getPosition(position));
            navigate(query.getFilterConfig().getCurrentLinkWithLanguage(null, null, pathName));
            return;
        });

        event.preventDefault();
        return;
    };

    return (
        <Link to={to} {...props} onClick={handleClick}>
            {children}
        </Link>
    );
};

export default LinkV2;
