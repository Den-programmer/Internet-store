import React from 'react'
import classes from './categoriesItem.module.scss'

const CategoriesItem = ({ isAdded, title, productsCount }) => {
    return (
        <div className={classes.categoriesItem}>
            <p>{title} ({productsCount})</p>
            {isAdded && <div className={classes.plus}>+</div>}
        </div>
    )
}

export default CategoriesItem