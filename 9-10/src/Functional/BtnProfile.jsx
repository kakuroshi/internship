import React from "react"

const BtnProfile = ( {countClick} ) => {
    return(
        <button onClick={countClick}><span style={{color: 'white'}}>console +</span></button>
    )
}

export default BtnProfile