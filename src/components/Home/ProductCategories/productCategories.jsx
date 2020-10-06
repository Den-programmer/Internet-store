import React from 'react'
import classes from './productCategories.module.scss'
import ProductStandart from '../../common/productStandart/productStandart'
import { countRating } from '../../../utils/function-helpers'
import NavItem from './NavItem/navItem'
import BannerComponent from '../../common/BannerComponent/bannerComponent'

const ProductCategories = ({ categoriesProducts, categories, banner, changeProductsCategoriesHoveredStatus, unsetProductsCategoriesAsHovered, likeProduct, removeLike }) => {
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
            removeLike={removeLike}/>
    })
    const banners = banner.map(item => {
        return <BannerComponent key={item.id} id={item.id} 
        photo={item.photo} 
        title={item.title} subtitle={item.subtitle}
        buttonText={"Today Only!"} widthPhoto={"255px"} heightPhoto={"290px"}/>
    })
    return (
        <section className={classes.productCategories}>
            <div className={classes.productCategories__header}>
                <div className={classes.title}>
                    <h3>Product Categories</h3>
                </div>
                <div className={classes.control_btns}>
                    <div className={classes.btn_prev}><div>&#60;</div></div>
                    <div className={classes.btn_next}><div>&#62;</div></div>
                </div>
            </div>
            <div className={classes.navbar}>
                {navItems}
            </div>
            <div className={classes.mainContent}>
                <div className={classes.products}>
                    {products}
                </div>
                <div className={classes.banners}>
                    {banners}
                </div>
            </div>
        </section>
    )
}

export default ProductCategories