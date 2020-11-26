import React from 'react'
import classes from './cartTotals.module.scss'

const CartTotals = ({ subtotal, changeFreeShippingStatus, changeFlatShippingStatus, isFreeShipping, isFlatShipping, shippingTotal, countShippingTotal }) => {
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
                <h3>Cart Totals</h3>
            </div>
            <table className={classes.cartTotalsContent}>
                <thead>
                    <tr>
                        <td className={classes.tr_title}>Subtotal</td>
                        <td className={classes.price}>${subtotal}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.tr_title}>Shipping</td>
                        <td className={classes.shippingContent}>
                            <div className={classes.freeShipping + ' ' + classes.shippingStartOptionalItem}>
                                <input checked={isFreeShipping} onChange={chooseFreeShipping} type="radio" name="shipping" />
                                <p>Free Shipping</p>
                            </div>
                            <div className={classes.flatRate + ' ' + classes.shippingStartOptionalItem}>
                                <input checked={isFlatShipping} onChange={chooseFlatShipping} type="radio" name="shipping" />
                                <p>Flat Rate: </p>
                                <h6 className={classes.price} style={{ marginLeft: '12px' }}>$10.00</h6>
                            </div>
                            <div className={classes.calculateShipping}>
                                <h4>Calculate Shipping</h4>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className={classes.tr_title}>Total</td>
                        <td className={classes.price}>${Number(shippingTotal) === 0 ? subtotal : shippingTotal}</td>
                    </tr>
                </tfoot>
            </table>
            <div className={classes.btn_proceed}>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default CartTotals