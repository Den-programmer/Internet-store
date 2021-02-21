import React from 'react'
import classes from './newProduct.module.scss'
import { countRating } from '../../../../../utils/function-helpers'
import { NavLink } from 'react-router-dom'

const NewProduct = ({ id, photo, title, price, rating, setProductId }) => {
    const productHandler = () => setProductId(id)
    const data = countRating(rating)
    const { starsCount, greyStarsCount } = data
    return (
        <NavLink to={"/Product/" + id} onClick={productHandler} className={classes.product}>
            <img className={classes.product_photo} src={photo} alt="" />
            <div className={classes.product_inf}>
                <h4>{title}</h4>
                <p className={classes.price}>${price}</p>
                <div className={classes.rating}>
                    {starsCount}
                    {greyStarsCount}
                </div>
            </div>
        </NavLink>
    )
}

export default NewProduct