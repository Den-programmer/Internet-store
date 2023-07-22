import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './order.module.scss'

const Order = ({ products, subtotal, changeFreeShippingStatus, changeFlatShippingStatus, isFreeShipping, isFlatShipping, shippingTotal, countShippingTotal }) => {
    const { t } = useTranslation()

    const orderedProducts = products.map(item => {
        return <div className={classes.characteristic}>
            <p className={classes.characteristic__text}>{item.title}</p>
            <p className={classes.characteristic__price}>${item.price}</p>
        </div>
    })

    const chooseFreeShipping = () => {
        changeFreeShippingStatus(!isFreeShipping)
        countShippingTotal(subtotal)
    }
    const chooseFlatShipping = () => {
        changeFlatShippingStatus(!isFlatShipping)
        countShippingTotal(Number(subtotal) + Number('10.00') + '.00')
    }
    return (
        <div className={classes.order}>
            <div className={classes.title}>
                <h3>{t("your_order")}</h3>
            </div>
            <div className={classes.characteristics}>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>{t("product")}</p>
                    <p className={classes.characteristic__title}>{t("total")}</p>
                </div>
                {orderedProducts}
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>{t("subtotal")}</p>
                    <p className={classes.characteristic__price}>${subtotal}</p>
                </div>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>{t("shipping")}</p>
                    <div className={classes.shippingContent}>
                        <div className={classes.shippingContent__choosing}>
                            <input type="radio" onChange={chooseFreeShipping} name="shipping__checkoutPage" />
                            <p style={{ marginRight: '10px' }} className={classes.characteristic__text}>{t("free_shipping")}</p>
                        </div>
                        <div className={classes.shippingContent__choosing}>
                            <input type="radio" onChange={chooseFlatShipping} name="shipping__checkoutPage" />
                            <p style={{ marginRight: '10px' }} className={classes.characteristic__text}>{t("flat_rate")}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>{t("total")}</p>
                    <p className={classes.characteristic__price}>${Number(shippingTotal) === 0 ? subtotal : shippingTotal}</p>
                </div>
            </div>
            <div className={classes.btn_placeOrder}>
                <button>{t("place_order")}</button>
            </div>
        </div>
    )
}

export default Order