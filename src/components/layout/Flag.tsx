import React, { useState, useEffect } from 'react';

interface FlagProps {
    country: string;
    size?: number;
    title?: string;
}

/**
 * This renders the Flag component (loaded from SVG from flag-icons/flags/4x3/{country}.svg).
 *
 * @param country
 * @param size
 * @param props
 * @constructor
 */
const Flag: React.FC<FlagProps> = ({ country, size = 1 , title = null}) => {
    const [FlagSvg, setFlagSvg] = useState<React.ElementType | null>(null);

    useEffect(() => {
        const importFlagSvg = async () => {
            try {
                const module = await import(`!!@svgr/webpack!flag-icons/flags/4x3/${country.toLowerCase()}.svg`);
                setFlagSvg(() => module.default); // Setzen der importierten SVG-Komponente
            } catch (error) {}
        };

        importFlagSvg().then(() => {});
    }, [country]);

    let dimensions = {
        height: size.toString() + 'em',
        width: (size / 3 * 4).toString() + 'em'
    };

    if (!FlagSvg) {
        return <div style={{display: 'inline-block', ...dimensions}} title={title || country}>
            <code style={{ height: size.toString() + 'em', width: (size / 3 * 4).toString() + 'em' }}>[{country}]</code>
        </div>;
    }

    return <span title={title || country}>
        <FlagSvg
            alt={country}
            style={dimensions}
            className={'shadow-flag'}
        />
    </span>;
};

export default Flag;
