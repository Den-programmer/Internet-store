import React from 'react'
import '../../filterMenus.scss'

const ColourMenuItem = ({ colourHex }) => {
    return (
        <div style={{ backgroundColor: colourHex }} className="colourMenuItem"></div>
    )
}

export default ColourMenuItem