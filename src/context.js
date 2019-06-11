import React, {Component} from "react"
import axios from "axios"
import _ from "lodash";

const Context = React.createContext()
const ts = Date.now()

const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_TRACKS":
            return {
                ...state,
                track_list: action.payload,
                heading: "Search Results"
            }
            break
        default:
            return state
    }
}


export class Provider extends Component {
    state = {
        articleList: [],
        clientList: [],
        searchVal: '',
        isFilterOpen: false,
        isFormOpen: false,
        hasScrolled: false,
        loading: true,
        sector: '',

        dispatch: action => this.setState(state => reducer(state, action)),
        handleFilterOpen: this.handleFilterOpen.bind(this),
        handleFilterClose: this.handleFilterClose.bind(this),
        clearSearchValue: this.clearSearchValue.bind(this),
        handleSectorChange: e => this.handleSectorChange(e),
        clearSectorChange: this.clearSectorChange.bind(this),
        handleClientChange: e => this.handleClientChange(e),
        handleArticleTagFilter: e => this.handleArticleTagFilter(e),
    }

    componentDidMount() {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://www.ft.com/paidpost/article-hub/articles.json?v=${ts}`
            )
            .then(res => {

                const clientArr = []
                res.data.map(x => clientArr.push(x.clientname))
                this.setState({
                    articleList: res.data,
                    clientList: clientArr,
                    loading: false
                })
            })
            .catch(err => console.log(err))

        const heroBannerHeight = (document.getElementById("heroBanner")).clientHeight

        window.addEventListener('scroll', _.throttle(() => {
            const scrollTop = window.pageYOffset

            if (scrollTop > (heroBannerHeight - 64)) {
                this.setState({hasScrolled: true})
            } else {
                this.setState({
                    hasScrolled: false,
                    isFilterOpen: false,
                })
            }
        }, 550))

    }

    handleClientChange(e) {
        this.setState({
            searchVal: e.target.value
        })
    }

    handleFilterOpen() {
        this.setState(prevState => ({
            isFilterOpen: !prevState.isFilterOpen
        }))
    }

    handleContactForm() {
        this.setState(prevState => ({
            isFormOpen: !prevState.isFormOpen
        }))
    }

    handleFilterClose() {
        this.setState({
            isFilterOpen: false
        })
    }

    clearSearchValue() {
        this.setState({
            searchVal: '',
            sector: ''
        })
        console.log('cleared')
    }

    handleSectorChange(e) {
        this.setState({
            sector: e.target.value
        })
    }

    clearSectorChange() {
        this.setState({
            sector: ''
        })
    }

    handleArticleTagFilter(e) {
        this.setState({
            sector: e.target.dataset.value
        })
    }


    render() {
        return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
    }
}

export const Consumer = Context.Consumer
