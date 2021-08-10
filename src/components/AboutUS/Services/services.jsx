import React from 'react'
import classes from './services.module.scss'
import service1 from './images/service1.png'
import service2 from './images/service2.png'
import service3 from './images/service3.png'
import { useTranslation } from 'react-i18next'

const Services = (props) => {
    const { t }= useTranslation()
    const servicesData = [
        {
            id: 1,
            photo: service1,
            title: t("strategyAndMarketing"),
            text: t("strategyAndMarketing_inf")
        },
        {
            id: 2,
            photo: service2,
            title: t("Interaction_Design"),
            text: t("Interaction_Design_inf")
        },
        {
            id: 3,
            photo: service3,
            title: t("web_development"),
            text: t("web_development_inf")
        }
    ]
    const services = servicesData.map(s => {
        return (
            <div key={s.id} className={classes.service}>
                <img src={s.photo} alt="" />
                <h4 className={classes.service__title}>{s.title}</h4>
                <p className={classes.service__text}>{s.text}</p>
            </div>
        )
    })
    return (
        <section className={classes.servicesWrapper}>
            <div className={classes.services}>
                {services}
            </div>
        </section>
    )
}

export default Services