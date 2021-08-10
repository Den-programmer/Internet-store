import React from 'react'
import classes from './productStandart.module.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faLongArrowAltRight, faLongArrowAltLeft, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import uncoloredHeart from '../../../images/heartUncolored.png'
import { useTranslation } from 'react-i18next'

const ProductStandart = ({ 
    id, photo, title, price, isNew, isSale, hovered, starsCount, 
    greyStarsCount, onMouseMove, onMouseLeave, likeProduct, removeLike, addToCart, like, setProductId,
    isInCart, isInStock, isCompare
}) => {
    const { t } = useTranslation()  

    const onMouseMoveHandler = () => onMouseMove(id)
    const onMouseLeaveHandler = () => onMouseLeave()
    const productHandler = () => setProductId(id)
    return (
        <NavLink to={"/Product/" + id} onClick={productHandler} onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler} key={id} className={classes.product}>
            {isNew && <div className={classes.new}>
                {t("new")}
            </div>}
            {isSale && <div className={classes.sale}>
                {t("sale")}
            </div>}
            <img className={classes.product__photo} src={photo} alt="" />
            {hovered && <div className={classes.additional_functions_Wrapper}><div className={classes.additional_functions}>
                    <div onClick={() => addToCart(id)} className={classes.basket}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                        {like ? <div onClick={() => removeLike(id)} className={classes.like}><FontAwesomeIcon icon={faHeart} /></div> :
                        <div onClick={() => likeProduct(id)} className={classes.like}><img src={uncoloredHeart} alt=""/></div>}
                    <div className={classes.comprison}>
                        <FontAwesomeIcon className={classes.rightArrow} icon={faLongArrowAltRight} />
                        <FontAwesomeIcon className={classes.leftArrow} icon={faLongArrowAltLeft} />
                    </div>
                    <div className={classes.view}>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
            </div></div>}
            <div className={classes.product__information}>
                <h4>{title}</h4>
                <p>${price}</p>
                <div className={classes.rating}>
                    {starsCount}
                    {greyStarsCount}
                </div>
            </div>
        </NavLink>
    )
}

export default ProductStandart