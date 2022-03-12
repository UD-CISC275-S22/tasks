import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/question";

export function StartAttempt(): JSX.Element {
    type QuizProgress = "IN PROGRESS" | "NOT IN PROGRESS";

    // eslint-disable-next-line prefer-const
    let [qProg, setQProg] = useState<QuizProgress>("NOT IN PROGRESS");
    // eslint-disable-next-line prefer-const
    let [attempts, setAttempts] = useState<number>(4);

    function inProg(): void {
        setQProg((qProg = "NOT IN PROGRESS"));
        loseAttempt();
    }

    function notProg(): void {
        setQProg((qProg = "NOT IN PROGRESS"));
    }

    function gainAttempt(): void {
        setAttempts((attempts = attempts + 1));
    }

    function loseAttempt(): void {
        setAttempts((attempts = attempts - 1));
    }

    return (
        <div>
            <div>
                <Button onClick={inProg}>Start Quiz</Button>
            </div>
            <div>
                <Button onClick={notProg}>Stop Quiz</Button>
            </div>
            <div>
                Attempts <span>{attempts}</span>
                <Button onClick={gainAttempt}>Mulligan</Button>
            </div>
        </div>
    );
}
