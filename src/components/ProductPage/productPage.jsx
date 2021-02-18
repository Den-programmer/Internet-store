import React from 'react'
import classes from './productPage.module.scss'
import Login from '../common/Login/loginContainer'
import CommonMainHeader from '../common/CommonMainHeader/commonMainHeaderContainer'
import HeaderNavbar from '../AboutUS/Header/HeaderNavbar/headerNavbar'
import Footer from '../common/Footer/footerContainer'
import SimpleProduct from './Simple Product/simpleProductContainer'
import RelatedProducts from './RelatedProducts/relatedProductsContainer'

const ProductPage = (props) => {
    return (
        <div className={classes.productPage}>
            <div className={classes.productPage__header}>
                <Login />
                <CommonMainHeader />
                <HeaderNavbar />
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