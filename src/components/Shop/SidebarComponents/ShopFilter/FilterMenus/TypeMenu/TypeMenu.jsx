import React from 'react'
import '../filterMenus.scss'
import TypeMenuItem from './TypeMenuItem/TypeMenuItem'

const TypeMenu = ({ shopFilters }) => {
    const optionItems = shopFilters[3].menuOptions.map(item => {
        return <TypeMenuItem id={item.id} key={item.id} title={item.title}/>
    })
    return (
        <div className="typeMenu">{optionItems}</div>
    )
}

export default TypeMenu