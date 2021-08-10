import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './callUs.module.scss'

const CallUs = ({ phone, language }) => {
    const { t } = useTranslation()
    return (
        <div style={language !== "English" ? { fontSize: '10px' } : { fontSize: '12px' }} className={classes.contacts}>
            <p>{t("call_us_free")}</p>
            <span>{phone}</span>
        </div>
    )
}

export default CallUs
