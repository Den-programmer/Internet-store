import React from 'react'
import classes from './hotdeals.module.scss'
import { countRating } from '../../../../utils/function-helpers'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HotDeals = ({ sliderItems, sliderItemShown, changeHotDealsSliderItem, hotDealsTimer }) => {
    const { t } = useTranslation()
    // setTimeout(() => hotDealsTimer(), 1000)
    const products = sliderItems.map(item => {
        const data = countRating(item.rating)
        const { starsCount, greyStarsCount } = data
        const daysFormat = "0" + item.date.days.toString()
        const hoursFormat = "0" + item.date.hours.toString()
        const minutesFormat = "0" + item.date.minutes.toString()
        return (<NavLink to={"/Product/" + item.id} key={item.id} className={classes.productWrapper}>
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
                    <h6>{item.date.days < 10 ? daysFormat : item.date.days}</h6>
                    <p>{t("days")}</p>
                </div>
                <div className={classes.timer__hours}>
                    <h6>{item.date.hours < 10 ? hoursFormat : item.date.hours}</h6>
                    <p>{t("hrs")}</p>
                </div>
                <div className={classes.timer__minutes}>
                    <h6>{item.date.minutes < 10 ? minutesFormat : item.date.minutes}</h6>
                    <p>{t("mins")}</p>
                </div>
            </div>
        </NavLink>)
    })

    const clickPrev = () => {
        changeHotDealsSliderItem(sliderItemShown - 1)
    }
    const clickNext = () => {
        changeHotDealsSliderItem(sliderItemShown + 1)
    }
    return (<>
        {products.length !== 0 && <div className={classes.hotDeals}>
            <div className={classes.slider}>
                <div className={classes.sliderControl}>
                    <h4>{t("hot_deals")}</h4>
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
        </div>}
    </>)
}

export default HotDeals