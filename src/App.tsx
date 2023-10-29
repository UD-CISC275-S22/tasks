import React from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Image1} className="logo" />
                <h1 className="Title">Udel CS Course Scheduler</h1>
                <img src={Image2} className="logo" />
            </header>
        </div>
    );
}

export default App;
