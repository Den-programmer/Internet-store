import React from 'react'
import classes from './wishlist.module.scss'
import Login from '../common/Login/loginContainer'
import CommonMainHeader from '../common/CommonMainHeader/commonMainHeaderContainer'
import Navbar from '../Home/Header/Navbar/navbar'
import CurrentList from './CurrentList/currentListContainer'
import Footer from '../common/Footer/footerContainer'

const Wishlist = (props) => {
    return (
        <div className={classes.wishlist}>
            <Login />
            <CommonMainHeader />
            <Navbar />
            <CurrentList />
            <Footer />
        </div>
    )
}

export default Wishlist