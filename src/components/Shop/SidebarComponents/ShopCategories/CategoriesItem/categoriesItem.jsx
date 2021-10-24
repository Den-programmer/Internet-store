import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './categoriesItem.module.scss'

const CategoriesItem = ({ isAdded, title, productsCount, setCategories, category }) => {
    debugger
    const { t } = useTranslation()
    return (
        <div onClick={() => setCategories(category)} className={classes.categoriesItem}>
            <p>{t(title)} ({productsCount})</p>
            {isAdded && <div className={classes.plus}>+</div>}
        </div>
    )
}

export default CategoriesItem