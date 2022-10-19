import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
// import { ChooseTeam } from "./bad-components/ChooseTeam";
// import { DoubleHalf } from "./bad-components/DoubleHalf";
// import { ShoveBox } from "./bad-components/ShoveBox";
// import { ColoredBox } from "./bad-components/ColoredBox";

function App(): JSX.Element {
    // Make a variable based on some State. No problem!
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <hr />
            {/* <ChooseTeam></ChooseTeam>
            <hr />
            <ColoredBox></ColoredBox>
            <hr />
            <ShoveBox></ShoveBox>
            <hr />
            <DoubleHalf></DoubleHalf>
            <hr /> */}
        </div>
    );
}

export default App;
