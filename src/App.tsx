import React from "react";
import "./App.css";

import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with Reaction Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <br></br>
                <br></br>
                Counter:<Counter></Counter>
            </div>
            <div>
                <br></br>
                Reveal Answer:<RevealAnswer></RevealAnswer>
            </div>
            <div>
                <br></br>
                Change Type:<ChangeType></ChangeType>
            </div>
            <div>
                <br></br>
                Start Attempt:<StartAttempt></StartAttempt>
            </div>
            <div>
                <br></br>
                Two Dice:<TwoDice></TwoDice>
            </div>
            <div>
                <br></br>
                <CycleHoliday></CycleHoliday>
            </div>
        </div>
    );
}

export default App;
