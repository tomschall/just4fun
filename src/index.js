import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./css/index.css"
import "./style.css"
import App from "./components/App"
import WebFont from "webfontloader"
import { BrowserRouter } from "react-router-dom"

WebFont.load({
	google: {
		families: ["Titillium Web:300,400,700", "sans-serif"],
	},
})
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
)
