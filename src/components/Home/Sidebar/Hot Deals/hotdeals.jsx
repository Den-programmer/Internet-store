import React from 'react'
import classes from './hotdeals.module.scss'
import { countRating } from '../../../../utils/function-helpers'

const HotDeals = ({ sliderItems, sliderItemShown, changeHotDealsSliderItem }) => {
    const products = sliderItems.map(item => {
        const data = countRating(item.rating)
        const { starsCount, greyStarsCount } = data
        return (<div key={item.id} className={classes.productWrapper}>
            <div className={classes.product}>
                <img className={classes.product__photo} src={item.photo} alt="" />
                <div className={classes.productInf}>
                    <h3 className={classes.product__title}>{item.title}</h3>
                    <h5 className={classes.product__price}>${item.price}</h5>
                    <div className={classes.rating}>
                        {starsCount}
                        {greyStarsCount}
                    </div>
                </div>
            </div>
            <div className={classes.timer}>
            <div className={classes.timer__days}>
                <h6>{item.date.days}</h6>
                <p>Days</p>
            </div>
            <div className={classes.timer__hours}>
                <h6>{item.date.hours}</h6>
                <p>Hrs</p>
            </div>
            <div className={classes.timer__minutes}>
                <h6>{item.date.minutes}</h6>
                <p>Mins</p>
            </div>
        </div>
        </div>)
    })

    const clickPrev = () => {
        changeHotDealsSliderItem(sliderItemShown - 1)
    }
    const clickNext = () => {
        changeHotDealsSliderItem(sliderItemShown + 1)
    }
    return (
        <div className={classes.hotDeals}>
            <div className={classes.slider}>
                <div className={classes.sliderControl}>
                    <h4>Hot Deals</h4>
                    <div className={classes.sliderBtns}>
                        <div onClick={clickPrev} className={classes.btn_prev}>
                            <button>&#60;</button>
                        </div>
                        <div onClick={clickNext} className={classes.btn_next}>
                            <button>&#62;</button>
                        </div>
                    </div>
                </div>
                {products[sliderItemShown - 1]}
            </div>
        </div>
    )
}

export default HotDeals