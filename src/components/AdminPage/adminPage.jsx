import React from 'react'
import classes from './adminPage.module.scss'
import Header from '../Home/Header/header'
import AdminPanel from './AdminPanel/adminPanel'

const AdminPage = () => {
    return (
        <div className={classes.adminPage}>
            <Header />
            <AdminPanel />
        </div>
    )
}

export default AdminPage