import React from 'react'
import classes from './recommended.module.scss'
import ProductStandart from '../../../common/productStandart/productStandart'
import { countRating } from '../../../../utils/function-helpers'
import Slider from 'react-slick'
import Btn_Prev from '../CommonSliderBtns/Btn_Prev/Btn_Prev'
import Btn_Next from '../CommonSliderBtns/Btn_Next/Btn_Next'
import { useTranslation } from 'react-i18next'

const Recommended = ({ recommended, changeRecommendedHoveredStatus, unsetRecommendedAsHovered, likeProduct, removeLike, setProductId, addToCart }) => {
    const { t } = useTranslation()
    let slider = React.createRef()
    const products = recommended.map(item => {
        const data = countRating(item.rating)
        const { starsCount, greyStarsCount } = data
        return <ProductStandart key={item.id} id={item.id} 
        photo={item.photo} 
        title={item.title} 
        price={item.price} 
        isNew={item.isNew} 
        isSale={item.isSale} 
        hovered={item.hovered} 
        starsCount={starsCount} 
        greyStarsCount={greyStarsCount} 
        onMouseMove={changeRecommendedHoveredStatus} 
        onMouseLeave={unsetRecommendedAsHovered}
        like={item.like}
        likeProduct={likeProduct}
        removeLike={removeLike}
        isInCart={item.isInCart}
        isInStock={item.isInStock}
        isCompare={item.isCompare} 
        setProductId={setProductId}
        addToCart={addToCart}/>
    })
    const previous = () => {
        slider.slickPrev()
    }
    const next = () => {
        slider.slickNext()
    }
    const settings = {
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        className: classes.products
    }
    return (
        <section className={classes.recommended}>
            <div className={classes.recommended__header}>
                <div className={classes.title}>
                    <h3>{t("recommended_for_you")}</h3>
                </div>
                <div className={classes.control_btns}>
                    <Btn_Prev click={previous}/>
                    <Btn_Next click={next}/>
                </div>
            </div>
            <Slider ref={sliderRef => (slider = sliderRef)} {...settings}>{products}</Slider>
        </section>
    )
}

export default Recommended