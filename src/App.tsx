import React from "react";
import "./App.css";
import { WelcomeMessage } from "./Name";
import { Import } from "./ImportExport";
import { createEmptyDegreePlan } from "./createDelete";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                University of Delaware Computer Science Degree Plan
                <p>
                    <WelcomeMessage></WelcomeMessage>
                </p>
                <p>
                    <ul className="horizontal-list">
                        <li> Aidan Bell </li>
                        <li>Lawrence Collins </li>
                        <li>Nicky Reigel</li>
                        <li>Melvin Rau</li>
                        <li>Victor Vasquez</li>
                    </ul>
                </p>
            </header>
            <p>
                <code>src/App.tsx</code> and save. This page will automatically
                reload.
            </p>
            <div className="div-alightleft">
                <div className="App-blockleft">
                    <p>sample block left</p>
                </div>
            </div>
            <div className="div-alignright">
                <div className="App-blockright">
                    <p>sample block right</p>
                </div>
            </div>
            <div>
                <Import></Import>
            </div>
            <div>{createEmptyDegreePlan}</div>
        </div>
    );
}

export default App;
