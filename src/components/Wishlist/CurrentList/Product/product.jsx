import React, { useState } from 'react'
import classes from './product.module.scss'
import removeBtn from '../../../../images/remove.png'
import removeBtnHovered from '../../../../images/remove2.png'

const Product = ({ title, id, photo, price, isInCard, isInStock, deleteFromWishlist }) => {
    const [isRemoveBtnHovered, setRemoveBtnStatus] = useState(false)
    const removeBtnHoverHandler = () => setRemoveBtnStatus(true)
    const removeBtnUnHoveredHandler = () => setRemoveBtnStatus(false)
    return (
        <div className={classes.product}>
            <div className={classes.item}>
                <img src={photo} alt="" />
                <p>{title}</p>
            </div>
            <div className={classes.price}>
                <h4>${price}</h4>
            </div>
            <div className={classes.isStockStatus}>
                {isInStock ? <p className={classes.InStock}>In Stock</p> : <p className={classes.OutOfStock}>Out of Stock</p>}
            </div>
            <div className={classes.btn_addToCart}>
                {isInCard ? <button>Add to cart</button> : <div className={classes.withoutButton}></div>}
            </div>
            <div className={classes.btn_remove}>
                {isRemoveBtnHovered ? <img onClick={() => deleteFromWishlist(id)} onMouseLeave={removeBtnUnHoveredHandler} src={removeBtnHovered} alt="" /> : 
                <img onClick={() => deleteFromWishlist(id)} onMouseMove={removeBtnHoverHandler} src={removeBtn} alt="" />}
            </div>
        </div>
    )
}

export default Product