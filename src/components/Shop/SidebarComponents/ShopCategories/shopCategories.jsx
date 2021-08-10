import React from 'react'
import classes from './shopCategories.module.scss'
import CategoriesItem from './CategoriesItem/categoriesItem'
import { useTranslation } from 'react-i18next'

const ShopCategories = ({ shopCategories }) => {
    const { t } = useTranslation()
    const categories = shopCategories.map(item => {
        return <CategoriesItem key={item.id} id={item.id} title={item.title} productsCount={item.productsCount} isAdded={item.isAdded}/>
    })
    return (
        <div className={classes.shopCategories}>
            <div className={classes.title}>
                <h3>{t("categories")}</h3>
            </div>
            <div className={classes.categories}>
                {categories}
            </div>
        </div>
    )
}

export default ShopCategories