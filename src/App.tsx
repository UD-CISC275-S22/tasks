import React from "react";
import "./App.css";
import { SeeSingleSemester } from "./Components/SeeSingleSemester";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr></hr>
            <SeeSingleSemester></SeeSingleSemester>
        </div>
    );
}

export default App;
