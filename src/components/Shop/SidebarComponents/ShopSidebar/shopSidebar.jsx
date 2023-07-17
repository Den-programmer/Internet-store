import React from 'react'
import ShopCategories from '../ShopCategories/shopCategoriesContainer'
import ShopFilter from '../ShopFilter/shopFilterContainer'
import classes from './shopSidebar.module.scss'

const ShopSidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <ShopCategories />
            <ShopFilter />
        </div>
    )
}

export default ShopSidebar