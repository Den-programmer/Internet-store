import React from 'react'
import classes from './cartList.module.scss'
import sadSmile from '../../../images/Smiles/sadSmile.jpg'
import CartProduct from './CartProduct/cartProduct'
import NoProducts from '../../common/NoProducts/noProducts'
import CartTotals from './CartTotals/cartTotals'

const CartList = ({ productsInCart, deleteFromCart, changeFreeShippingStatus, changeFlatShippingStatus, isFreeShipping, isFlatShipping, total, shippingTotal, countShippingTotal }) => {
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
                </div> : <NoProducts bordered={true} image={sadSmile} title={"To add here some products go to the "} link={"shop page"} path={"/Home/Shop"}/>}
            </div>
            <CartTotals isFreeShipping={isFreeShipping} isFlatShipping={isFlatShipping} 
            changeFreeShippingStatus={changeFreeShippingStatus} 
            changeFlatShippingStatus={changeFlatShippingStatus} 
            subtotal={total} shippingTotal={shippingTotal} countShippingTotal={countShippingTotal}/>
        </div>
    )
}

export default CartList