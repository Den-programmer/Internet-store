import React from 'react'
import classes from './services.module.scss'
import service1 from './images/service1.png'
import service2 from './images/service2.png'
import service3 from './images/service3.png'

const Services = (props) => {
    return (
        <section className={classes.servicesWrapper}>
            <div className={classes.services}>
                <div className={classes.service}>
                    <img src={service1} alt="" />
                    <h4 className={classes.service__title}>Strategy &amp; Marketing</h4>
                    <p className={classes.service__text}>
                        We choose to go to the moon in this
                        decade and the other things because
                        they are easy they are hard goal section.
                    </p>
                </div>
                <div className={classes.service}>
                    <img src={service2} alt="" />
                    <h4 className={classes.service__title}>Interaction Design</h4>
                    <p className={classes.service__text}>
                        We choose to go to the moon in this
                        decade and the other things because
                        they are easy they are hard goal section.
                    </p>
                </div>
                <div className={classes.service}>
                    <img src={service3} alt="" />
                    <h4 className={classes.service__title}>Web Developemnt</h4>
                    <p className={classes.service__text}>
                        We choose to go to the moon in this
                        decade and the other things because
                        they are easy they are hard goal section.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services