import React from 'react'
import logo from '../../img/ft.png'
import '../../sass/_header.scss'

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <img src={logo} alt="Logo"/>
            </div>
        </header>
    )
}

export default Header