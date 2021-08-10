import React from 'react'
import '../../filterMenus.scss'

const ColourMenuItem = ({ colourHex, color, setColorFilter }) => {
    const handleClick = (e) => {
        let color = e.currentTarget.getAttribute("id")
        console.log(color)
        setColorFilter(color)
        debugger
    }
    return (
        <div onClick={handleClick} id={color} style={{ backgroundColor: colourHex }} className="colourMenuItem"></div>
    )
}

export default ColourMenuItem