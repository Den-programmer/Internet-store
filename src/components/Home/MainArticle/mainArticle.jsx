import React from 'react'
import classes from './mainArticle.module.scss'
import NewArrivals from './New Arrivals/newArrivalsContainer'
import Banners from './Banners/bannersContainer'
import BestSellers from './BestSellers/bestsellersContainer'
import FeaturedProducts from './Featured Products/FeaturedProductsContainer'
import EnormousBanner from './EnomoursBanner/enormousBannerContainer'
import Recommended from './Recommended/recommendedContainer'

const MainArticle = (props) => {
    return (
        <article className={classes.article}>
            <NewArrivals />
            <Banners />
            <BestSellers />
            <FeaturedProducts />
            <EnormousBanner />
            <Recommended />
        </article>
    )
}

export default MainArticle