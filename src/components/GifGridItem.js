
import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="column animate__animated animate__bounce">
            <div className="ui fluid card">
                <div className=" image ">
                    <img src={ url } alt={ title }  />
                </div>
                <div className="content">
                    <h3 className="header" >{ title }</h3>
                </div>
            </div> 
        </div>           
    )
}
