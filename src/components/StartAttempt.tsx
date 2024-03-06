import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
    function stopQuiz(): void {
        setQuizInProgress(false);
    }
    function startQuiz(): void {
        setQuizInProgress(true);
        setAttempts(attempts - 1);
    }
    function giveAttempt(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <div>
                {" "}
                Attempts: <span>{attempts}</span>
            </div>
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={giveAttempt} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
