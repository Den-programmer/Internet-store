import React from 'react'
import classes from './checkoutPage.module.scss'
import Login from '../common/Login/login'
import CommonMainHeader from '../common/CommonMainHeader/commonMainHeaderContainer'
import HeaderNavbar from '../AboutUS/Header/HeaderNavbar/headerNavbar'
import CheckoutContent from './CheckoutContent/checkoutContent'

const CheckoutPage = () => {
    return (
        <div className={classes.checkout}>
            <Login />
            <CommonMainHeader />
            <HeaderNavbar />
            <CheckoutContent />
        </div>
    )
}

export default CheckoutPage