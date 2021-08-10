import React from 'react'
import LoginPanel from './loginPanel/loginPanelContainer'
import MainHeader from './mainHeader/mainHeaderContainer'
import Navbar from './Navbar/navbar'

const Header = (props) => {
    return (
        <header>
            <LoginPanel />
            <MainHeader />
            <Navbar />
        </header>
    )   
}

export default Header