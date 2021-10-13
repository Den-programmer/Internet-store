import React, { useEffect } from 'react'
import classes from './commonMainHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faSearch, faShoppingBasket, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo/logo'
import CartPopup from './CartPopup/cartPopup'
import { useTranslation } from 'react-i18next'

const CommonMainHeader = (props) => {
    const { t } = useTranslation()
    const searchInput = React.createRef()
    const openPopup = () => props.setIsCartPopupOpenStatus(!props.cartPopupStatus)
    const setSearchText = (e) => {
        props.changeSearchText(e.currentTarget.value)
        props.history.push("/Home/Shop")
    }
    useEffect(() => {
        searchInput.current.focus()
    })
    return (
        <div className={classes.mainHeader}>
            <Logo />
            <div className={classes.severalOptions}>
                <div className={classes.search}>
                    <input ref={searchInput} placeholder={t("search")} onChange={setSearchText} type="text" value={props.searchText} />
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
                                    {props.productsInCart.length}:
                                </p>
                                <span>${props.total}</span>
                            </div>
                            {props.cartPopupStatus && <CartPopup total={props.total} deleteFromCart={props.deleteFromCart} setIsCartPopupOpenStatus={props.setIsCartPopupOpenStatus} productsInCart={props.productsInCart} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonMainHeader