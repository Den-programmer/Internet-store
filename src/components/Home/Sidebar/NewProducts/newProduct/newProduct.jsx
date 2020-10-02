import React from 'react'
import classes from './newProduct.module.scss'
import { countRating } from '../../../../../utils/function-helpers'

const NewProduct = ({ photo, title, price, rating }) => {
    const data = countRating(rating)
    const { starsCount, greyStarsCount } = data
    return (
        <div className={classes.product}>
            <img className={classes.product_photo} src={photo} alt="" />
            <div className={classes.product_inf}>
                <h4>{title}</h4>
                <p className={classes.price}>${price}</p>
                <div className={classes.rating}>
                    {starsCount}
                    {greyStarsCount}
                </div>
            </div>
        </div>
    )
}

export default NewProduct