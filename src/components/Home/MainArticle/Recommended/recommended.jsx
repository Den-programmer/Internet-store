import React from 'react'
import classes from './recommended.module.scss'
import ProductStandart from '../../../common/productStandart/productStandart'
import { countRating } from '../../../../utils/function-helpers'

const Recommended = ({ recommended, changeRecommendedHoveredStatus, unsetRecommendedAsHovered, likeProduct, removeLike }) => {
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
        removeLike={removeLike}/>
    })
    return (
        <section className={classes.recommended}>
            <div className={classes.recommended__header}>
                <div className={classes.title}>
                    <h3>Recommended for you</h3>
                </div>
                <div className={classes.control_btns}>
                    <div className={classes.btn_prev}><div>&#60;</div></div>
                    <div className={classes.btn_next}><div>&#62;</div></div>
                </div>
            </div>
            <div className={classes.products}>{products}</div>
        </section>
    )
}

export default Recommended