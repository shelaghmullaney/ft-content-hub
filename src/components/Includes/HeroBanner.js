import React, {Component} from 'react'
import {Consumer} from "../../context";
import {ReactComponent as Arrow} from '../../img/down-chevron.svg'
import {ReactComponent as Loader} from '../../img/loader.svg'
import '../../sass/_heroBaner.scss'
import Header from "./Header";
import FilterContainer from "../Filter/FilterContainer";
import ContactContainer from '../Contact/ContactContainer'


const videoLink = 'https://www.ft.com/paidpost/article-hub/ContentHub.mp4'

class HeroBanner extends Component {
    handleClick(e) {
        const articleContainer = document.getElementById('articleContainer')
        console.log(articleContainer)
        articleContainer.scrollIntoView({behavior: "smooth", block: "nearest", inline: 'start'});
    }

    render() {
        const LoadArrow = ({loading}) => {

            return (
                <div className='hero-banner-loading'>
                    <Loader className={loading ? 'hero-banner__loader' : 'hero-banner__loader -hide'}/>
                    <Arrow id='arrow' onClick={this.handleClick.bind(this)}
                           className={loading ? 'hero-banner__arrow' : 'hero-banner__arrow -show'}/>
                </div>
            )
        }
        return (
            <Consumer>
                {value => {
                    return (
                        <React.Fragment>
                            <Header hasScrolled={value.hasScrolled}/>
                            <FilterContainer/>
                            <ContactContainer/>
                            <div className='hero-banner' id='heroBanner'>
                                <video className='hero-banner__video' playsInline autoPlay muted loop>
                                    <source src={videoLink} type="video/mp4"/>
                                </video>
                                <div className="wrap">
                                    <div className="hero-banner__content">
                                        <h1>{this.props.title}</h1>
                                        <h2>{this.props.subHeading}</h2>
                                        <LoadArrow loading={value.loading}/>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>

        )
    }
}

export default HeroBanner