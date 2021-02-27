import React from 'react'
import classes from './SimpleProduct__MainContent.module.scss'
import Pictures from './Pictures/pictures'
import ProductContent from './ProductContent/ProductContent'

const SimpleProduct__MainContent = ({ currentProduct, addToCart, removeLike, likeProduct }) => {
    return (
        <div className={classes.simpleProduct__mainContent}>
            <Pictures currentProduct={currentProduct}/>
            <ProductContent currentProduct={currentProduct} addToCart={addToCart} removeLike={removeLike} likeProduct={likeProduct}/>
        </div>
    )
}

export default SimpleProduct__MainContent