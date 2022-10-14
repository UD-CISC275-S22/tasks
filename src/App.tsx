import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import pic1 from "./pictures/pic1.jpg";

console.log(pic1);
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
                <div>
                    <br></br>
                    <br></br>
                    Counter:<Counter></Counter>
                </div>
                <div>
                    Reveal Answer:<RevealAnswer></RevealAnswer>
                </div>
            </p>
        </div>
    );
}

export default App;
