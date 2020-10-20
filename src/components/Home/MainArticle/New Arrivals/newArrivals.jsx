import React from 'react'
import classes from './newArrivals.module.scss'
import { countRating } from '../../../../utils/function-helpers'
import ProductStandart from '../../../common/productStandart/productStandart'
import Slider from 'react-slick'
import Btn_Prev from '../CommonSliderBtns/Btn_Prev/Btn_Prev'
import Btn_Next from '../CommonSliderBtns/Btn_Next/Btn_Next'

const NewArrivals = ({ newArrivals, changeArrivalsHoveredStatus, unsetArrivalAsHovered, likeProduct, removeLike }) => {
    let slider = React.createRef()
    const arrivals = newArrivals.map(a => {
        const data = countRating(a.rating)
        const { starsCount, greyStarsCount } = data
        return <ProductStandart key={a.id}
            id={a.id}
            photo={a.photo}
            title={a.title}
            price={a.price}
            isNew={a.isNew}
            isSale={a.isSale}
            hovered={a.hovered}
            starsCount={starsCount}
            greyStarsCount={greyStarsCount}
            onMouseMove={changeArrivalsHoveredStatus}
            onMouseLeave={unsetArrivalAsHovered}
            like={a.like}
            likeProduct={likeProduct}
            removeLike={removeLike} />
    })
    const clickPrev = () => {
        slider.slickPrev()
    }
    const clickNext = () => {
        slider.slickNext()
    }   
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        speed: 500,
        className: classes.arrivals,
        adaptiveHeight: false
    }
    return (
        <section className={classes.newArrivals}>
            <div className={classes.newArrivals__header}>
                <div className={classes.title}>
                    <h3>New Arrivals</h3>
                </div>
                <div className={classes.navigation}>
                    <ul>
                        <li><a href="/">All</a></li>
                        <li><a href="/">Fashion</a></li>
                        <li><a href="/">Mobile</a></li>
                        <li><a href="/">Electronics</a></li>
                        <li><a href="/">Foods</a></li>
                        <li><a href="/">Sports</a></li>
                    </ul>
                </div>
                <div className={classes.control_btns}>
                    <Btn_Prev click={clickPrev}/>
                    <Btn_Next click={clickNext}/>
                </div>
            </div>
            <Slider ref={sliderRef => (slider = sliderRef)} {...settings}>
               {arrivals}
            </Slider>
        </section>
    )
}

export default NewArrivals 