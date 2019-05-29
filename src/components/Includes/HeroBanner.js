import React from 'react'
import {ReactComponent as Arrow} from '../../img/down-chevron.svg'
import '../../sass/_heroBaner.scss'

const videoLink = 'https://www.ft.com/paidpost/article-hub/ft-content-video.mp4'

function clickMe() {
    alert()
}

const HeroBanner = (props) => {
    return (
        <div className='hero-banner'>
            <video className='hero-banner__video' playsInline autoPlay muted loop>
                <source src={videoLink} type="video/mp4"/>
            </video>
            <div className="wrap">
                <div className="hero-banner__content">
                    <h1>{props.title}</h1>
                    <h2>{props.subHeading}</h2>
                    <Arrow onClick={clickMe} className='hero-banner__arrow'/>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner