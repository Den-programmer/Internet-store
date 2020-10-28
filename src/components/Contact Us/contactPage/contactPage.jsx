import React from 'react'
import classes from './contactPage.module.scss'
import ContactForm from './contactForm/contactForm'
import ContactInfo from './contactInfo/contactInfo'

const ContactPage = (props) => {
    return (
        <div className={classes.contactPage}>
            <div className={classes.contactForm}>
                <div className={classes.title}>
                    <h3>Leave your message</h3>
                </div>
                <div className={classes.mainContent}>
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}

export default ContactPage