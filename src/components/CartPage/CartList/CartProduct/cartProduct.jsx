import React, { useState } from 'react'
import classes from './cartProduct.module.scss'
import removeBtn from '../../../../images/remove.png'
import removeBtnHovered from '../../../../images/remove2.png'

const CartProduct = ({ title, id, photo, price, deleteFromCart }) => {
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
            <div className={classes.quantity}>
                <select>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
            </div>
            <div className={classes.total}>
                <h4>${price}</h4>
            </div>
            <div className={classes.btn_remove}>
                {isRemoveBtnHovered ? <img onClick={() => deleteFromCart(id)} onMouseLeave={removeBtnUnHoveredHandler} src={removeBtnHovered} alt="" /> : 
                <img onClick={() => deleteFromCart(id)} onMouseMove={removeBtnHoverHandler} src={removeBtn} alt="" />}
            </div>
        </div>
    )
}

export default CartProduct