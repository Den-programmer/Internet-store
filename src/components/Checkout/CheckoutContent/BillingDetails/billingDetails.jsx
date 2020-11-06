import React from 'react'
import classes from './billingDetails.module.scss'

const BillingDetails = (props) => {
    const star = <span className={classes.starSign}>*</span>
    return (
        <div className={classes.billingDetails}>
            <div className={classes.title}>
                <h3>Billing Details</h3>
            </div>
            <div className={classes.form}>
                <div className={classes.mainFormContent}>
                    <div className={classes.displayFlexContainer}>
                        <div className={classes.firstName + ' ' + classes.formItem}>
                            <p>First Name {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                        <div style={{ marginLeft: '18px' }} className={classes.lastName + ' ' + classes.formItem}>
                            <p>Last Name {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                    </div>
                    <div className={classes.companyName + ' ' + classes.formItem}>
                        <p>Company Name</p>
                        <input className={classes.wideInput} type="text" />
                    </div>
                    <div className={classes.displayFlexContainer}>
                        <div className={classes.firstName + ' ' + classes.formItem}>
                            <p>Email Address {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                        <div style={{ marginLeft: '18px' }} className={classes.firstName + ' ' + classes.formItem}>
                            <p>Phone {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                    </div>
                    <div className={classes.country + ' ' + classes.formItem}>
                        <p>Country {star}</p>
                        <select>
                            <option>England</option>
                        </select>
                    </div>
                    <div className={classes.address + ' ' + classes.formItem}>
                        <p>Address {star}</p>
                        <input className={classes.wideInput} placeholder="Street address" type="text" />
                        <input className={classes.wideInput} placeholder="Apartment. suite. unit ect. (optional)" type="text" />
                    </div>
                    <div className={classes.city + ' ' + classes.formItem}>
                        <p>Town / city {star}</p>
                        <input className={classes.wideInput} type="text" />
                    </div>
                    <div className={classes.displayFlexContainer}>
                        <div className={classes.state + ' ' + classes.formItem}>
                            <p>State / Country {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                        <div style={{ marginLeft: '18px' }} className={classes.postcode + ' ' + classes.formItem}>
                            <p>Postcode / zip {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                    </div>
                </div>
                <div className={classes.orderNotes}>
                    <p>Order Notes</p>
                    <textarea />
                </div>
            </div>
        </div>
    )
}

export default BillingDetails