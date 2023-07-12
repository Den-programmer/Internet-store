import React from 'react'
import classes from './contactUs.module.scss'
import Footer from '../common/Footer/footerContainer'
import ContactPage from './contactPage/contactPageContainer'
import Header from '../Home/Header/header'

const ContactUs = (props) => {
    return (
        <div className={classes.contactUs}>
            <Header />
            <ContactPage />
            <Footer />
        </div>
    )
}

export default ContactUs