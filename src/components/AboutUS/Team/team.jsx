import React from 'react'
import classes from './team.module.scss'
import MemberOne from '../../../images/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Team = (props) => {
    return (
        <section className={classes.team}>
            <div className={classes.title}>
                <h3>Meet The Team</h3>
                <p>
                    That's just a little bit more than the law will allow love exciting and new come.
                </p>
            </div>
            <div className={classes.members}>
                <div className={classes.member}>
                    <img src={MemberOne} alt="" />
                    <div className={classes.member__inf}>
                        <h5>Denis Grigorov</h5>
                        <p>Godness</p>
                        <div className={classes.socialMedias}>
                            <div>Facebook Icon</div>
                            <div>Twitter Icon</div>
                            <div>Linked In Icon</div>
                            <div>Google+ Icon</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team