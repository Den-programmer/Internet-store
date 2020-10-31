import React from 'react'
import classes from './cartList.module.scss'
import sadSmile from '../../../images/Smiles/sadSmile.jpg'
import { NavLink } from 'react-router-dom'
import CartProduct from './CartProduct/cartProduct'

const CartList = ({ productsInCart, deleteFromCart }) => {
    const Products = productsInCart.map(item => {
        return <CartProduct deleteFromCart={deleteFromCart} key={item.id} id={item.id} title={item.title} price={item.price} photo={item.photo} />
    })
    return (
        <div className={classes.cartList}>
            <div className={classes.productContainer}>
                <div className={classes.controls}>
                    <div className={classes.title}>
                        <h5>Product</h5>
                    </div>
                    <div className={classes.price}>
                        <h5>Price</h5>
                    </div>
                    <div className={classes.quantity}>
                        <h5>Quantity</h5>
                    </div>
                    <div className={classes.total}>
                        <h5>Total</h5>
                    </div>
                </div>
                {Products.length !== 0 ? <div className={classes.products}>
                    {Products}
                </div> : <div className={classes.noProducts}>
                        <img className={classes.sadSmile} src={sadSmile} alt="" />
                        <h4>To add here some products go to the <NavLink to="/Home/Shop">shop page</NavLink>!</h4>
                    </div>}
            </div>
            <div className={classes.cartTotals}>
                <div className={classes.title}>
                    <h3>Cart Totals</h3>
                </div>
                <table className={classes.cartTotalsContent}>
                    <thead>
                        <tr>
                            <td className={classes.tr_title}>Subtotal</td>
                            <td className={classes.price}>$87.00</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={classes.tr_title}>Shipping</td>
                            <td className={classes.shippingContent}>
                                <div className={classes.freeShipping + ' ' + classes.shippingStartOptionalItem}>
                                    <input type="radio" name="shipping" />
                                    <p>Free Shipping</p>
                                </div>
                                <div className={classes.flatRate + ' ' + classes.shippingStartOptionalItem}>
                                    <input type="radio" name="shipping" />
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
                            <td className={classes.price}>$197.00</td>
                        </tr>
                    </tfoot>
                </table>
                <div className={classes.btn_proceed}>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartList