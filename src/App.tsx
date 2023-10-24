import React from "react";
import "./App.css";
import { WelcomeMessage } from "./Name";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                University of Delaware Computer Science Degree Plan
                <p>
                    <WelcomeMessage></WelcomeMessage>
                </p>
            </header>
            <p>
                Aidan Bell Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
                <p>Lawrence Collins </p>
                <p>Nicky Reigel</p>
                <p>Melvin Rau</p>
                <p>Victor Vasquez</p>
            </p>
        </div>
    );
}

export default App;
