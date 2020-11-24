import React from 'react'
import classes from './product.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faLongArrowAltRight, faLongArrowAltLeft, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import uncoloredHeart from '../../../../images/heartUncolored.png'

const Product = ({ id, photo, title, price, isNew, isSale, hovered, starsCount, 
    greyStarsCount, onMouseMove, onMouseLeave, likeProduct, removeLike, like, productsPerRow }) => {
    const commonProductWidth = '230px'

    const styleWdthFive = { width: commonProductWidth } 
    const styleWdthFour = { width: '210px' }
    const styleWdthOne = { width: 'auto' } 

    const chosenProductStyle = productsPerRow === 5 ? styleWdthFive : productsPerRow === 4 ? styleWdthFour : styleWdthOne

    const onMouseMoveHandler = () => onMouseMove(id)
    const onMouseLeaveHandler = () => onMouseLeave()
    return (
        <div style={chosenProductStyle} onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler} className={classes.product}>
            {isNew && <div className={classes.new}>
                New
            </div>}
            {isSale && <div className={classes.sale}>
                Sale
            </div>}
            <img className={classes.product__photo} src={photo} alt="" />
            {hovered && <div style={chosenProductStyle} className={classes.additional_functions_Wrapper}><div className={classes.additional_functions}>
                    <div className={classes.basket}>
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
        </div> 
    )
}

export default Product