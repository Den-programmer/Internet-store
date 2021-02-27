import React from 'react'
import classes from './FeaturedProducts.module.scss'
import { countRating } from '../../../../utils/function-helpers'
import ProductStandart from '../../../common/productStandart/productStandart'
import Btn_Prev from '../CommonSliderBtns/Btn_Prev/Btn_Prev'
import Btn_Next from '../CommonSliderBtns/Btn_Next/Btn_Next'
import Slider from 'react-slick'

const FeaturedProducts = ({ featuredProducts, changeFeaturedHoveredStatus, unsetFeaturedAsHovered, likeProduct, removeLike, setProductId, addToCart }) => {
    let slider = React.createRef()
    const products = featuredProducts.map(item => {
        const data = countRating(item.rating)
        const { starsCount, greyStarsCount } = data
        return <ProductStandart key={item.id} 
        id={item.id} 
        photo={item.photo} 
        title={item.title} 
        price={item.price} 
        isNew={item.isNew} 
        isSale={item.isSale}
        hovered={item.hovered}
        starsCount={starsCount}
        greyStarsCount={greyStarsCount}
        onMouseMove={changeFeaturedHoveredStatus}
        onMouseLeave={unsetFeaturedAsHovered}
        like={item.like}
        likeProduct={likeProduct}
        removeLike={removeLike}
        isInCart={item.isInCart}
        isCompare={item.isCompare}
        isInStock={item.isInStock}
        setProductId={setProductId}
        addToCart={addToCart}/>
    })
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        speed: 500,
        className: classes.products,
        adaptiveHeight: false
    }
    const previous = () => {
        slider.slickPrev()
    }
    const next = () => {
        slider.slickNext()
    }
    return (
        <section className={classes.featuredProducts}>
            <div className={classes.featuredProducts__header}>
                <div className={classes.title}>
                    <h3>Featured Products</h3>
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

export default FeaturedProducts