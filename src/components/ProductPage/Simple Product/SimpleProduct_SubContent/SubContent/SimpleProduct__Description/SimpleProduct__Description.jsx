import React from 'react'
import classes from './SimpleProduct__Description.module.scss'
import { useTranslation } from 'react-i18next'

const SimpleProduct__Description = ({ description, title }) => {
    const { t } = useTranslation()
    return (
        <div className={classes.description}>
            <h4>{t("description_for")} {title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default SimpleProduct__Description