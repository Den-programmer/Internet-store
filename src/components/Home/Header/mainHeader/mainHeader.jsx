import React from 'react'
import classes from './mainHeader.module.scss'
import basket from './img/basket.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import CartPopup from '../../../common/CommonMainHeader/CartPopup/cartPopup'
import { useTranslation } from 'react-i18next'

const MainHeader = ({ deleteFromCart, cartPopupStatus, productsInCart, setIsCartPopupOpenStatus, total, history, searchText, changeSearchText }) => {
    const { t } = useTranslation()
    const openPopup = () => setIsCartPopupOpenStatus(!cartPopupStatus)
    const setSearchText = (e) => {
        changeSearchText(e.currentTarget.value)
        history.push('/Home/Shop')
    }
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
                        <input placeholder={t("search")} onChange={setSearchText} type="text" value={searchText}/>
                        <div className={classes.categories}>
                            <h4>{t("all_categories")}</h4>
                            <FontAwesomeIcon className={classes.angleDownIcon} icon={faAngleDown} />
                        </div>
                        <div className={classes.searchIcon}>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <div className={classes.basket}>
                        <NavLink className={classes.navlink} to="/CartPage">
                            <div className={classes.shoppingBasketIcon}>
                                <FontAwesomeIcon icon={faShoppingBasket} />
                            </div>
                        </NavLink>
                        <div onClick={openPopup} className={classes.shoppingBoughtItems}>
                            <p>{productsInCart.length}: </p>
                            <span>${total}</span>
                        </div>
                        {cartPopupStatus && <div className={classes.cartPopupContainer}><CartPopup
                            total={total}
                            deleteFromCart={deleteFromCart}
                            setIsCartPopupOpenStatus={setIsCartPopupOpenStatus}
                            productsInCart={productsInCart} productsInCart={productsInCart} /></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader