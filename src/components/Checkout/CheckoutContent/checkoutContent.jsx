import React from 'react'
import classes from './checkoutContent.module.scss'
import CheckoutContentHeader from './CheckoutContentHeader/checkoutContentHeader'
import BillingDetails from './BillingDetails/billingDetails'
import Order from './Order/order'

const CheckoutContent = (props) => {
    return (
        <div className={classes.checkoutContent}>
            <CheckoutContentHeader />
            <BillingDetails />
            <Order />
        </div>
    )
}

export default CheckoutContent