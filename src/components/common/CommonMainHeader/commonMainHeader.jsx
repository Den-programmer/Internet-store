import React from 'react'
import classes from './commonMainHeader.module.scss'
import basket from '../../../images/basket.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const CommonMainHeader = (props) => {
    return (
        <div className={classes.mainHeader}>
            <NavLink className={classes.logoWrapper} to="/">
                <div className={classes.logo}>
                    <img src={basket} alt="" />
                    <h3>Supermart</h3>
                </div>
            </NavLink>
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
    )
}

export default CommonMainHeader