import React from 'react'
import classes from './loginPage.module.scss'
import Login from '../common/Login/login'
import CommonMainHeader from '../common/CommonMainHeader/commonMainHeaderContainer'
import HeaderNavbar from '../AboutUS/Header/HeaderNavbar/headerNavbar'
import Footer from '../common/Footer/footerContainer'
import MyAccount from './MyAccount/myAccount'

const LoginPage = (props) => {
    return (
        <div className={classes.loginPage}>
            <Login />
            <CommonMainHeader />
            <HeaderNavbar />
            <MyAccount />
            <Footer />
        </div>
    )
}

export default LoginPage