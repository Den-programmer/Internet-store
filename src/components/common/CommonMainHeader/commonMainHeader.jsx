import React from 'react'
import classes from './commonMainHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faSearch, faShoppingBasket, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo/logo'
import CartPopup from './CartPopup/cartPopup'
import { useTranslation } from 'react-i18next'

const CommonMainHeader = ({ cartPopupStatus, setIsCartPopupOpenStatus, productsInCart, deleteFromCart, total }) => {
    const { t } = useTranslation()
    const openPopup = () => setIsCartPopupOpenStatus(!cartPopupStatus)
    return (
        <div className={classes.mainHeader}>
            <Logo />
            <div className={classes.severalOptions}>
                <div className={classes.search}>
                    <input placeholder={t("search")} type="text" />
                    <div className={classes.categories}>
                        <p>{t("all_categories")}</p>
                        <FontAwesomeIcon className={classes.categoriesArrowDown} icon={faAngleDown} />
                    </div>
                    <div className={classes.searchIcon}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className={classes.items}>
                        <div className={classes.bag}>
                            <NavLink className={classes.navlink} to="/CartPage">
                                <div className={classes.shoppingBasket}>
                                    <FontAwesomeIcon icon={faShoppingBasket} />
                                </div>
                            </NavLink>
                            <div onClick={openPopup} className={classes.shoppingInf}>
                                <p>
                                    {productsInCart.length}:
                                </p>
                                <span>${total}</span>
                            </div>
                            {cartPopupStatus && <CartPopup total={total} deleteFromCart={deleteFromCart} setIsCartPopupOpenStatus={setIsCartPopupOpenStatus} productsInCart={productsInCart} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonMainHeader