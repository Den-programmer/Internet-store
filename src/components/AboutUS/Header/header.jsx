import React from 'react'
import classes from './header.module.scss'
import basket from '../../../images/basket.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faHeart, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <header>
            <div className={classes.loginPanelWrapper}>
                <div className={classes.loginPanel}>
                    <div className={classes.login}>
                        <p>
                            Login
                        </p>
                        <span>/</span>
                        <p className={classes.signup}>
                            Signup
                        </p>
                        <div className={classes.border}>|</div>
                    </div>
                    <div className={classes.currency}>
                        USD
                    </div>
                    <div className={classes.smallNavbar}>
                        <ul>
                            <li>Help</li>
                            <li className={classes.vertical_line}>|</li>
                            <li><FontAwesomeIcon className={classes.heartIcon} icon={faHeart} />Wishlist</li>
                        </ul>
                        <p className={classes.vertical_line}>|</p>
                        <p>
                            English
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.mainHeader}>
                <div className={classes.logo}>
                    <img src={basket} alt="" />
                    <h3>Supermart</h3>
                </div>
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
                                <div className={classes.shoppingInf}>
                                    <p>
                                        0 item:
                                    </p>
                                    <span>$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.navbarWrapper}>
                <div className={classes.navbar}>
                    <div className={classes.departments}>
                        <h3>Departments</h3>
                        <FontAwesomeIcon className={classes.barsIcon} icon={faBars} />
                    </div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Fashion</li>
                            <li>Electronics</li>
                            <li>Pages</li>
                            <li>Features</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                    <div className={classes.contacts}>
                        <p>Call us free:</p>
                        <span>1-800-777-7889</span>
                    </div>
                </div>
            </div>
            <div className={classes.pageNameWrapper}>
                <div className={classes.pageName}>
                    <div className={classes.pageName__Title}>
                        <h2>About Us</h2>
                    </div>
                    <div className={classes.pageName__path}>
                        <h3>Home/About US</h3>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header