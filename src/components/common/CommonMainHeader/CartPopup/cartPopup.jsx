import React from 'react'
import classes from './cartPopup.module.scss'
import { NavLink } from 'react-router-dom'
import NoProducts from '../../NoProducts/noProducts'
import sadSmile from '../../../../images/Smiles/sadSmile.jpg'

const CartPopup = ({ productsInCart }) => {
    const Products = productsInCart.map(item => {
        return (
            <div key={item.id} className={classes.product}>
                <div className={classes.image}>
                    <div className={classes.delete}>&times;</div>
                    <img className={classes.productImage} src={item.photo} alt="" />
                </div>
                <div className={classes.productInfo}>
                    <p className={classes.title}>{item.title}</p>
                    <h5>${item.price}</h5> 
                </div>
            </div>
        )
    })
    return (
        <div className={classes.cartPopupWrapper}>
            <div className={classes.cartPopup}>
                {Products.length !== 0 ? <div className={classes.products}>
                    {Products}
                </div> : <NoProducts bordered={false} image={sadSmile} title={"Go to the "} link={"shop page"} path={"/Home/Shop"}/>}
                <div className={classes.total}>
                    <h4>Order Total</h4>
                    <h5>$350.00</h5>
                </div>
                <div className={classes.enterCartPage}>
                    <div className={classes.btn_viewCart + ' ' + classes.enterCartPage__btns}>
                        <NavLink to="/CartPage">View Cart</NavLink>
                    </div>
                    <div className={classes.btn_checkout + ' ' + classes.enterCartPage__btns}>
                        <NavLink to="/Checkout">Checkout</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPopup