import React from "react";

function Tile ( { image, title, children, imageAlt }) {
    return (
        <section>
            <img src={image} alt={imageAlt}/>
            <h2>{title}</h2>
            {children}>
        </section>
    )
}

export default Tile