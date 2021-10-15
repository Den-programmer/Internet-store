import React from 'react'
import classes from './filterItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import BrandsMenu from '../FilterMenus/BrandsMenu/brandsMenuContainer'
import PriceMenu from '../FilterMenus/PriceMenu/priceMenuContainer'
import ColourMenu from '../FilterMenus/ColourMenu/colourMenuContainer'
import TypeMenu from '../FilterMenus/TypeMenu/TypeMenuContainer'

const FilterItem = ({ title, isOptionOpen, id, openShopFiltersMenu, changePriceFilter, setColorFilter }) => {
    const { t } = useTranslation()
    return (<>
        <div onClick={() => openShopFiltersMenu(id)} className={classes.filterItem}>
            <h5>{t(title)}</h5>
            <FontAwesomeIcon className={classes.icon} icon={faAngleDown}/>
        </div>
        {isOptionOpen && id === 1 ? <BrandsMenu /> : isOptionOpen && id === 2 ? <PriceMenu changePriceFilter={changePriceFilter}/> : isOptionOpen && id === 3 ? 
        <ColourMenu setColorFilter={setColorFilter}/> : isOptionOpen && id === 4 ? <TypeMenu /> : ''} 
    </>)
}

export default FilterItem