import React from 'react'
import classes from './cartPage.module.scss'
import Header from '../Home/Header/header'
import Footer from '../common/Footer/footerContainer'
import CartPageTitle from './CartPageTitle/cartPageTitle'
import CartList from './CartList/cartListContainer'

const CartPage = (props) => {
    return (
        <div className={classes.cartPage}>
            <Header />
            <div className={classes.mainContent}>
                <CartPageTitle />
                <CartList />
            </div>
            <Footer />
        </div>
    )
}

export default CartPage