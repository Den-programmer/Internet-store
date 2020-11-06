import React from 'react'
import classes from './checkoutContentHeader.module.scss'
import { NavLink } from 'react-router-dom'

const CheckoutContentHeader = (props) => {
    return (
        <div className={classes.checkoutContentHeader}>
            <div className={classes.title}>
                <h3>Checkout Page</h3>
            </div>
            <div className={classes.returningCustomer}>
                <div className={classes.horizontal_line}></div>
                <div className={classes.content}>
                    <p>Returning customer?<NavLink to="/MyAccount">Click here to login</NavLink></p>
                </div>
                <div className={classes.horizontal_line}></div>
            </div>
        </div>
    )
}

export default CheckoutContentHeader