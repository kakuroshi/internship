import React from "react"

interface BtnProfileProps {
    countClick: () => void
}

const BtnProfile: React.FC<BtnProfileProps> = ( {countClick} ) => {
    return(
        <button onClick={countClick}><span style={{color: 'white'}}>console +</span></button>
    )
}

export default BtnProfile