import React from 'react'
import '../../FilterMenus/filterMenus.scss'
import PriceMenuItem from './PriceMenuItem/priceMenuItem'
import ResetBtn from '../../../ButtonReset/buttonReset'

const PriceMenu = ({ shopFilters, priceFilter, changePriceFilter }) => {
    const options = shopFilters[1].menuOptions.map(item => {
        return <PriceMenuItem key={item.id} id={item.id} price={item.price} changePriceFilter={changePriceFilter}/>
    })
    return (
        <div className="priceMenu">
            {options}
            {priceFilter !== 0 && <ResetBtn />}
        </div>
    )
}

export default PriceMenu