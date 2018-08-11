import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
// Just adding a comment here
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
