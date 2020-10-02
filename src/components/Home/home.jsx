import React from 'react'
import classes from './home.module.scss'
import Header from './Header/header'
import BannerItems from './Banner Items/bannerItemsContainer'
import Sidebar from './Sidebar/sidebar'
import MainArticle from './MainArticle/mainArticle'
import ExtremeBanner from './ExtremeBanner/extremeBannerContainer'
import ProductCategories from './ProductCategories/productCategoriesContainer'
import BrandPartners from '../common/BrandPartners/brandPartnersContainer'
import Footer from '../common/Footer/footerContainer'

const Home = (props) => {
    return (
        <div className={classes.home}>
            <Header />
            <BannerItems />
            <section className={classes.dFlex}>
                <Sidebar />
                <MainArticle />
            </section>
            <ExtremeBanner />
            <ProductCategories />
            <BrandPartners />
            <Footer />
        </div>
    )   
}

export default Home