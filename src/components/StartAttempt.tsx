import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //You will need two pieces of state: the number of attempts and whether the quiz is in progress.
    //The initial number of attempts is 4, The quiz is initially NOT in progress
    const [attempt, setAttempt] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    function start(): void {
        if (attempt > 0) {
            setQuizInProgress(true);
            setAttempt((attemptNumber) => attemptNumber - 1);
        }
    }
    function stop(): void {
        setQuizInProgress(false);
    }

    function mulligan(): void {
        setAttempt((attemptNumber) => attemptNumber + 1);
    }

    return (
        <div>
            <Button onClick={start} disabled={quizInProgress || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
            <div>Attempts Left: {attempt}</div>
        </div>
    );
}
