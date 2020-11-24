import React from 'react'
import classes from './shop.module.scss'
import Login from '../common/Login/login'
import CommonMainHeader from '../common/CommonMainHeader/commonMainHeaderContainer'
import HeaderNavbar from '../AboutUS/Header/HeaderNavbar/headerNavbar'
import PageTitle from './PageTitle/pageTitleContainer'
import OptionalPanel from './OptionalPanel/optionalPanelContainer'
import Products from './Products/productsContainer'
import Footer from '../common/Footer/footerContainer'

const Shop = ({ productsPerRow }) => {
    return (
        <div className={classes.shopPage}>
            <div className={classes.shopHeader}>
                <Login />
                <CommonMainHeader />
                <HeaderNavbar />
                <PageTitle />
            </div>
            <div className={classes.shop}>
                <div className={classes.shopContent}>
                    <OptionalPanel productsPerRow={productsPerRow}/>
                    <Products />
                </div>
            </div>
            <div className={classes.shopFooter}>
                <Footer />
            </div>
        </div>
    )
}

export default Shop