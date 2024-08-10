import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById('root'))

const render = (nick) => {
    root.render(<App nick={nick} />)
}

export default render