import React from 'react'
import classes from './ProductContent.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faLongArrowAltRight, faLongArrowAltLeft, } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import uncoloredHeart from '../../../../../images/heartUncolored.png'
import coloredHeart from '../../../../../images/heartColored.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import pinterest from '../../images/pinterest.png'
import { countRating } from '../../../../../utils/function-helpers'
import { useTranslation } from 'react-i18next'

const ProductContent = ({ currentProduct, addToCart, removeLike, likeProduct }) => {
    const { t } = useTranslation()
    const currentStyle = { display: 'inline-flex', alignItems: 'center' }
    const data = countRating(4)
    const { starsCount, greyStarsCount } = data
    const categoties = currentProduct.category.map((item, index) => {
        return <span style={ currentStyle } key={index}><span>{item}</span>{index + 1 !== currentProduct.category.length && <span style={{ marginRight: '4px' }}>,</span>}</span>
    })
    const tags = currentProduct.tags.map((item, index) => {
        return <span style={ currentStyle } key={index}><span>{item}</span>{index + 1 !== currentProduct.tags.length && <span style={{ marginRight: '4px' }}>,</span>}</span>
    })
    const onProductCountChange = (e) => {
        console.log(e.currentTarget.value)
    }
    return (
        <div className={classes.productContent}>
            <div className={classes.title}>
                <h2>{currentProduct.title}</h2>
            </div>
            <div className={classes.rating}>
                {starsCount}
                {greyStarsCount}
            </div>
            <div className={classes.price}>
                <h3>${currentProduct.price}</h3>
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
                    <div className={classes.button} onClick={() => addToCart(currentProduct.id)}>{t("add_to_cart")}</div>
                    <NavLink to="/CartPage"><FontAwesomeIcon className={classes.cartIcon} icon={faShoppingCart} /></NavLink>
                </div>
                {currentProduct.like ?  <div onClick={() => removeLike(currentProduct.id)} className={classes.like}>
                    <img className={classes.likeIcon} src={coloredHeart} alt="" />
                </div> : <div onClick={() => likeProduct(currentProduct.id)} className={classes.like}>
                    <img className={classes.likeIcon} src={uncoloredHeart} alt="" />
                </div>}
                <div className={classes.compare}>
                    <FontAwesomeIcon className={classes.left} icon={faLongArrowAltLeft} />
                    <FontAwesomeIcon className={classes.right} icon={faLongArrowAltRight} />
                </div>
            </div>
            <div className={classes.horizontal_line}></div>
            <div className={classes.technicalContent}>
                <p className={classes.characteristic}><span className={classes.property}>{t("sku")}:</span>0{currentProduct.id}</p>
                <p className={classes.characteristic}><span className={classes.property}>{t("category")}:</span>{categoties}</p>
                <p className={classes.characteristic}><span className={classes.property}>{t("tags")}:</span>{tags}</p>
            </div>
            <div className={classes.horizontal_line}></div>
            <div className={classes.share}>
                <h4>{t("share")}:</h4>
                <div className={classes.shareBlocks}>
                    <div className={classes.shareItem}>
                        <img src={facebook} alt="" />
                        <p>{t("share")}</p>
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