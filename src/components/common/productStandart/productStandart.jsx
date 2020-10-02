import React from 'react'
import classes from './productStandart.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faLongArrowAltRight, faLongArrowAltLeft, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'

const ProductStandart = ({ id, photo, title, price, isNew, isSale, hovered, starsCount, greyStarsCount, onMouseMove, onMouseLeave }) => {
    const onMouseMoveHandler = () => onMouseMove(id)
    const onMouseLeaveHandler = () => onMouseLeave()
    return (
        <div onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler} key={id} className={classes.product}>
            {isNew && <div className={classes.new}>
                New
            </div>}
            {isSale && <div className={classes.sale}>
                Sale
            </div>}
            <img className={classes.product__photo} src={photo} alt="" />
            {hovered && <div className={classes.additional_functions}>
                    <div className={classes.basket}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    <div className={classes.like}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className={classes.comprison}>
                        <FontAwesomeIcon className={classes.rightArrow} icon={faLongArrowAltRight} />
                        <FontAwesomeIcon className={classes.leftArrow} icon={faLongArrowAltLeft} />
                    </div>
                    <div className={classes.view}>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
            </div>}
            <div className={classes.product__information}>
                <h4>{title}</h4>
                <p>${price}</p>
                <div className={classes.rating}>
                    {starsCount}
                    {greyStarsCount}
                </div>
            </div>
        </div>
    )
}

export default ProductStandart