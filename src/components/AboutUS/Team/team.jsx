import React from 'react'
import classes from './team.module.scss'
import Member from './Member/member'

const Team = (props) => {
    const Team = props.team.map(m => {
        return <Member key={m.id} id={m.id} 
        name={m.name} 
        photo={m.photo} 
        position={m.position} 
        facebook={m.facebook} 
        google={m.google} 
        linkedIn={m.linkedIn} 
        twitter={m.twitter}/>
    })
    return (
        <section className={classes.team}>
            <div className={classes.title}>
                <h3>Meet The Team</h3>
                <p>
                    That's just a little bit more than the law will allow love exciting and new come.
                </p>
            </div>
            <div className={classes.members}>
                {Team}
            </div>
        </section>
    )
}

export default Team