import React from 'react'
import classes from './FeaturedProducts.module.scss'
import { countRating } from '../../../../utils/function-helpers'
import ProductStandart from '../../../common/productStandart/productStandart'

const FeaturedProducts = ({ featuredProducts, changeFeaturedHoveredStatus, unsetFeaturedAsHovered, likeProduct, removeLike }) => {
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
        removeLike={removeLike}/>
    })
    return (
        <section className={classes.featuredProducts}>
            <div className={classes.featuredProducts__header}>
                <div className={classes.title}>
                    <h3>Featured Products</h3>
                </div>
                <div className={classes.control_btns}>
                    <div className={classes.btn_prev}><div>&#60;</div></div>
                    <div className={classes.btn_next}><div>&#62;</div></div>
                </div>
            </div>
            <div className={classes.products}>
                {products}
            </div>
        </section>
    )
}

export default FeaturedProducts