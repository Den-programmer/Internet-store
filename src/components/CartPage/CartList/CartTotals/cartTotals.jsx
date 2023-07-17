import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './cartTotals.module.scss'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const CartTotals = ({ subtotal, changeFreeShippingStatus, changeFlatShippingStatus, isFreeShipping, isFlatShipping, shippingTotal, countShippingTotal }) => {
    const { t } = useTranslation() 
    const chooseFreeShipping = () => {
        changeFreeShippingStatus(!isFreeShipping)
        countShippingTotal(subtotal)
    }
    const chooseFlatShipping = () => {
        changeFlatShippingStatus(!isFlatShipping)
        countShippingTotal(Number(subtotal) + Number('10.00') + '.00')
    }
    return (
        <div className={classes.cartTotals}>
            <div className={classes.title}>
                <h3>{t("cart_totals")}</h3>
            </div>
            <table className={classes.cartTotalsContent}>
                <thead>
                    <tr>
                        <td className={classes.tr_title}>{t("subtotal")}</td>
                        <td className={classes.price}>${subtotal}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.tr_title}>{t("shipping")}</td>
                        <td className={classes.shippingContent}>
                            <div className={classes.freeShipping + ' ' + classes.shippingStartOptionalItem}>
                                <input checked={isFreeShipping} onChange={chooseFreeShipping} type="radio" name="shipping" />
                                <p>{t("free_shipping")}</p>
                            </div>
                            <div className={classes.flatRate + ' ' + classes.shippingStartOptionalItem}>
                                <input checked={isFlatShipping} onChange={chooseFlatShipping} type="radio" name="shipping" />
                                <p>{t("flat_rate")}: </p>
                                <h6 className={classes.price} style={{ marginLeft: '12px' }}>$10.00</h6>
                            </div>
                            <div className={classes.calculateShipping}>
                                <h4>{t("calculate_shipping")}</h4>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className={classes.tr_title}>{t("total")}</td>
                        <td className={classes.price}>${Number(shippingTotal) === 0 ? subtotal : shippingTotal}</td>
                    </tr>
                </tfoot>
            </table>
            <div className={classes.btn_proceed}>
                <button><NavLink to="/Checkout">{t("proceed_to_checkout")}</NavLink></button>
            </div>
        </div>
    )
}

export default CartTotals