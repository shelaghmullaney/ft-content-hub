import React, {Component} from 'react'
import {Consumer} from "../../context";

import logoNo from '../../img/ft-no-words.png'
import logo from '../../img/ft.png'
import { ReactComponent as Filter } from '../../img/Filter_menu.svg';
import { ReactComponent as Contact } from '../../img/contact_v2.svg';

import '../../sass/_header.scss'

const HandleHeaderLogo = ({hasScrolled}) => {
    if (!hasScrolled) {
        return <img className='header-logo__img' src={logo} alt='ft-logo'/>
    } else {
        return <img className='header-logo__img-word'  src={logoNo} alt='ft-logo'/>
    }
}


class Header extends Component {
    render() {
        let SearchHeader = ({sector, search, platform, clear, product}) => {

            if (product === '1') {
                product = ' HTSI'
            } else if (product === '2') {
                product = ' FT'
            }

            if (platform === '1') {
                platform = 'Brand Story'
            } else if (platform === '2') {
                platform = 'Brand Suite'
            } else if (platform === '3') {
                platform = 'Brand Feature'
            }

            let searchVal = search.length ? <div className="header-filter__search"> {`  ${search}`} </div> : ''
            let platformVal = platform.length ? <div className="header-filter__platform"> {platform} </div> : ''
            let sectorVal = sector.length ? <div className='header-filter__sector'> {sector.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })} </div> : ''
            let productVal = product.length ? <div className='header-filter__product'> {product} </div> : ''

            return (
                <div className='header-filter'>
                    <span className='header-filter__home' onClick={clear.bind(this)}>Home</span>
                    {productVal}
                    {platformVal}
                    {searchVal}
                    {sectorVal}
                    <span className='header-filter__clear' onClick={clear.bind(this)}>Clear Filter</span>
                </div>
            )
        }

        return (
            <Consumer>
                {value => {
                    const {sector, searchVal, platform, clearSearchValue, product, handleHeaderClientFilter} = value

                    return (
                        <header className={this.props.hasScrolled ? '-scrolling' : ''}>
                            <div className='header-container'>
                                <div className="header-logo">
                                    <HandleHeaderLogo hasScrolled={this.props.hasScrolled}/>
                                </div>
                                <div className="wrap">
                                    <div
                                        className={this.props.hasScrolled && (searchVal.length || sector.length || platform.length || product.length) ? 'header-filter-container -filtering' : 'header-filter-container'}>

                                        <SearchHeader
                                            sector={sector}
                                            search={searchVal}
                                            platform={platform}
                                            product={product}
                                            clear={clearSearchValue.bind(this)}
                                            handleClientFilter={handleHeaderClientFilter}
                                        />
                                    </div>
                                </div>
                                <div className={this.props.hasScrolled ? 'header-btn -show' : 'header-btn'}>
                                    <div className={value.isFormOpen ? 'header-btn__contact open' : 'header-btn__contact'}>
                                        <Contact onClick={value.handleFormOpen.bind(this)} />
                                    </div>
                                    <div
                                        className={value.isFilterOpen ? 'header-burger-wrapper open' : 'header-burger-wrapper'}>
                                        <Filter onClick={value.handleFilterOpen.bind(this)} />
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