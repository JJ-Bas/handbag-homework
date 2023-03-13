import React from "react";

function ShopArticle ( {label , image, description , price}) {
    return (
        <article>
        <span>{label}</span>
        <img src={image} alt={description}/>
        <p>{description}</p>
        <h4>{price}</h4>
    </article>
    )
}

export default ShopArticle