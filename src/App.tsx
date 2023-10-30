import React from "react";
import "./App.css";
import { SeeSingleSemester } from "./Components/SeeSingleSemester";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <SeeSingleSemester></SeeSingleSemester>
        </div>
    );
}

export default App;
