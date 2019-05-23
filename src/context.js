import React, { Component } from "react"
import axios from "axios"

const Context = React.createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case "SEARCH_TRACKS":
			return {
				...state,
				track_list: action.payload,
				heading: "Search Results"
			}
		default:
			return state
	}
}

export class Provider extends Component {
	state = {
		article_list: [],
		dispatch: action => this.setState(state => reducer(state, action))
	}

	componentDidMount() {
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://www.ft.com/paidpost/article-hub/articles.json`
			)
			.then(res => {
				this.setState({
					article_list: res.data
				})
			})
			.catch(err => console.log(err))
	}

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
	}
}

export const Consumer = Context.Consumer
