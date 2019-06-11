import React, {Component} from "react"
import {Consumer} from "../context"
import _ from "lodash"

import Footer from "./Includes/Footer"
import HeroBanner from "./Includes/HeroBanner"
import ArticleContainer from "./Articles/ArticleContainer"
import FilterContainer from './Filter/FilterContainer'

import "../sass/_app.scss"

function Search(term) {
    return function (x) {
        return x.clientname.toLowerCase().includes(term.toLowerCase()) || !term
    }
}

function SectorSearch(term) {
    return function (x) {
        return x.sector.toLowerCase().includes(term.toLowerCase()) || !term
    }
}

class App extends Component {
    state = {
        check: false,
        searchVal: ''
    }

    render() {

        return (
            <React.Fragment>
                <Consumer>
                    {value => {
                        return (
                            <div>
                                <HeroBanner
                                    title="Welcome to the Financial Times' branded content hub"
                                    subHeading="Scroll down to see all of the client-voiced content marketing projects published by the FT.
                                If you'd like any more information on any one project, you can get in touch with us here"
                                />
                                <div className='article-wrapper'>
                                    <ArticleContainer
                                        search={Search(value.searchVal)}
                                        sectorSearch={SectorSearch(value.sector)}
                                    />
                                    <FilterContainer/>
                                </div>
                            </div>
                        )
                    }}
                </Consumer>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App