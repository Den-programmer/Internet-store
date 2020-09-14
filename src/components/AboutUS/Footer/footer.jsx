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

const Footer = (props) => {
    const featuresData = [
        {
            id: 1,
            photo: basket,
            title: 'Free Shipping',
            text: 'Free Shipping on World wide Order Over $99'
        },
        {
            id: 2,
            photo: shield,
            title: 'Trusted Pay',
            text: '100% Payment Protection & Easy Return'
        },
        {
            id: 3,
            photo: cards,
            title: 'Secured Payment',
            text: 'All Major Credit & Debit Cards Accepted'
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
                        <h4>Singup to Newsletter</h4>
                    </div>
                    <form className={classes.submittingForm}>
                        <input placeholder={"Enter Your Email Address"} type="text" />
                        <button>Submit</button>
                    </form>
                    <div className={classes.social_medias}>
                        <h4 className={classes.keepInTouchTitle}>Keep in touch</h4>
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
                            Many say exploration is part of our dest but
                            it’s actually our duty to future and their.
                        </p>
                        <div className={classes.about_inf}>
                            <span>Address:</span>
                            <p>868 Fake Street, New York</p>
                        </div>
                        <div className={classes.about_inf}>
                            <span>Phone:</span>
                            <p>(08) 08 4752 1499</p>
                        </div>
                        <div className={classes.about_inf}>
                            <span>Email:</span>
                            <p>info@supermart.com</p>
                        </div>
                    </div>
                    <div className={classes.foot_company + ' ' + classes.additionalLinks}>
                        <h4>Company</h4>
                        <ul>
                            <li>Discount Vouches</li>
                            <li>Spring Collection</li>
                            <li>Trending</li>
                            <li>Best Sellers</li>
                            <li>Special Deals</li>
                        </ul>
                    </div>
                    <div className={classes.foot_policyInfo + ' ' + classes.additionalLinks}>
                        <h4>Policy Info</h4>
                        <ul>
                            <li>Orders &#38; Returns</li>
                            <li>Advanced Search</li>
                            <li>Help &#38; FAQs</li>
                            <li>Consultant</li>
                            <li>Store Locations</li>
                        </ul>
                    </div>
                    <div className={classes.foot_myAccount + ' ' + classes.additionalLinks}>
                        <h4>My Account</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Terms &#38; Conditions</li>
                            <li>Custom Link</li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer