import React from 'react'
import classes from './about.module.scss'
import Header from './Header/header'
import Welcome from './Welcome/welcome'
import Services from './Services/services'
import Counter from './Counter/counterContainer'
import Team from './Team/teamContainer'
import Footer from '../common/Footer/footerContainer'

const AboutUs = (props) => {
    return (
        <div className={classes.aboutUs}>
            <Header />    
            <Welcome /> 
            <Services />
            <Counter />
            <Team />
            <Footer />
        </div>
    )
}

export default AboutUs 