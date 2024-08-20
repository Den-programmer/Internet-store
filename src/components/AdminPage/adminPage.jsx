import React from 'react'
import classes from './adminPage.module.scss'
import Header from '../Home/Header/header'
import AdminPanel from './AdminPanel/adminPanel'
import { Redirect } from 'react-router-dom/cjs/react-router-dom'

const AdminPage = (props) => {
    // debugger
    // if(!props.isAuth || !props.isAdmin) {
    //     return <Redirect to="/MyAccount"/>
    // }
    return (
        <div className={classes.adminPage}>
            <Header />
            <AdminPanel />
        </div>
    )
}

export default AdminPage