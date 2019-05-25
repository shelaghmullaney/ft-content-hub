import React, {Component} from "react"
import {Consumer} from "../context"

import ArticleContainer from './Articles/ArticleContainer'

class App extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {value => {
                        return(
                            <ArticleContainer articles={value.article_list}/>
                        )
                    }}
                </Consumer>
            </div>

        )
    }
}

export default App
