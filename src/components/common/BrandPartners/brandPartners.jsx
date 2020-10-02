import React from 'react'
import classes from './brandPartners.module.scss'

const BrandPartners = (props) => {
    return (
        <section className={classes.brandPartnersWrapper}>
            <div className={classes.brandPartners}>
                <div className={classes.prevBtn}>
                    &#60;
                </div>
                <div className={classes.partners}>

                </div>
                <div className={classes.nextBtn}>
                    &#62;
                </div>
            </div>
        </section>
    )
}

export default BrandPartners