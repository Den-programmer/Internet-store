import React from 'react'
import classes from './productCategories.module.scss'
import ProductStandart from '../../common/productStandart/productStandart'
import { countRating } from '../../../utils/function-helpers'
import NavItem from './NavItem/navItem'
import BannerComponent from '../../common/BannerComponent/bannerComponent'
import Slider from 'react-slick'
import Btn_Prev from '../MainArticle/CommonSliderBtns/Btn_Prev/Btn_Prev'
import Btn_Next from '../MainArticle/CommonSliderBtns/Btn_Next/Btn_Next'
import { useTranslation } from 'react-i18next'

const ProductCategories = ({ categoriesProducts, categories, banner, changeProductsCategoriesHoveredStatus, unsetProductsCategoriesAsHovered, likeProduct, removeLike, setProductId }) => {
    const { t } = useTranslation()
    let slider = React.createRef()
    const navItems = categories.map(item => {
        return <NavItem key={item.id} id={item.id} title={item.title} icon={item.icon}/>
    })
    const products = categoriesProducts.map(item => {
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
            onMouseMove={changeProductsCategoriesHoveredStatus}
            onMouseLeave={unsetProductsCategoriesAsHovered} 
            like={item.like}
            likeProduct={likeProduct}
            removeLike={removeLike} 
            setProductId={setProductId}/>
    })
    const banners = banner.map(item => {
        return <BannerComponent key={item.id} id={item.id} 
        photo={item.photo} 
        title={item.title} subtitle={item.subtitle}
        buttonText={"Today Only!"} widthPhoto={"255px"} heightPhoto={"290px"}/>
    })
    const previous = () => {
        slider.slickPrev()
    }
    const next = () => {
        slider.slickNext()
    }
    const settings = {
        slidesToScroll: 4,
        slidesToShow: 4,
        speed: 500,
        infinite: true,
        className: classes.products,
        adaptiveHeight: true,
        variableWidth: true
    }
    return (
        <section className={classes.productCategories}>
            <div className={classes.productCategories__header}>
                <div className={classes.title}>
                    <h3>{t("product_categories")}</h3>
                </div>
                <div className={classes.control_btns}>
                    <Btn_Prev click={previous}/>
                    <Btn_Next click={next}/>
                </div>
            </div>
            <div className={classes.navbar}>
                {navItems}
            </div>
            <div className={classes.mainContent}>
                <Slider ref={sliderRef => (slider = sliderRef)} {...settings}>
                    {products}
                </Slider>
            </div>
        </section>
    )
}

export default ProductCategories