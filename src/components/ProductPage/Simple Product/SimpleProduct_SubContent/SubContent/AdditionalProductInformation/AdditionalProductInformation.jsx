import React from 'react'
import classes from './AdditionalProductInformation.module.scss'

const AdditionalProductInformation = ({ currentProduct }) => {
    const properties = currentProduct.properties.map(item => {
        return (
            <div key={item.id} className={classes.item}>
                <p className={classes.property}>{item.title}</p>
                <p className={classes.value}>{item.value}</p>
            </div>
        )
    })
    return (
        <div className={classes.additionalInformation}>
            {properties}
        </div>
    )
}

export default AdditionalProductInformation