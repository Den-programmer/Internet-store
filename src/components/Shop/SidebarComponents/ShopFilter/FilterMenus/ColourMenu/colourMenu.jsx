import React from 'react'
import '../filterMenus.scss'
import ColourMenuItem from './ColourMenuItem/colourMenuItem'

const ColourMenu = ({ shopFilters }) => {
    const optionItems = shopFilters[2].menuOptions.map(item => {
        return <ColourMenuItem id={item.id} key={item.id} colourHex={item.colourHex}/>
    })
    return (
        <div className="colourMenuWrapper">
            <div className="colourMenu">{optionItems}</div>
        </div>
    )
}

export default ColourMenu