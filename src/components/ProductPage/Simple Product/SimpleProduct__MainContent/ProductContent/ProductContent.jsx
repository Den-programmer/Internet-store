import React from 'react'
import classes from './ProductContent.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faLongArrowAltRight, faLongArrowAltLeft, } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import uncoloredHeart from '../../../../../images/heartUncolored.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import pinterest from '../../images/pinterest.png'
import { countRating } from '../../../../../utils/function-helpers'

const ProductContent = (props) => {
    const data = countRating(4)
    const { starsCount, greyStarsCount } = data
    const onProductCountChange = (e) => {
        console.log(e.currentTarget.value)
    }
    return (
        <div className={classes.productContent}>
            <div className={classes.title}>
                <h2>Grey Stripped Hoodies</h2>
            </div>
            <div className={classes.rating}>
                {starsCount}
                {greyStarsCount}
            </div>
            <div className={classes.price}>
                <h3>$150.00</h3>
            </div>
            <div className={classes.description}>
                <p>
                    This regulator has a rolled diaphragm and high flow rate with reduced
                    pressure drop. It has an excellent degree of condensation separation and comes with a semi automatic or automatic drain.
                </p>
            </div>
            <div className={classes.quantity}>
                <div className={classes.count}>
                    <input type="text" value="1" onChange={onProductCountChange}/>
                </div>
                <div className={classes.control}>
                    <div className={classes.plus + ' ' + classes.controlSign}>
                        <p>&#43;</p>
                    </div>
                    <div className={classes.minus + ' ' + classes.controlSign}>
                        <p>&#45;</p>
                    </div>
                </div>
            </div>
            <div className={classes.productOptions}>
                <div className={classes.btn_addToCart}>
                    <div className={classes.button}>Add to Cart</div>
                    <NavLink to="/CartPage"><FontAwesomeIcon className={classes.cartIcon} icon={faShoppingCart} /></NavLink>
                </div>
                <div className={classes.like}>
                    <img className={classes.likeIcon} src={uncoloredHeart} alt="" />
                </div>
                <div className={classes.compare}>
                    <FontAwesomeIcon className={classes.left} icon={faLongArrowAltLeft} />
                    <FontAwesomeIcon className={classes.right} icon={faLongArrowAltRight} />
                </div>
            </div>
            <div className={classes.horizontal_line}></div>
            <div className={classes.technicalContent}>
                <p className={classes.characteristic}><span className={classes.property}>Sku:</span>017</p>
                <p className={classes.characteristic}><span className={classes.property}>Category:</span>Outerwear, Hoodies</p>
                <p className={classes.characteristic}><span className={classes.property}>Tags:</span>Clothing, Mens</p>
            </div>
            <div className={classes.horizontal_line}></div>
            <div className={classes.share}>
                <h4>Share:</h4>
                <div className={classes.shareBlocks}>
                    <div className={classes.shareItem}>
                        <img src={facebook} alt="" />
                        <p>Share</p>
                    </div>
                    <div className={classes.shareItem}>
                        <img src={twitter} alt="" />
                        <p>Tweet</p>
                    </div>
                    <div className={classes.shareItem}>
                        <img src={pinterest} alt="" />
                        <p>Pin it</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductContent