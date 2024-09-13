import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import store from "./store";

const render = (nick: string) => {
	const container = document.getElementById("root");
	if (container) {
		const root = createRoot(container);
		root.render(
			<Provider store={store}>
				<App nick={nick} />
			</Provider>
		);
	}
};

export default render;
