import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quiz, setQuiz] = useState<boolean>(false);

    function startQuiz(): void {
        setQuiz(true);
        setAttempts((prevAttempts) => prevAttempts - 1);
    }
    function stopQuiz(): void {
        setQuiz(false);
    }
    function mulligan(): void {
        setAttempts((prevAttempts) => prevAttempts + 1);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={quiz || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quiz}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quiz}>
                Mulligan
            </Button>
            <p>{attempts}</p>
        </div>
    );
}
