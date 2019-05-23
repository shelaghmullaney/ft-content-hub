import React, { Component } from "react"
import { Consumer } from "../context"

class App extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					console.log(value)

				}}
			</Consumer>
		)
	}
}

export default App
