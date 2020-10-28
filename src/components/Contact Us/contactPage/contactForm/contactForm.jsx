import React from 'react'
import classes from './contactForm.module.scss'

const ContactForm = (props) => {
    return (
        <div className={classes.form}>
            <div className={classes.formItem + ' ' + classes.formName}>
                <p>Name<span className={classes.requireSign}>*</span></p>
                <input type="text" />
            </div>
            <div className={classes.formItem + ' ' + classes.formEmail}>
                <p>Email Address<span className={classes.requireSign}>*</span></p>
                <input type="text" />
            </div>
            <div className={classes.formItem + ' ' + classes.formSubject}>
                <p>Subject</p>
                <input type="text" />
            </div>
            <div className={classes.formItem + ' ' + classes.formMessage}>
                <p>Your Message<span className={classes.requireSign}>*</span></p>
                <textarea />
            </div>
            <div className={classes.btn_sendMessage}>
                <button>Send Message</button>
            </div>
        </div>
    )
}

export default ContactForm