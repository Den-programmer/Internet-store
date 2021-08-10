import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './order.module.scss'

const Order = (props) => {
    const { t } = useTranslation()
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
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__text}>Jackets &#38; Coats Hoodies</p>
                    <p className={classes.characteristic__price}>$190.00</p>
                </div>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__text}>Green Printed Backback</p>
                    <p className={classes.characteristic__price}>$35.00</p>
                </div>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__text}>Kickers Kick Casual Shoes</p>
                    <p className={classes.characteristic__price}>$87.00</p>
                </div>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>{t("subtotal")}</p>
                    <p className={classes.characteristic__price}>16.00</p>
                </div>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>{t("shipping")}</p>
                    <div className={classes.shippingContent}>
                        <div className={classes.shippingContent__choosing}>
                            <input type="radio" name="shipping__checkoutPage" />
                            <p style={{ marginRight: '10px' }} className={classes.characteristic__text}>{t("free_shipping")}</p>
                        </div>
                        <div className={classes.shippingContent__choosing}>
                            <input type="radio" name="shipping__checkoutPage" />
                            <p style={{ marginRight: '10px' }} className={classes.characteristic__text}>{t("flat_rate")}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>{t("total")}</p>
                    <p className={classes.characteristic__price}>$197.00</p>
                </div>
            </div>
            <div className={classes.btn_placeOrder}>
                <button>{t("place_order")}</button>
            </div>
        </div>
    )
}

export default Order