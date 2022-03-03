import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { QuestionType } from "./interfaces/question";

function App(): JSX.Element {
    // My functions for Reveal Answer
    const [visible, setVisible] = useState<boolean>(true);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }

    // Functions for Start Attempt

    // functions for 2 dice
    const [left_die, setLeftDiceValue] = d6());
    const [right_die, setRightDiceValue] = d6());

    function rollLeftDice() {

    }
    function rollRightDice() {

    }
    // functions for Change Type

    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestionType() {
        setQuestionType(
            questionType == "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    // functions for Cycle Holiday
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "blue" }}>
                Cool Locations around the World by CISC275
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <Button onClick={flipVisibility}>Show/Hide</Button>
            {visible && <div>41</div>}
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <Button onClick={rollLeftDice}>Roll Left</Button>
            {<span></span>}
            <Button onClick={rollRightDice}>Roll Right</Button>
            {<span></span>}
            <hr />
            <ChangeType></ChangeType>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {questionType == "short_answer_question" ? (
                <div> Short Answer </div>
            ) : (
                <div> Multiple Choice </div>
            )}
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
