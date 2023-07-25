import React, { useState } from 'react'
import classes from './productPanel.module.scss'

const ProductPanel = (props) => {
    const [productCharacteristicSettings, setProductCharacteristicSettings] = useState([
        {
            id: 1,
            type: "text",
            placeholder: "Product Title"
        },
        {
            id: 2,
            type: "text",
            placeholder: "Brand"
        },
        {
            id: 3,
            type: "text",
            placeholder: "Type"
        },
        {
            id: 4,
            type: "text",
            placeholder: "Weight"
        },
        {
            id: 5,
            type: "text",
            placeholder: "Dimensions"
        },
        {
            id: 6,
            type: "text",
            placeholder: "Categories - Mobile Phones Electronics"
        },
        {
            id: 7,
            type: "text",
            placeholder: "Size"
        },
        {
            id: 8,
            type: "text",
            placeholder: "Color"
        },
        {
            id: 9,
            type: "number",
            placeholder: "Price - 00.00"
        },
        {
            id: 10,
            type: "text",
            placeholder: "Tags"
        }
    ])
    const productCharacteristics = productCharacteristicSettings.map(item => {
        return (
            <div key={item.id} className={classes.productCharacteristic}>
                <input placeholder={item.placeholder} type={item.type} className={classes.productCharacteristic_textfield} />
            </div>
        )
    })
    return (
        <div className={classes.productPanel}>
            <div className={classes.header}>
                <h3>Add new product</h3>
            </div>
            <div className={classes.addProductPanel}>
                <div className={classes.block}>
                    <div className={classes.productCharacteristicsWrapper}>
                        {productCharacteristics}
                    </div>
                    <div className={classes.productCharacteristicsWrapper}>
                        <div className={classes.productCharacteristic}>
                            <textarea placeholder='Description' type="text" className={classes.productCharacteristic_textarea} />
                        </div>
                    </div>
                </div>
                <div className={classes.btn_wrapper}>
                    <button className={classes.btn_addNewProduct}>Add new product</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPanel 