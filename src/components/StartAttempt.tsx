import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [started, setStarted] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function quizStartStop(): void {
        setStarted(!started);
        if (!started) {
            removeAttempt();
        }
    }

    function addAttempt(): void {
        setAttempts(attempts + 1);
    }

    function removeAttempt(): void {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <Button onClick={quizStartStop} disabled={started || attempts <= 0}>
                Start Quiz
            </Button>
            <Button onClick={quizStartStop} disabled={!started}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={started}>
                Mulligan
            </Button>
            <div>Attempts Remaining: {attempts} </div>
        </div>
    );
}
