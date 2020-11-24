import React from 'react'
import '../../filterMenus.scss'

const TypeMenuItem = ({ title }) => {
    return (
        <div className="typeMenuItem">
            <input className="typeMenuItem__checkbox" type="checkbox"/>
            <p className="typeMenuItem__text">{title}</p>
        </div>
    )
}

export default TypeMenuItem