// You will not need to modify this file

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*The following two imports are needed for the collaspe buttons to work
to install bootstrap:
 1. cd to your final project directory
 2. Type npm install bootstrap jquery popper.js 
 3. Check if it's installed properly cd into node_modules directory and see if you see a Bootstrap directory 
 4. If you do, then you installed Bootstrap correctly*/
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JavaScript

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
