import React, { useState } from 'react';

/* Add types */
import {TypeSrcSet} from "../../types/Types";

type ImageWithLoaderProps = {
    src: string,
    srcSet: TypeSrcSet[],
    alt: string,
    title: string,
    border: boolean
}

/**
 * This is the image with loader part.
 */
const ImageWithLoader = ({src, srcSet, alt, title, border}: ImageWithLoaderProps) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <div className={border ? 'card' : ''} style={{
                aspectRatio: '4/3',
                backgroundColor: '#f9f9f9'
            }}>
                <div
                    className="card-body d-flex align-items-center justify-content-center"
                    style={{height: '100%'}}
                >
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div> &nbsp; Lade Bild. Bitte warten.
                </div>
            </div>}
            <picture onLoad={() => setLoading(false)}>
                {srcSet.map((source, index) => (
                    <source key={index} srcSet={source.srcSet} media={source.media} />
                ))}
                <img
                    className={border ? 'img-thumbnail' : ''}
                    src={src}
                    alt={alt}
                    title={title}
                    style={{
                        display: loading ? 'none' : 'block',
                        aspectRatio: '4/3',
                        backgroundColor: '#f9f9f9',
                        width: '100%'
                    }}
                />
            </picture>
        </>
    )
}

export default ImageWithLoader;
