//import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import React, { useState } from "react";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

type QuestionType = "multiple_choice_question" | "short_answer_question";

function App(): JSX.Element {
    //Counter
    const [counter, setCounter] = useState<number>(0);
    function addOne(): void {
        setCounter(counter + 1);
    }

    //RevealAnswer
    const [visible, setVisible] = useState<boolean>(true);
    function flipVisibility(): void {
        setVisible(!visible);
    }

    //ChangeType
    const [question, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestionType(): void {
        setQuestionType(
            question === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    //StartAttempt
    const [inProgress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function changeProgress(): void {
        setProgress(inProgress === false ? true : false);
    }

    function changeAttempts(): void {
        setAttempts(attempts == 0 ? attempts + 1 : attempts - 1);
    }

    function startQuiz(): void {
        changeProgress();
        changeAttempts();
    }

    return (
        <div>
            <div>
                <Button onClick={addOne}>{counter}</Button>
            </div>
            <div>
                <Button name="/Reveal Answer/i" onClick={flipVisibility}>
                    Reveal Answer
                </Button>
                {visible && <div>42</div>}
            </div>
            <div>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
            <div>
                {question === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts == 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={changeProgress} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={changeAttempts} disabled={attempts != 0}>
                    Mulligan
                </Button>
            </div>
            <div>
                <span>Attempts: {attempts}</span>
            </div>

            {/* <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <hr></hr>
                <DoubleHalf></DoubleHalf>
                <hr></hr>
                <ChooseTeam></ChooseTeam>
                <hr></hr>
                <ColoredBox></ColoredBox>
                <hr></hr>
                <ShoveBox></ShoveBox>
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
            </div>
        </div> */}
        </div>
    );
}

export default App;
