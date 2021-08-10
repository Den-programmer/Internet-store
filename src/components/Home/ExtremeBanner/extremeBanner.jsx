import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './extremeBanner.module.scss'

const ExtremeBanner = ({ extremeBanner }) => {
    const { t } = useTranslation()
    const products = extremeBanner.map(item => {
        return (
            <section key={item.id} className={classes.extremeBanner}>
                <img className={classes.extremeBanner__photo} src={item.photo} alt=""/>
                <div className={classes.extremeBanner__content}>
                    <div className={classes.btn_specialOffer}>
                        <button>{t("special_offer")}</button>
                        <h2>{item.title}</h2>
                        <p>{item.subtitle}</p>
                    </div>
                </div>
            </section>
        )
    })
    return products
}

export default ExtremeBanner