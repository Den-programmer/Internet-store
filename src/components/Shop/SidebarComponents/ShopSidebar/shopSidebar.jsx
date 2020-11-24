import React from 'react'
import ShopCategories from '../ShopCategories/shopCategoriesContainer'
import ShopFilter from '../ShopFilter/shopFilterContainer'

const ShopSidebar = (props) => {
    return (
        <div>
            <ShopCategories />
            <ShopFilter />
        </div>
    )
}

export default ShopSidebar