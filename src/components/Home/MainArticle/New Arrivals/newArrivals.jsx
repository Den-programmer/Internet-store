import React from 'react'
import classes from './newArrivals.module.scss'
import { countRating } from '../../../../utils/function-helpers'
import ProductStandart from '../../../common/productStandart/productStandart'
import Slider from 'react-slick'
import Btn_Prev from '../CommonSliderBtns/Btn_Prev/Btn_Prev'
import Btn_Next from '../CommonSliderBtns/Btn_Next/Btn_Next'
import { useTranslation } from 'react-i18next'

const NewArrivals = ({ newArrivals, changeArrivalsHoveredStatus, unsetArrivalAsHovered, likeProduct, removeLike, setProductId, addToCart }) => {
    const { t } = useTranslation()
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
            removeLike={removeLike} 
            isInCart={a.isInCart}
            isInStock={a.isInStock}
            isCompare={a.isCompare}
            setProductId={setProductId}
            addToCart={addToCart}/>
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
                    <h3>{t("new_arrivals")}</h3>
                </div>
                <div className={classes.navigation}>
                    <ul>
                        <li><a href="/">{t("all")}</a></li>
                        <li><a href="/">{t("Fashion")}</a></li>
                        <li><a href="/">{t("mobile")}</a></li>
                        <li><a href="/">{t("Electronics")}</a></li>
                        <li><a href="/">{t("foods")}</a></li>
                        <li><a href="/">{t("sports")}</a></li>
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