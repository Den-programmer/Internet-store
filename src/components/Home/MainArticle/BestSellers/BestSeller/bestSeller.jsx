import React from 'react'
import classes from './bestSeller.module.scss'

const BestSeller = (props) => {
    return (
        <div className={classes.bestseller}>
            {props.isNew && <div className={classes.new}>
                New
            </div>}
            {props.isSale && <div className={classes.sale}>
                Sale
                </div>}
            <img className={classes.bestseller__photo} src={props.photo} alt="" />
            <div className={classes.bestseller__content}>
                <h4 className={classes.bestseller__title}>{props.title}</h4>
                <p className={classes.price}>${props.price}</p>
                <div className={classes.rating}>
                    {props.starsCount}
                    {props.greyStarsCount}
                </div>
                <div className={classes.bestseller__btn}><button>{props.isInCart ? 'Select Options' : 'Add to cart'}</button></div>
            </div>
        </div>
    )
}

export default BestSeller