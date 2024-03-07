import React, { useState } from "react";
import "./App.css";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import ChangeColor from "./form-components/ChangeColor";
import MultipleChoiceQuestion from "./form-components/MultipleChoiceQuestion";
useState;
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>CISC275 Matt Holinger</h1>
            </header>
            <div>
                <h2>What is the capital of PA?</h2>
                <CheckAnswer expectedAnswer={"Harrisburg"}></CheckAnswer>
            </div>
            <GiveAttempts />
            <div>
                <h3> </h3>
            </div>
            <div>
                <EditMode />
            </div>
            <div>
                <ChangeColor />
            </div>
            <div>
                <MultipleChoiceQuestion
                    expectedAnswer="2"
                    options={["1", "2", "3"]}
                />
            </div>
        </div>
    );
}

export default App;
