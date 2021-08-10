import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './counter.module.scss'

const Counter = (props) => {
    const { t } = useTranslation()
    return (
        <section className={classes.countersWrapper}>
            <div className={classes.counters}>
                <div className={classes.counter}>
                    <h5>{props.totalEmployees}</h5>
                    <p>{t("total_employees")}</p>
                </div>
                <div className={classes.counter}>
                    <h5>{props.satisfaction}</h5>
                    <p>% {t("Satisfaction")}</p>
                </div>
                <div className={classes.counter}>
                    <h5>{props.cupsOfCoffee}</h5>
                    <p>{t("Cups_of_Coffee")}</p>
                </div>
                <div className={classes.counter}>
                    <h5>{props.buyersRating}</h5>
                    <p>{t("Buyers_Rating")}</p>
                </div>
            </div>
        </section>
    )
}

export default Counter