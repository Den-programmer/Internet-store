import React from 'react'
import '../../filterMenus.scss'

const TypeMenuItem = ({ title, setTypeFilter }) => {
    const setType = (e) => {
        setTypeFilter(title, e.currentTarget.checked)
    }
    return (
        <div className="typeMenuItem">
            <input onChange={setType} className="typeMenuItem__checkbox" type="checkbox"/>
            <p className="typeMenuItem__text">{title}</p>
        </div>
    )
}

export default TypeMenuItem