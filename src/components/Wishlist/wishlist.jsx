import React from 'react'
import classes from './wishlist.module.scss'
import CurrentList from './CurrentList/currentListContainer'
import Footer from '../common/Footer/footerContainer'
import Header from '../Home/Header/header'

const Wishlist = (props) => {
    return (
        <div className={classes.wishlist}>
            <Header />
            <CurrentList />
            <Footer />
        </div>
    )
}

export default Wishlist