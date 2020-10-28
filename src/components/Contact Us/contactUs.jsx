import React from 'react'
import classes from './contactUs.module.scss'
import Login from '../common/Login/login'
import CommonMainHeader from '../common/CommonMainHeader/commonMainHeaderContainer'
import HeaderNavbar from '../AboutUS/Header/HeaderNavbar/headerNavbar'
import HeaderPageName from '../common/HeaderPageName/headerPageNameContainer'
import Footer from '../common/Footer/footerContainer'
import ContactPage from './contactPage/contactPageContainer'

const ContactUs = (props) => {
    return (
        <div className={classes.contactUs}>
            <Login />
            <CommonMainHeader />
            <HeaderNavbar />
            <HeaderPageName />
            <ContactPage />
            <Footer />
        </div>
    )
}

export default ContactUs