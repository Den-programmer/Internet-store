import React from 'react'
import classes from './commonMainHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo/logo'
import CartPopup from './CartPopup/cartPopup'

const CommonMainHeader = ({ cartPopupStatus, setIsCartPopupOpenStatus, productsInCart }) => {
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
                            <div className={classes.shoppingBasket}>
                                <FontAwesomeIcon icon={faShoppingBasket} />
                            </div>
                            <div onClick={openPopup} className={classes.shoppingInf}>
                                <p>
                                    0 item:
                                </p>
                                <span>$0.00</span>
                            </div>
                            {cartPopupStatus && <CartPopup productsInCart={productsInCart}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonMainHeader