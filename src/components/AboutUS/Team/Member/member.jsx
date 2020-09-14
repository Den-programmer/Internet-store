import React from 'react'
import classes from './member.module.scss'
import facebookSquare from './images/facebookSquare.png'
import twitterSquare from './images/twitterSquare.png'
import linkedInSquare from './images/linkedInSquare.png'
import googlePlusSquare from './images/googlePlusSquare.png'

const Member = (props) => {
    return (
        <div className={classes.member}>
            <img src={props.photo} alt="" />
            <div className={classes.member__inf}>
                <h5>{props.name}</h5>
                <p>{props.position}</p>
                <div className={classes.socialMedias}>
                    <div><a href={props.facebook}><img src={facebookSquare} alt="facebook"/></a></div>
                    <div><a href={props.twitter}><img src={twitterSquare} alt="twitter"/></a></div>
                    <div><a href={props.linkedIn}><img src={linkedInSquare} alt="linkedIn"/></a></div>
                    <div><a href={props.google}><img src={googlePlusSquare} alt="google+"/></a></div>
                </div>
            </div>
        </div>
    )
}

export default Member