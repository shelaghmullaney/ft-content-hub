import React, {Component} from 'react'
import {Consumer} from "../../context";

import logo from '../../img/ft.png'
import logoBlk from '../../img/ft-black.png'

import contact from '../../img/contact.png'
import menu from '../../img/menu.png'

import '../../sass/_header.scss'

const HandleHeaderLogo = ({hasScrolled}) => {
    if (hasScrolled) {
        return <img className='header-logo__img' src={logoBlk} alt='ft-logo-black'/>
    } else {
        return <img className='header-logo__img' src={logo} alt='ft-logo'/>
    }

}

class Header extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <header>
                            <div className='header-container'>
                                <div className="header-logo">
                                    <HandleHeaderLogo hasScrolled={this.props.hasScrolled}/>
                                </div>
                                <div className={this.props.hasScrolled ? 'header-btn -show' : 'header-btn'}>
                                    <img className='header-btn__contact' src={contact} alt="Contact"/>
                                    <div id="nav-icon3" className={value.isFilterOpen ? 'header-btn__menu open' : 'header-btn__menu'}
                                         onClick={value.handleFilterOpen.bind(this)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    )
                }}
            </Consumer>
        )
    }
}

export default Header