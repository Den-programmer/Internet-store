import React from 'react'
import LoginPanel from './LoginPanel/loginPanelContainer'
import MainHeader from './MainHeader/mainHeader'
import HeaderNavbar from './HeaderNavbar/headerNavbar'
import HeaderPageName from '../../common/HeaderPageName/headerPageNameContainer'

const Header = (props) => {
    return (
        <header>
            <LoginPanel />
            <MainHeader />
            <HeaderNavbar />
            <HeaderPageName currentPageName="About us" currentPath="Home/About Us"/>
        </header>
    )
}

export default Header