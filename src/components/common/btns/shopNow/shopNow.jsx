import React from 'react'
import classes from './shopNow.module.scss'

const BtnShopNow = ({ click }) => {
    return (
        <div onClick={click} className={classes.btn_shopNow}> 
            <button>Shop Now</button>
        </div>
    )
}

export default BtnShopNow