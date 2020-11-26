import React from 'react'
import classes from './commonMainHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faSearch, faShoppingBasket, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo/logo'
import CartPopup from './CartPopup/cartPopup'

const CommonMainHeader = ({ cartPopupStatus, setIsCartPopupOpenStatus, productsInCart, deleteFromCart, total }) => {
    const openPopup = () => setIsCartPopupOpenStatus(!cartPopupStatus)
    return (
        <div className={classes.mainHeader}>
            <Logo />
            <div className={classes.severalOptions}>
                <div className={classes.search}>
                    <input placeholder="Search..." type="text" />
                    <div className={classes.categories}>
                        <p>All Categories</p>
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
                                    {productsInCart.length} item:
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