import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizActive, setQuizState] = useState<boolean>(false);
    // eslint-disable-next-line prettier/prettier

    function startQuiz(): void {
        //if quiz not in progress and attempts > 0 this will start the quiz
        if (attempts > 0 && quizActive === false) {
            setQuizState(true);
            setAttempts(attempts - 1);
        }
    }

    function stopQuiz(): void {
        //if quiz in progress this will change the state to false(not in progress)
        setQuizState(false);
    }

    function addAttempts(): void {
        //if the Mulligan button is pressed and the quiz is not in progress
        //this function will add an attempt
        setAttempts(attempts + 1);
    }

    return (
        //quizActive is intially false
        <div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={quizActive || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!quizActive}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={addAttempts} disabled={quizActive}>
                    Mulligan
                </Button>
            </div>
            <div>{attempts}</div>
        </div>
    );
}
