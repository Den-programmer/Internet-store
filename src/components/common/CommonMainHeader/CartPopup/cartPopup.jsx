import React from 'react'
import classes from './cartPopup.module.scss'

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
                    {/* Don't forget count of products! */}
                </div>
            </div>
        )
    })
    return (
        <div className={classes.cartPopupWrapper}>
            <div className={classes.cartPopup}>
                <div className={classes.products}>
                    {Products}
                </div>
                <div className={classes.total}>
                    <h4>Order Total</h4>
                    <h5>$350.00</h5>
                </div>
                <div className={classes.enterCartPage}>
                    <div className={classes.btn_viewCart + ' ' + classes.enterCartPage__btns}>
                        <button>View Cart</button>
                    </div>
                    <div className={classes.btn_checkout + ' ' + classes.enterCartPage__btns}>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPopup