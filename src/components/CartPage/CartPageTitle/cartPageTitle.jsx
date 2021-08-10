import React from 'react'
import classes from './cartPageTitle.module.scss'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CartPageTitle = (props) => {
    const { t } = useTranslation()
    return (
        <div className={classes.cartPageTitle}>
            <h3>{t("your_cart")}</h3>
            <NavLink className={classes.redirectToShop} to="/Home/Shop">
                &#60; {t("return_to_shop")}
            </NavLink>
        </div>
    )
}

export default CartPageTitle