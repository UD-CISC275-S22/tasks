import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
    function startQuiz(): void {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts(attempts - 1);
        }
    }
    function stopQuiz(): void {
        setQuizInProgress(false);
    }
    function mulligan(): void {
        if (!quizInProgress) {
            setAttempts(attempts + 1);
        }
    }
    return (
        <>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={quizInProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={stopQuiz} disabled={!quizInProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={mulligan} disabled={quizInProgress}>
                    Mulligan
                </Button>
            </div>
            <p>Attempts: {attempts}</p>
        </>
    );
}
