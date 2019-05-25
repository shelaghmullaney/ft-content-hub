import React, {Component} from 'react'

import ArticleItem from './ArticleItem'
import '../../sass/_articleContainer.scss'

class ArticleContainer extends Component {
    render() {
        return (
            <div className='article-container'>
                {this.props.articles && this.props.articles.map((article, i) => {
                    return(
                        <ArticleItem key={i} item={article}/>
                    )
                })}
            </div>
        )
    }
}

export default ArticleContainer