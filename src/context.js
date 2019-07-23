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
        sector: '',
        platform: '',
        product: '',
        isFilterOpen: false,
        isFormOpen: false,
        hasScrolled: false,
        loading: true,

        dispatch: action => this.setState(state => reducer(state, action)),
        handleFilterOpen: this.handleFilterOpen.bind(this),
        handleFormOpen: this.handleFormOpen.bind(this),
        handleFilterClose: this.handleFilterClose.bind(this),
        clearSearchValue: this.clearSearchValue.bind(this),
        clearSectorChange: this.clearSectorChange.bind(this),
        handleSectorChange: e => this.handleSectorChange(e),
        handlePlatformChange: e => this.handlePlatformChange(e),
        handleProductChange: e => this.handleProductChange(e),
        handleClientChange: e => this.handleClientChange(e),
        handleArticleTagFilter: e => this.handleArticleTagFilter(e),
        handleHeaderClientFilter: e => this.handleHeaderClientFilter(e)
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
        const body = document.body
        let timer = null

        window.scroll(0, 0);

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

            clearTimeout(timer);
            if (!body.classList.contains('disable-hover')) {
                body.classList.add('disable-hover')
            }

            timer = setTimeout(function () {
                body.classList.remove('disable-hover')
            }, 200);
        }, 250), true)

    }

    handleClientChange(e) {
        this.setState({
            searchVal: e.target.value
        })
    }

    handleFilterOpen() {
        this.setState(prevState => ({
            isFilterOpen: !prevState.isFilterOpen,
            isFormOpen: false
        }))
    }
    handleFormOpen() {
        this.setState(prevState => ({
            isFormOpen: !prevState.isFormOpen,
            isFilterOpen: false
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
            sector: '',
            platform: '',
            product: ''
        })
    }

    handleSectorChange(e) {
        this.setState({
            sector: e.target.value
        })
    }
    handleProductChange(e) {
        this.setState({
            product: e.target.value
        })
    }

    handlePlatformChange(e) {
        this.setState({
            platform: e.target.value
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

    handleHeaderClientFilter(e) {
        this.setState({
            searchVal: e.target.dataset.search,
            sector: ''
        })
    }



    render() {
        return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
    }
}

export const Consumer = Context.Consumer
