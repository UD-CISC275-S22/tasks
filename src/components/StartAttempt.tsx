import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setQuizInProgress(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setQuizInProgress(false);
    }

    function takeMulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>
                Number of attempts: <span>{attempts}</span>
            </div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={quizInProgress || attempts < 1}
                >
                    Start Quiz
                </Button>
                <Button onClick={stopQuiz} disabled={!quizInProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={takeMulligan} disabled={quizInProgress}>
                    Mulligan
                </Button>
            </div>
            <div>
                {attempts === 0 && quizInProgress ? (
                    <span>Cannot start quiz. Out of attempts!</span>
                ) : (
                    <span>All okay!</span>
                )}
            </div>
        </div>
    );
}
