import React from 'react'
import classes from './shop.module.scss'
import ShopWithoutSidebar from './ShopWithoutSidebar/shopWithoutSidebar'

const Shop = (props) => {
    return (
        <div className={classes.shop}>
            <ShopWithoutSidebar />
        </div>
    )
}

export default Shop