import React from 'react'
import classes from './productPage.module.scss'
import Footer from '../common/Footer/footerContainer'
import SimpleProduct from './Simple Product/simpleProductContainer'
import RelatedProducts from './RelatedProducts/relatedProductsContainer'
import Header from '../Home/Header/header'

const ProductPage = (props) => {
    return (
        <div className={classes.productPage}>
            <div className={classes.productPage__header}>
                <Header />
            </div>
            <div className={classes.productPage__content}>
                <SimpleProduct />
                <RelatedProducts />
            </div>
            <div className={classes.productPage__footer}>
                <Footer />
            </div>
        </div>
    )
}

export default ProductPage