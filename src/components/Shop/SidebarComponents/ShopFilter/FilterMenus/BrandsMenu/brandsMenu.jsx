import React from 'react'
import '../filterMenus.scss'

const BrandsMenu = ({ shopFilters }) => {
    const optionItems = shopFilters[0].menuOptions.map(item => {
        return (
            <div key={item.id} className="optionItem">
                <input type="checkbox"/>
                <p>{item.title}</p>
            </div>
        )
    })
    return (
        <div className="brandsMenu">
            {optionItems}
        </div>
    )
}

export default BrandsMenu