import React from 'react'
import classes from './order.module.scss'

const Order = (props) => {
    return (
        <div className={classes.order}>
            <div className={classes.title}>
                <h3>Your Order</h3>
            </div>
            <div className={classes.characteristics}>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>Product</p>
                    <p className={classes.characteristic__title}>Total</p>
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
                    <p className={classes.characteristic__title}>Subtotal</p>
                    <p className={classes.characteristic__price}>16.00</p>
                </div>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>Shipping</p>
                    <div className={classes.shippingContent}>
                        <div className={classes.shippingContent__choosing}>
                            <input type="radio" name="shipping__checkoutPage" />
                            <p style={{ marginRight: '10px' }} className={classes.characteristic__text}>Free Shipping</p>
                        </div>
                        <div className={classes.shippingContent__choosing}>
                            <input type="radio" name="shipping__checkoutPage" />
                            <p style={{ marginRight: '10px' }} className={classes.characteristic__text}>Flat Rate</p>
                        </div>
                    </div>
                </div>
                <div className={classes.characteristic}>
                    <p className={classes.characteristic__title}>Total</p>
                    <p className={classes.characteristic__price}>$197.00</p>
                </div>
            </div>
            <div className={classes.btn_placeOrder}>
                <button>Place Order</button>
            </div>
        </div>
    )
}

export default Order