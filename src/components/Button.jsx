import React from 'react';

function Button( {buttonType, dis, bName} ) {
    return (
        <button
            type={buttonType}
            disabled={dis}
            onClick={() => console.log(`${bName}`)}>{bName}</button>
    )
}

export default Button