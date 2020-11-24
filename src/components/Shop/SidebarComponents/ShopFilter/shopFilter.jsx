import React from 'react'
import classes from './shopFilter.module.scss'
import FilterItem from './FilterItem/filterItem'

const ShopFilter = ({ shopFilters, openShopFiltersMenu }) => {
    const filters = shopFilters.map(item => {
        return <FilterItem openShopFiltersMenu={openShopFiltersMenu} key={item.id} id={item.id} title={item.title} isOptionOpen={item.isOptionOpen} menu={item.menu}/>
    })
    return (
        <div className={classes.shopFilter}>
            <div className={classes.title}>
                <h3>Filter By</h3>
            </div>
            <div className={classes.filters}>
                {filters}
            </div>
        </div>
    )
}

export default ShopFilter