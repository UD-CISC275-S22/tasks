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
    const [counter, setCounter] = useState<number>(0);

    function addOne(): void {
        setCounter(counter + 1);
    }
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with Reaction Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <Button onClick={addOne}>{counter}</Button>;
            </p>
        </div>
    );
}

export default App;
