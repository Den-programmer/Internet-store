import React from 'react'
import classes from './pageTitle.module.scss'
import { useTranslation } from 'react-i18next'

const PageTitle = ({ currentPath, currentShopPage }) => {
    const { t } = useTranslation()
    const currPageCheckout = currentShopPage === "Shop Without Sidebar" ? t("shop_without_sidebar") : t("shop_sidebar")
    return (
        <section className={classes.pageTitle}>
            <div className={classes.title}>
                <h2>{currPageCheckout}</h2>
            </div>
            <div className={classes.pathName}>
                <h3>{currentPath}/{currPageCheckout}</h3>
            </div>
        </section>
    )
}

export default PageTitle