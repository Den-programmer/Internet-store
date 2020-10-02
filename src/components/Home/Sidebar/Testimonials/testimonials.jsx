import React from 'react'
import classes from './testimonials.module.scss'

const Testimonials = ({ testimonials, testimonialShown, chooseTestimonial, changeShownTestimonial }) => {
    const SwitchBtns = testimonials.map(item => {
        const checkout = item.id === testimonialShown ? item.isShown ? classes.active_switch_btn : classes.switch_btn : classes.switch_btn
        const chooseSliderElement = () => {
            chooseTestimonial(item.id)
            changeShownTestimonial(item.id)
        }
        return <div key={item.id} onClick={chooseSliderElement} className={checkout}></div>
    })
    const Testimonials = testimonials.map(user => {
        return (
            <div key={user.id} className={classes.mainPart}>
                <div className={classes.testimonial}>
                    <p>{user.text}</p>
                </div>
                <div className={classes.authour}>
                    <img className={classes.authour_photo} src={user.photo} alt="" />
                    <h4>{user.name}</h4>
                    <p>{user.position}</p>
                    <div className={classes.horizontal_line}></div>
                </div>
                <div className={classes.switch_btns}>
                    {SwitchBtns}
                </div>
            </div>
        )
    })
    return (
        <div className={classes.testimonials}>
            <div className={classes.title}>
                <h2>Testimonials</h2>
            </div>
            {Testimonials[testimonialShown-1]}
        </div>
    )
}

export default Testimonials