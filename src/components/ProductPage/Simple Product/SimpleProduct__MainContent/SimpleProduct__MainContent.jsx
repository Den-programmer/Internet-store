import React from 'react'
import classes from './SimpleProduct__MainContent.module.scss'
import Pictures from './Pictures/pictures'
import ProductContent from './ProductContent/ProductContent'

const SimpleProduct__MainContent = (props) => {
    return (
        <div className={classes.simpleProduct__mainContent}>
            <Pictures />
            <ProductContent />
        </div>
    )
}

export default SimpleProduct__MainContent