import React from 'react'
import '../../FilterMenus/filterMenus.scss'
import PriceMenuItem from './PriceMenuItem/priceMenuItem'

const PriceMenu = ({ shopFilters }) => {
    const options = shopFilters[1].menuOptions.map(item => {
        return <PriceMenuItem key={item.id} id={item.id} price={item.price}/>
    })
    return (
        <div className="priceMenu">
            {options}
        </div>
    )
}

export default PriceMenu