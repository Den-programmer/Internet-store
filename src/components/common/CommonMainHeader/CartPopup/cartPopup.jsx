import React, { createRef } from 'react'
import classes from './cartPopup.module.scss'
import { NavLink } from 'react-router-dom'
import NoProducts from '../../NoProducts/noProducts'
import sadSmile from '../../../../images/Smiles/sadSmile.jpg'
import { useTranslation } from 'react-i18next'

const CartPopup = ({ productsInCart, setIsCartPopupOpenStatus, deleteFromCart, total }) => {
    const { t } = useTranslation()
    const cartPopupRef = createRef()

    document.addEventListener('click', e => {
        if (cartPopupRef.current && !cartPopupRef.current.contains(e.target)) setIsCartPopupOpenStatus(false)
    })

    const Products = productsInCart.map(item => {
        return (
            <div key={item.id} className={classes.product}>
                <div className={classes.image}>
                    <div onClick={() => deleteFromCart(item.id)} className={classes.delete}>&times;</div>
                    <img className={classes.productImage} src={item.photos[0]} alt="" />
                </div>
                <div className={classes.productInfo}>
                    <p className={classes.title}>{item.title}</p>
                    <h5>${item.price}</h5> 
                </div>
            </div>
        )
    })
    return (
        <div ref={cartPopupRef} className={classes.cartPopupWrapper}>
            <div className={classes.cartPopup}>
                {Products.length !== 0 ? <div className={classes.products}>
                    {Products}
                </div> : <NoProducts bordered={false} image={sadSmile} title={t("go_to_the")} link={t("shop_page")} path={"/Home/Shop"}/>}
                <div className={classes.total}>
                    <h4>{t("order_total")}</h4>
                    <h5>${total}</h5>
                </div>
                <div className={classes.enterCartPage}>
                    <div className={classes.btn_viewCart + ' ' + classes.enterCartPage__btns}>
                        <NavLink to="/CartPage">{t("view_cart")}</NavLink>
                    </div>
                    <div className={classes.btn_checkout + ' ' + classes.enterCartPage__btns}>
                        <NavLink to="/Checkout">{t("checkout")}</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPopup