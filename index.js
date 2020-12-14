import { react } from "babel-types";
import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";

const run = ()=>{
    ReactDom.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById("root")
    );
};
navigator.serviceWorker.register('sw0.js');
run();
