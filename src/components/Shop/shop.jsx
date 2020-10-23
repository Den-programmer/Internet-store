import React from 'react'
import classes from './shop.module.scss'
import Login from '../common/Login/login'
import CommonMainHeader from '../common/CommonMainHeader/commonMainHeaderContainer'
import HeaderNavbar from '../AboutUS/Header/HeaderNavbar/headerNavbar'
import PageTitle from './PageTitle/pageTitleContainer'
import OptionalPanel from './OptionalPanel/optionalPanelContainer'
import Products from './Products/productsContainer'
import Footer from '../common/Footer/footerContainer'

const Shop = (props) => {
    return (
        <div className={classes.shop}>
            <Login />
            <CommonMainHeader />
            <HeaderNavbar />
            <PageTitle />
            <OptionalPanel />
            <Products />
            <Footer />
        </div>
    )
}

export default Shop