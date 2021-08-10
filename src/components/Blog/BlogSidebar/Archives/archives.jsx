import React from 'react'
import classes from './archives.module.scss'
import { useTranslation } from 'react-i18next'

const Archives = ({ archives }) => {
    const { t } = useTranslation()
    const Archives = archives.map(item => {
        return <div key={item.id} className={classes.archive}>
            <p>{item.date.month} {item.date.year}</p>
        </div>
    })
    return (
        <section className={classes.archives}>
            <div className={classes.title}>
                <h4>{t("archives")}</h4>
            </div>
            <div className={classes.content}>
                {Archives}
            </div>
        </section>
    )
}

export default Archives