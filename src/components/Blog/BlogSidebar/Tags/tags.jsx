import React from 'react'
import classes from './tags.module.scss'
import { useTranslation } from 'react-i18next'

const Tags = ({ tags }) => {
    const { t } = useTranslation()
    const Tags = tags.map(item => {
        return <div key={item.id} className={classes.tag}>
            <p className={classes.tag__title}>{t(item.title)}</p>
        </div>
    })
    return (
        <section className={classes.tagsWrapper}>
            <div className={classes.title}>
                <h4>{t("tags")}</h4>
            </div>
            <div className={classes.tags}>{Tags}</div>
        </section>
    )
}

export default Tags