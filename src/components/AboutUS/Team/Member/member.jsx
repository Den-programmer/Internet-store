import React, { useState } from 'react'
import classes from './member.module.scss'
import facebookSquare from './images/facebookSquare.png'
import twitterSquare from './images/twitterSquare.png'
import linkedInSquare from './images/linkedInSquare.png'
import googlePlusSquare from './images/googlePlusSquare.png'
import facebookSquare2 from './images/facebookSquare2.png'
import twitterSquare2 from './images/twitterSquare2.png'
import linkedInSquare2 from './images/linkedInSquare2.png'
import googlePlusSquare2 from './images/googlePlusSquare2.png'

const Member = (props) => {
    const [isFacebookHovered, setIsFacebookHoveredStatus] = useState(false)
    const [isTwitterHovered, setIsTwitterHoveredStatus] = useState(false)
    const [isLinkedInHovered, setIsLinkedInHoveredStatus] = useState(false)
    const [isGoogleHovered, setIsGoogleHoveredStatus] = useState(false)
    return (
        <div className={classes.member}>
            <img src={props.photo} alt="" />
            <div className={classes.member__inf}>
                <h5>{props.name}</h5>
                <p>{props.position}</p>
                <div className={classes.socialMedias}>
                    <div><a target="blank_" href={props.facebook}><img onMouseLeave={() => setIsFacebookHoveredStatus(false)} onMouseMove={() => setIsFacebookHoveredStatus(true)} src={isFacebookHovered ? facebookSquare2 : facebookSquare} alt="facebook"/></a></div>
                    <div><a target="blank_" href={props.twitter}> <img onMouseLeave={() => setIsTwitterHoveredStatus(false)} onMouseMove={() => setIsTwitterHoveredStatus(true)} src={isTwitterHovered ? twitterSquare2 : twitterSquare} alt="twitter"/></a></div>
                    <div><a target="blank_" href={props.linkedIn}><img onMouseLeave={() => setIsLinkedInHoveredStatus(false)} onMouseMove={() => setIsLinkedInHoveredStatus(true)} src={isLinkedInHovered ? linkedInSquare2 : linkedInSquare} alt="linkedIn"/></a></div>
                    <div><a target="blank_" href={props.google}><img onMouseLeave={() => setIsGoogleHoveredStatus(false)} onMouseMove={() => setIsGoogleHoveredStatus(true)} src={isGoogleHovered ? googlePlusSquare2 : googlePlusSquare} alt="google+"/></a></div>
                </div>
            </div>
        </div>
    )
}

export default Member