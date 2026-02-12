import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                <h1>UD CISC275 with React Hooks and TypeScript fanta</h1>
            </header>

            <hr />

            {/* Bootstrap Button that logs Hello World */}
            <Button
                className="btn btn-primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <hr />

            <Counter />

            <hr />

            <RevealAnswer />

            <hr />

            <StartAttempt />

            <hr />

            <TwoDice />

            <hr />

            <ChangeType />

            <hr />

            <CycleHoliday />
        </div>
    );
}

export default App;
