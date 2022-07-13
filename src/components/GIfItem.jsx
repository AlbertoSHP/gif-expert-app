import React from 'react'

export const GIfItem = ( {id, title, url} ) => {

    console.log(id, title, url)

    return (
        <div className="card-grid">
            <img src={url} alt={title}/>
            <p>{ title }</p>
        </div>
    )
}
