import React from "react";
import "./App.css";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <DoubleHalf />
            </header>
            <ChooseTeam />
        </div>
    );
}

export default App;
