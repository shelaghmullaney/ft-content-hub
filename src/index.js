import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import { Provider } from "./context"

const Container = () => {
	return (
		<Provider>
			<App />
		</Provider>
	)
}

render(<Container />, document.querySelector("#root"))
