import React from 'react'
import classes from './services.module.scss'
import service1 from './images/service1.png'
import service2 from './images/service2.png'
import service3 from './images/service3.png'

const Services = (props) => {
    const servicesData = [
        {
            id: 1,
            photo: service1,
            title: 'Strategy & Marketing',
            text: 'We choose to go to the moon in this decade and the other things because they are easy they are hard goal section.'
        },
        {
            id: 2,
            photo: service2,
            title: 'Interaction Design',
            text: 'We choose to go to the moon in this decade and the other things because they are easy they are hard goal section.'
        },
        {
            id: 3,
            photo: service3,
            title: 'Web Developemnt',
            text: 'We choose to go to the moon in this decade and the other things because they are easy they are hard goal section.'
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