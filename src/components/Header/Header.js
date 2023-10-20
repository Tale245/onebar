import React from "react"

import './Header.css';

import logo from '../../images/neonLogo.svg'
import profileAvatar from '../../images/profileAvatar.svg'

const Header = ({userInfo}) => {
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип" />
            <div className="header__container">
                <img className="header__avatar" src={profileAvatar} alt="Аватарка"/> 
                <p className="header__account-name" >{userInfo?  userInfo.name : 'Загрузка...'}</p> 
            </div>
        </header>
    )
}

export default Header