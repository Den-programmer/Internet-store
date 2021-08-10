import React from 'react'
import classes from './checkoutContentHeader.module.scss'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CheckoutContentHeader = (props) => {
    const { t } = useTranslation()
    return (
        <div className={classes.checkoutContentHeader}>
            <div className={classes.title}>
                <h3>{t("checkout_page")}</h3>
            </div>
            <div className={classes.returningCustomer}>
                <div className={classes.horizontal_line}></div>
                <div className={classes.content}>
                    <p>{t("returning_customer")}<NavLink to="/MyAccount">{t("click_here_to_login")}</NavLink></p>
                </div>
                <div className={classes.horizontal_line}></div>
            </div>
        </div>
    )
}

export default CheckoutContentHeader