import React from 'react'
import classes from './contactInfo.module.scss'

const ContactInfo = (props) => {
    return (
        <div className={classes.contactInfo}>
            <h4 className={classes.contactInfo__title}>Contact Info</h4>
            <p className={classes.contactInfo__subtitle}>
                Choose one of the alternative methods of communication.
                We’re available from Monday to Friday, 07:30-19:00 to take your call.
            </p>
            <div className={classes.contact}>
                <div className={classes.office + ' ' + classes.contactItem}>
                    <p><span>Office: </span>249 Ung Van Khiem St,BinhThanhDist, US</p>
                </div>
                <div className={classes.phone + ' ' + classes.contactItem}>
                    <p><span>Phone: </span>(08) 8827 63335</p>
                </div>
                <div className={classes.email + ' ' + classes.contactItem}>
                    <p><span>Email: </span>denisgrigorov094@gmail.com</p>
                </div>
            </div>
            <div className={classes.googleMap}>

            </div>
        </div>
    )
}

export default ContactInfo