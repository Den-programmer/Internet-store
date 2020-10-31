import React from 'react'
import classes from './cartPage.module.scss'
import Login from '../common/Login/loginContainer'
import CommonMainHeader from '../common/CommonMainHeader/commonMainHeaderContainer'
import Navbar from '../Home/Header/Navbar/navbar'
import Footer from '../common/Footer/footerContainer'
import CartPageTitle from './CartPageTitle/cartPageTitle'
import CartList from './CartList/cartListContainer'

const CartPage = (props) => {
    return (
        <div className={classes.cartPage}>
            <Login />
            <CommonMainHeader />
            <Navbar />
            <div className={classes.mainContent}>
                <CartPageTitle />
                <CartList />
            </div>
            <Footer />
        </div>
    )
}

export default CartPage