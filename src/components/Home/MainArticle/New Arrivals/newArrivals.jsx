import React from 'react'
import classes from './newArrivals.module.scss'
import { countRating } from '../../../../utils/function-helpers'
import ProductStandart from '../../../common/productStandart/productStandart'

const NewArrivals = ({ newArrivals, changeArrivalsHoveredStatus, unsetArrivalAsHovered, likeProduct, removeLike }) => {
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
        removeLike={removeLike}/>
    })
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
                    <div className={classes.prev_btn}>
                        &#60;
                    </div>
                    <div className={classes.next_btn}>
                        &#62;
                    </div>
                </div>
            </div>
            <div className={classes.arrivals}>
                {arrivals}
            </div>
        </section>
    )
}

export default NewArrivals 