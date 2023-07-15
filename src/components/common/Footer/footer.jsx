import React from 'react'
import classes from './footer.module.scss'
import basket from './images/basket.png'
import shield from './images/shield.png'
import cards from './images/cards.png'
import envelope from './images/envelope.png'
import basketlogo from '../../../images/basket.png'
import v from './images/victory.png'
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import pinterest from './images/pinterest.png'
import { useTranslation } from 'react-i18next'

const Footer = (props) => {
    const { t } = useTranslation()
    const featuresData = [
        {
            id: 1,
            photo: basket,
            title: t("free_shipping"),
            text: t("free_shipping_inf")
        },
        {
            id: 2,
            photo: shield,
            title: t("trusted_pay"),
            text: t("trusted_pay_inf")
        },
        {
            id: 3,
            photo: cards,
            title: t("secured_payment"),
            text: t("secured_payment_inf")
        }
    ]
    const features = featuresData.map(f => {
        return (
            <div key={f.id} className={classes.feature}>
                <img src={f.photo} alt="" />
                <h5>{f.title}</h5>
                <p>{f.text}</p>
            </div>
        )
    })
    return (
        <footer>
            <section className={classes.features}>
                {features}
            </section>
            <section className={classes.newsShareWrapper}>
                <div className={classes.newsShare}>
                    <div className={classes.newsShare__logo}>
                        <img src={envelope} alt="" />
                        <h4>{t("signup_to_newsletter")}</h4>
                    </div>
                    <form className={classes.submittingForm}>
                        <input placeholder={t("enter_your_email_address")} type="text" />
                        <button>{t("submit")}</button>
                    </form>
                    <div className={classes.social_medias}>
                        <img src={twitter} alt="twitter" />
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={pinterest} alt="" />
                        <img src={v} alt="v" />
                    </div>
                </div>
            </section>
            <section className={classes.footInfWrapper}>
                <div className={classes.footInf}>
                    <div className={classes.foot_about}>
                        <div className={classes.logo}>
                            <img src={basketlogo} alt="" />
                            <h3>SuperMart</h3>
                        </div>
                        <p>
                            {t("footer_inf")}
                        </p>
                        <div className={classes.about_inf}>
                            <span>{t("address")}:</span>
                            <p>{t("address_content")}</p>
                        </div>
                        <div className={classes.about_inf}>
                            <span>{t("phone")}:</span>
                            <p>(08) 08 4752 1499</p>
                        </div>
                        <div className={classes.about_inf}>
                            <span>{t("email")}:</span>
                            <p>info@supermart.com</p>
                        </div>
                    </div>
                    <div className={classes.footLinks}>
                        <div className={classes.foot_company + ' ' + classes.additionalLinks}>
                            <h4>{t("company")}</h4>
                            <ul>
                                <li>{t("discount_vouches")}</li>
                                <li>{t("spring_collection")}</li>
                                <li>{t("trending")}</li>
                                <li>{t("best_sellers")}</li>
                                <li>{t("special_deals")}</li>
                            </ul>
                        </div>
                        <div className={classes.foot_policyInfo + ' ' + classes.additionalLinks}>
                            <h4>{t("policy_info")}</h4>
                            <ul>
                                <li>{t("ordersAndReturns")}</li>
                                <li>{t("advanced_search")}</li>
                                <li>{t("helpAndFAQs")}</li>
                                <li>{t("consultant")}</li>
                                <li>{t("store_locations")}</li>
                            </ul>
                        </div>
                        <div className={classes.foot_myAccount + ' ' + classes.additionalLinks}>
                            <h4>{t("my_account")}</h4>
                            <ul>
                                <li>{t("about_us")}</li>
                                <li>{t("delivery_information")}</li>
                                <li>{t("privacy_policy")}</li>
                                <li>{t("termsAndConditions")}</li>
                                <li>{t("custom_link")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer