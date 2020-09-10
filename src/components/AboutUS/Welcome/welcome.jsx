import React from 'react'
import classes from './welcome.module.scss'
import supermarketPhoto from '../../../images/supermarketPhoto.jpg'

const Welcome = (props) => {
    return (
        <section className={classes.welcome}>
            <div className={classes.storeImg}>
                <img src={supermarketPhoto} alt="" />
            </div>
            <div className={classes.welcome__text}>
                <h3 className={classes.welcome__text_title}>
                    Hello, We are Supermart Established
                    2006 – Newyork
                </h3>
                <p className={classes.welcome__text_subTitle}>
                    Love boat soon will be making another run the love boat promises someone 
                    thing for everyone two good old boys Wouldn't change.
                </p>
                <p className={classes.welcome__text_maintext}>
                    That's just a little bit more than the law will allow. 
                    Love exciting and new. Come aboard were expecting you. 
                    Love life's sweetest reward Let it flow it floats back to you. 
                    They're creepy and they're kooky mysterious and spooky. 
                    They're all gether ooky the Addams Family. 
                    Straightnin' the curves 
                    Here's the story of a man named Brady who was busy with three boys of his own they call him 
                    Flipper Flipper faster than lightning. No one you see is smarter.
                </p>
                <div className={classes.btn_contactUs}>
                    <button>Contact Us</button>
                </div>
            </div>
        </section>
    )
}

export default Welcome