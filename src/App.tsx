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
                <h1>UD CISC275 with React Hooks and TypeScript Hello world</h1>
            </header>
            <p>

            </p>

            <img
                src="https://commons.wikimedia.org/wiki/File:383-waving-hand-1.svg"
                alt="Waving"
                className="App-image"
            />
 <ul>
                <li>1st</li>
                <li>2nd</li>
                <li>3rd</li>
            </ul>
            

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
