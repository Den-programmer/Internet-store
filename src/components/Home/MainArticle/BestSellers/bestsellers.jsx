import React from 'react'
import classes from './bestsellers.module.scss'
import { countRating } from '../../../../utils/function-helpers'

const BestSellers = ({ bestsellers }) => {
    const BestSellers = bestsellers.map(item => {
        const data = countRating(item.rating)
        const { starsCount, greyStarsCount } = data
        return (
            <div key={item.id} className={classes.bestseller}>
                {item.isNew && <div className={classes.new}>
                    New
                </div>}
                {item.isSale && <div className={classes.sale}>
                    Sale
                </div>}
                <img className={classes.bestseller__photo} src={item.photo} alt="" />
                <div className={classes.bestseller__content}>
                    <h4 className={classes.bestseller__title}>{item.title}</h4>
                    <p className={classes.price}>${item.price}</p>
                    <div className={classes.rating}>
                        {starsCount}
                        {greyStarsCount}
                    </div>
                    <div className={classes.bestseller__btn}><button>{item.isInCart ? 'Select Options' : 'Add to cart'}</button></div>
                </div>
            </div>
        )
    })
    return (
        <section className={classes.bestsellers}>
            <div className={classes.bestsellers__header}>
                <div className={classes.title}>
                    <h3>Best Sellers</h3>
                </div>
                <div className={classes.control_btns}>
                    <div className={classes.btn_prev}><div>&#60;</div></div>
                    <div className={classes.btn_next}><div>&#62;</div></div>
                </div>
            </div>
            <div className={classes.mainContent}>
                {BestSellers}
            </div>
        </section>
    )
}

export default BestSellers