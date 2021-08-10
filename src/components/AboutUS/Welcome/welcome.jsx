import React from 'react'
import classes from './welcome.module.scss'
import supermarketPhoto from '../../../images/supermarketPhoto.jpg'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Welcome = (props) => {
    const { t } = useTranslation()
    return (
        <section className={classes.welcome}>
            <div className={classes.storeImg}>
                <img src={supermarketPhoto} alt="" />
            </div>
            <div className={classes.welcome__text}>
                <h3 className={classes.welcome__text_title}>
                    {t("about_us_page_greeting")}
                </h3>
                <p className={classes.welcome__text_subTitle}>
                    {t("about_us_page_greeting_subtext")}
                </p>
                <p className={classes.welcome__text_maintext}>
                    {t("about_us_page_greeting_text")}
                </p>
                <div className={classes.btn_contactUs}>
                    <NavLink to="/ContactUs">{t("contact_us")}</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Welcome