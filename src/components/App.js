import React, {Component} from "react"
import {Consumer} from "../context"

import Header from './Includes/Header'
import Footer from './Includes/Footer'

import HeroBanner from './Includes/HeroBanner'

import ArticleContainer from './Articles/ArticleContainer'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <HeroBanner
                    title="Welcome to the Financial Times' branded content hub"
                    subHeading="Scroll down to see all of the client-voiced content marketing projects published by the FT.
                                If you'd like any more information on any one project, you can get in touch with us here"
                />
                <Consumer>
                    {value => {
                        return (
                            <ArticleContainer articles={value.article_list}/>
                        )
                    }}
                </Consumer>
                <Footer/>
            </React.Fragment>

        )
    }
}

export default App
