import React from 'react'
import classes from './footer.module.scss'
import basket from './images/basket.png'
import shield from './images/shield.png'
import cards from './images/cards.png'
import envelope from './images/envelope.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import basketlogo from '../../../images/basket.png'

const Footer = (props) => {
    return (
        <footer>
            <section className={classes.features}>
                <div className={classes.feature}>
                    <img src={basket} alt="" />
                    <h5>Free Shipping</h5>
                    <p>
                        Free Shipping on World wide Order
                        Over $99.
                    </p>
                </div>
                <div className={classes.feature}>
                    <img src={shield} alt="" />
                    <h5>Trusted Pay</h5>
                    <p>
                        100% Payment Protection &#38;
                        Easy Return
                    </p>
                </div>
                <div className={classes.feature}>
                    <img src={cards} alt="" />
                    <h5>Secured Payment</h5>
                    <p>
                        All Major Credit &#38; Debit Cards
                        Accepted
                    </p>
                </div>
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
                        <FontAwesomeIcon />
                        <FontAwesomeIcon />
                        <FontAwesomeIcon />
                        <FontAwesomeIcon />
                        <FontAwesomeIcon />
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