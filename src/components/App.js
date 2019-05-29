import React, {Component} from "react"
import {Consumer} from "../context"

import Header from './Includes/Header'
import Footer from './Includes/Footer'

import HeroBanner from './Includes/HeroBanner'

import ArticleContainer from './Articles/ArticleContainer'
import _ from 'lodash'

import '../sass/_app.scss'

class App extends Component {


    componentDidMount() {
        const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


        function RandomColor() {
            const limit = colorArray.length
            const randomNo = Math.floor(Math.random() * limit)

            return colorArray[randomNo]
        }


        window.addEventListener('scroll', _.throttle(() => {
                this.setState({
                    bgColor: RandomColor()
                })
            },
            1100),
            true);
    }

    state = {
        bgColor: 'red'
    }

    _handleScroll(e) {
        console.log('scrolling')
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <HeroBanner
                    title="Welcome to the Financial Times' branded content hub"
                    subHeading="Scroll down to see all of the client-voiced content marketing projects published by the FT.
                                If you'd like any more information on any one project, you can get in touch with us here"
                />
                <div className="article-wrapper" style={{backgroundColor: this.state.bgColor}}>
                    <Consumer>
                        {value => {
                            return (
                                <ArticleContainer articles={value.article_list}/>
                            )
                        }}
                    </Consumer>
                </div>
                <Footer/>
            </React.Fragment>

        )
    }
}

export default App
