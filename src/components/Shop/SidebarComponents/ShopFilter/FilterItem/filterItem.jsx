import React from 'react'
import classes from './filterItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const FilterItem = ({ title, isOptionOpen, menu, id, openShopFiltersMenu }) => {
    return (<>
        <div onClick={() => openShopFiltersMenu(id)} className={classes.filterItem}>
            <h5>{title}</h5>
            <FontAwesomeIcon className={classes.icon} icon={faAngleDown}/>
        </div>
        {isOptionOpen && menu}
    </>)
}

export default FilterItem