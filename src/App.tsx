import React from "react";
import "./App.css";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>CISC275 Matt Holinger</h1>
                <DoubleHalf />
            </header>
            <ChooseTeam />
            <ColoredBox />
            <ShoveBox />
        </div>
    );
}

export default App;
