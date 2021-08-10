import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './billingDetails.module.scss'

const BillingDetails = (props) => {
    const { t } = useTranslation()
    const star = <span className={classes.starSign}>*</span>
    return (
        <div className={classes.billingDetails}>
            <div className={classes.title}>
                <h3>{t("billing_details")}</h3>
            </div>
            <div className={classes.form}>
                <div className={classes.mainFormContent}>
                    <div className={classes.displayFlexContainer}>
                        <div className={classes.firstName + ' ' + classes.formItem}>
                            <p>{t("first_name")} {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                        <div style={{ marginLeft: '18px' }} className={classes.lastName + ' ' + classes.formItem}>
                            <p>{t("last_name")} {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                    </div>
                    <div className={classes.companyName + ' ' + classes.formItem}>
                        <p>{t("company_name")}</p>
                        <input className={classes.wideInput} type="text" />
                    </div>
                    <div className={classes.displayFlexContainer}>
                        <div className={classes.firstName + ' ' + classes.formItem}>
                            <p>{t("email_address")} {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                        <div style={{ marginLeft: '18px' }} className={classes.firstName + ' ' + classes.formItem}>
                            <p>{t("phone")} {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                    </div>
                    <div className={classes.country + ' ' + classes.formItem}>
                        <p>{t("country")} {star}</p>
                        <select>
                            <option>{t("England")}</option>
                        </select>
                    </div>
                    <div className={classes.address + ' ' + classes.formItem}>
                        <p>{t("address")} {star}</p>
                        <input className={classes.wideInput} placeholder={t("street_address")} type="text" />
                        <input className={classes.wideInput} placeholder={t("apartments")} type="text" />
                    </div>
                    <div className={classes.city + ' ' + classes.formItem}>
                        <p>{t("townOrcity")} {star}</p>
                        <input className={classes.wideInput} type="text" />
                    </div>
                    <div className={classes.displayFlexContainer}>
                        <div className={classes.state + ' ' + classes.formItem}>
                            <p>{t("stateOrCountry")} {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                        <div style={{ marginLeft: '18px' }} className={classes.postcode + ' ' + classes.formItem}>
                            <p>{t("postcodeOrZip")} {star}</p>
                            <input className={classes.shortInput} type="text" />
                        </div>
                    </div>
                </div>
                <div className={classes.orderNotes}>
                    <p>{t("order_notes")}</p>
                    <textarea />
                </div>
            </div>
        </div>
    )
}

export default BillingDetails