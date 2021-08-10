import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './shopNow.module.scss'

const BtnShopNow = ({ click }) => {
    const { t } = useTranslation()
    return (
        <div onClick={click} className={classes.btn_shopNow}> 
            <button>{t("shop_now")}</button>
        </div>
    )
}

export default BtnShopNow