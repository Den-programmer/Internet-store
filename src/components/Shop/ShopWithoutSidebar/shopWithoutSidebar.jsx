import React from 'react'
import classes from './shopWithoutSidebar.module.scss'
import Login from '../../common/Login/login'
import CommonMainHeader from '../../common/CommonMainHeader/commonMainHeaderContainer'
import HeaderNavbar from '../../AboutUS/Header/HeaderNavbar/headerNavbar'
import PageTitle from './PageTitle/pageTitleContainer'
import OptionalPanel from './OptionalPanel/optionalPanelContainer'
import Products from './Products/productsContainer'
import Footer from '../../common/Footer/footerContainer'

const ShopWithoutSidebar = (props) => {
    return (
        <div className={classes.shopWithoutSidebar}>
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

export default ShopWithoutSidebar