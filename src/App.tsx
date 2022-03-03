import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { d6, TwoDice } from "./components/TwoDice";
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
    const [numberAttempts, setNumberAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function swapInProgress() {
        setInProgress(!inProgress);
    }

    function updateNumAttempts() {
        setNumberAttempts(numberAttempts++);
    }

    // functions for 2 dice
    const [left_die, setLeftDiceValue] = useState<number>(0);
    const [right_die, setRightDiceValue] = useState<number>(0);

    function rollLeftDice() {
        setLeftDiceValue(d6());
        left_die;
    }
    function rollRightDice() {
        setRightDiceValue(d6());
        right_die;
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
            <Button onClick={swapInProgress}>Start Quiz</Button>
            <Button onClick={swapInProgress}>Stop Quiz</Button>
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
