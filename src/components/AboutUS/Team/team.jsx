import React from 'react'
import classes from './team.module.scss'
import Member from './Member/member'
import { useTranslation } from 'react-i18next'

const Team = (props) => {
    const { t } = useTranslation()
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
                <h3>{t("Meet_the_Team")}</h3>
                <p>
                    {t("Team_subtext")}
                </p>
            </div>
            <div className={classes.members}>
                {Team}
            </div>
        </section>
    )
}

export default Team