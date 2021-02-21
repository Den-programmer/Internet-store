import React from 'react'
import classes from './simpleProduct.module.scss'
import SimpleProduct__MainContent from './SimpleProduct__MainContent/SimpleProduct__MainContent'
import SimpleProduct_SubContent from './SimpleProduct_SubContent/SimpleProduct_SubContent'

const SimpleProduct = ({ products, productId }) => {
    const currentProduct = products.filter(item => item.id === productId).find(item => item)
    return (
        <div className={classes.simpleProduct}>
            <SimpleProduct__MainContent currentProduct={currentProduct}/>
            <SimpleProduct_SubContent currentProduct={currentProduct}/>
        </div>
    )
}

export default SimpleProduct