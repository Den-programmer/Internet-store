import React from 'react'
import LoginPanel from './LoginPanel/loginPanel'
import MainHeader from './MainHeader/mainHeader'
import HeaderNavbar from './HeaderNavbar/headerNavbar'
import HeaderPageName from './HeaderPageName/headerPageName'

const Header = (props) => {
    return (
        <header>
            <LoginPanel />
            <MainHeader />
            <HeaderNavbar />
            <HeaderPageName />
        </header>
    )
}

export default Header