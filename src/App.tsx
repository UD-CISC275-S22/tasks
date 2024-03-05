import React from "react";
import "./App.css";

import { Counter } from "./components/Counter";
import { TwoDice } from "./components/TwoDice";
import { StartAttempt } from "./components/StartAttempt";
import { RevealAnswer } from "./components/RevealAnswer";
import { CycleHoliday } from "./components/CycleHoliday";

function App(): JSX.Element {
    return (
        <div>
            <h1>Welcome to My App!</h1>
            <Counter />
            <TwoDice />
            <StartAttempt />
            <RevealAnswer />
            <CycleHoliday />
        </div>
    );
}

export default App;
