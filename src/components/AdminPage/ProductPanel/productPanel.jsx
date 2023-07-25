import React, { useState } from 'react'
import classes from './productPanel.module.scss'
import { useTranslation } from 'react-i18next'

const ProductPanel = (props) => {
    const { t } = useTranslation()
    const [productCharacteristicSettings, setProductCharacteristicSettings] = useState([
        {
            id: 1,
            type: "text",
            placeholder: "product_title"
        },
        {
            id: 2,
            type: "text",
            placeholder: "brand"
        },
        {
            id: 3,
            type: "text",
            placeholder: "type"
        },
        {
            id: 4,
            type: "text",
            placeholder: "weight"
        },
        {
            id: 5,
            type: "text",
            placeholder: "dimensions"
        },
        {
            id: 6,
            type: "text",
            placeholder: "categories_with_example"
        },
        {
            id: 7,
            type: "text",
            placeholder: "size"
        },
        {
            id: 8,
            type: "text",
            placeholder: "color"
        },
        {
            id: 9,
            type: "number",
            placeholder: "price_pl"
        },
        {
            id: 10,
            type: "text",
            placeholder: "tags"
        }
    ])
    const productCharacteristics = productCharacteristicSettings.map(item => {
        return (
            <div key={item.id} className={classes.productCharacteristic}>
                <input placeholder={t(item.placeholder)} type={item.type} className={classes.productCharacteristic_textfield} />
            </div>
        )
    })
    return (
        <div className={classes.productPanel}>
            <div className={classes.header}>
                <h3>{t("add_new_product")}</h3>
            </div>
            <div className={classes.addProductPanel}>
                <div className={classes.block}>
                    <div className={classes.productCharacteristicsWrapper}>
                        {productCharacteristics}
                    </div>
                    <div className={classes.productCharacteristicsWrapper}>
                        <div className={classes.productCharacteristic}>
                            <textarea placeholder={t('description')} type="text" className={classes.productCharacteristic_textarea} />
                        </div>
                    </div>
                </div>
                <div className={classes.btn_wrapper}>
                    <button className={classes.btn_addNewProduct}>{t("add_new_product")}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPanel 