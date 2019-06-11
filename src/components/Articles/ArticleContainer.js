import React, {Component} from 'react'
import {Consumer} from "../../context"

import ArticleItem from './ArticleItem'
import '../../sass/_articleContainer.scss'

class ArticleContainer extends Component {
    render() {

        const SearchHeader = ({sector, searchVal, clear}) => {
            let returnVal = ''
            if (sector && !searchVal) {
                returnVal = `Searching for : ${sector}`
            }
            if (searchVal && !sector) {
                returnVal = `Searching for : ${searchVal}`
            }
            if (searchVal && sector) {
                returnVal = `Searching for : ${searchVal} & ${sector}`
            }

            if (searchVal || sector) {
                return (
                    <div>
                        {returnVal}
                        <button onClick={clear.bind(this)}> Clear</button>
                    </div>
                )
            } else {
                return null
            }
        }

        const ArticleItemWrapper = ({articleList, searchFilter, sectorFilter, articleTagFilter}) => {
            return (
                articleList.filter(searchFilter).filter(sectorFilter).map((article, i) => {
                    return (
                        <ArticleItem tagFilter={articleTagFilter} key={i} item={article}/>
                    )
                })
            )
        }


        return (
            <Consumer>
                {value => {
                    const {sector, searchVal, clearSearchValue, articleList, handleArticleTagFilter} = value
                    const {search, sectorSearch} = this.props
                    return (
                        <div className="wrap">
                            <SearchHeader sector={sector} searchVal={searchVal} clear={clearSearchValue}/>
                            <div className='article-container' id='articleContainer'>
                                <ArticleItemWrapper articleList={articleList}
                                                    searchFilter={search}
                                                    sectorFilter={sectorSearch}
                                                    articleTagFilter={handleArticleTagFilter}
                                />
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default ArticleContainer