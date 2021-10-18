import React from 'react'
import '../filterMenus.scss'

const BrandsMenu = ({ shopFilters, setBrandsFilter }) => {
    const optionItems = shopFilters[0].menuOptions.map(item => {
        const setBrand = (e) => {
            setBrandsFilter(item.title, e.currentTarget.checked)
        }
        return (
            <div key={item.id} className="optionItem">
                <input onChange={(e) => setBrand(e)} type="checkbox"/>
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