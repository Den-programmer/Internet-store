import React from 'react'
import classes from './sidebar.module.scss'
import HotDeals from './Hot Deals/hotdealsContainer'
import NewProducts from './NewProducts/NewProductsContainer'
import SidebarSaleBanner from './SidebarSaleBanner/sidebarSaleBannerContainer'
import Testimonials from './Testimonials/testimonialsContainer'
import RecentNews from './RecentNews/recentNewsContainer'

const Sidebar = (props) => {
    return (
        <section className={classes.sidebar}>
            <HotDeals />
            <NewProducts />
            <SidebarSaleBanner />
            <Testimonials />
            <RecentNews />
        </section>
    )
}

export default Sidebar