import React from 'react'
import classes from './shopCategories.module.scss'
import CategoriesItem from './CategoriesItem/categoriesItem'

const ShopCategories = ({ shopCategories }) => {
    const categories = shopCategories.map(item => {
        return <CategoriesItem key={item.id} id={item.id} title={item.title} productsCount={item.productsCount} isAdded={item.isAdded}/>
    })
    return (
        <div className={classes.shopCategories}>
            <div className={classes.title}>
                <h3>Categories</h3>
            </div>
            <div className={classes.categories}>
                {categories}
            </div>
        </div>
    )
}

export default ShopCategories