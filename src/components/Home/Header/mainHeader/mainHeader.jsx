import React from 'react'
import classes from './mainHeader.module.scss'
import basket from './img/basket.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import CartPopup from '../../../common/CommonMainHeader/CartPopup/cartPopup'

const MainHeader = ({ cartPopupStatus, productsInCart, setIsCartPopupOpenStatus }) => {
    const openPopup = () => setIsCartPopupOpenStatus(!cartPopupStatus)
    return (
        <div className={classes.mainHeaderWrapper}>
            <div className={classes.mainHeader}>
                <NavLink to="/">
                    <div className={classes.logo}>
                        <img src={basket} alt="" />
                        <h1>Supermart</h1>
                    </div>
                </NavLink>
                <div className={classes.mainPanel}>
                    <div className={classes.searchPanel}>
                        <input placeholder="Search..." type="text" />
                        <div className={classes.categories}>
                            <h4>All Categories</h4>
                            <FontAwesomeIcon className={classes.angleDownIcon} icon={faAngleDown} />
                        </div>
                        <div className={classes.searchIcon}>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <div className={classes.basket}>
                        <div className={classes.shoppingBasketIcon}>
                            <FontAwesomeIcon icon={faShoppingBasket} />
                        </div>
                        <div onClick={openPopup} className={classes.shoppingBoughtItems}>
                            <p>0 item: </p>
                            <span>$0.00</span>
                        </div>
                        {cartPopupStatus && <div className={classes.cartPopupContainer}><CartPopup productsInCart={productsInCart}/></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader