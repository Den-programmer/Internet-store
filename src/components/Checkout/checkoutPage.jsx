import React from 'react'
import classes from './checkoutPage.module.scss'
import CheckoutContent from './CheckoutContent/checkoutContent'
import Header from '../Home/Header/header'

const CheckoutPage = () => {
    return (
        <div className={classes.checkout}>
            <Header />
            <CheckoutContent />
        </div>
    )
}

export default CheckoutPage