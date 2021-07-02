import React, { Fragment } from 'react';
import { useFechGifs } from '../hooks/useFechGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFechGifs( category );

    return (
        <Fragment>
            <h3>{ category }</h3>

            { loading && <p>Cargando...</p> }

            <div className="ui three column grid">
                {
                    images.map( img => {
                        return <GifGridItem key={ img.id } { ...img }/>;
                    })
                }
            </div>                
        </Fragment>
    )
}
