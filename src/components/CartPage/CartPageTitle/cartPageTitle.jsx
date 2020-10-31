import React from 'react'
import classes from './cartPageTitle.module.scss'
import { NavLink } from 'react-router-dom'

const CartPageTitle = (props) => {
    return (
        <div className={classes.cartPageTitle}>
            <h3>Your cart</h3>
            <NavLink className={classes.redirectToShop} to="/Home/Shop">
                &#60; Return To Shop
            </NavLink>
        </div>
    )
}

export default CartPageTitle