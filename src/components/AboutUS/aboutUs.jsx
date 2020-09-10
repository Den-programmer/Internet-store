import React from 'react'
import classes from './about.module.scss'
import Header from './Header/header'
import Welcome from './Welcome/welcome'
import Services from './Services/services'
import Counter from './Counter/counter'
import Team from './Team/team'
import BrandPartners from './BrandPartners/brandPartners'
import Footer from './Footer/footer'

const AboutUs = (props) => {
    return (
        <div className={classes.aboutUs}>
            <Header />    
            <Welcome /> 
            <Services />
            <Counter />
            <Team />
            <BrandPartners />
            <Footer />
        </div>
    )
}

export default AboutUs 