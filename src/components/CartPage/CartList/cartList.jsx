import React from 'react'
import classes from './cartList.module.scss'
import sadSmile from '../../../images/Smiles/sadSmile.jpg'
import CartProduct from './CartProduct/cartProduct'
import NoProducts from '../../common/NoProducts/noProducts'
import CartTotals from './CartTotals/cartTotals'
import { useTranslation } from 'react-i18next'

const CartList = ({ productsInCart, deleteFromCart, changeFreeShippingStatus, changeFlatShippingStatus, isFreeShipping, isFlatShipping, total, shippingTotal, countShippingTotal }) => {
    const { t } = useTranslation()
    const Products = productsInCart.map(item => {
        return <CartProduct deleteFromCart={deleteFromCart} key={item.id} id={item.id} title={item.title} price={item.price} photos={item.photos} />
    })
    return (
        <div className={classes.cartList}>
            <div className={classes.productContainer}>
                <div className={classes.controls}>
                    <div className={classes.title}>
                        <h5>{t("product")}</h5>
                    </div>
                    <div className={classes.price}>
                        <h5>{t("price")}</h5>
                    </div>
                    <div className={classes.quantity}>
                        <h5>{t("quantity")}</h5>
                    </div>
                    <div className={classes.total}>
                        <h5>{t("total")}</h5>
                    </div>
                </div>
                {Products.length !== 0 ? <div className={classes.products}>
                    {Products}
                </div> : <NoProducts bordered={true} image={sadSmile} title={t("to_add_products_go_to_the")} link={t("shop_page")} path={"/Home/Shop"}/>}
            </div>
            <CartTotals isFreeShipping={isFreeShipping} isFlatShipping={isFlatShipping} 
            changeFreeShippingStatus={changeFreeShippingStatus} 
            changeFlatShippingStatus={changeFlatShippingStatus} 
            subtotal={total} shippingTotal={shippingTotal} countShippingTotal={countShippingTotal}/>
        </div>
    )
}

export default CartList