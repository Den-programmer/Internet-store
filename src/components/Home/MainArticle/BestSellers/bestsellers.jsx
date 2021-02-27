import React from 'react'
import classes from './bestsellers.module.scss'
import { countRating } from '../../../../utils/function-helpers'
import BestSeller from './BestSeller/bestSeller'
import Btn_Next from '../CommonSliderBtns/Btn_Next/Btn_Next'
import Btn_Prev from '../CommonSliderBtns/Btn_Prev/Btn_Prev'
import Slider from 'react-slick'

const BestSellers = ({ bestsellers, setProductId, addToCart }) => {
    let slider = React.createRef()
    const BestSellers = bestsellers.map(item => {
        const data = countRating(item.rating)
        const { starsCount, greyStarsCount } = data
        return <BestSeller starsCount={starsCount} greyStarsCount={greyStarsCount} 
        key={item.id} id={item.id} 
        isNew={item.isNew} 
        isSale={item.isSale}
        photo={item.photo}
        title={item.title}
        price={item.price}
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
        infinite: true,
        speed: 500,
        className: classes.mainContent,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipeToSlide: false,
        draggable: false,
        rows: 1,
        slidesPerRow: 3
    }
    return (
        <section className={classes.bestsellers}>
            <div className={classes.bestsellers__header}>
                <div className={classes.title}>
                    <h3>Best Sellers</h3>
                </div>
                <div className={classes.control_btns}>
                    <Btn_Prev click={previous}/>
                    <Btn_Next click={next}/>
                </div>
            </div>
            <Slider ref={sliderRef => (slider = sliderRef)} {...settings}>{BestSellers}</Slider>
        </section>
    )
}

export default BestSellers