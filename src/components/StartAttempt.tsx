import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [started, setStarted] = useState<boolean>(false);
    const [attempt, setAttempt] = useState<number>(4);

    function startAttempt(): void {
        if (attempt > 0) {
            setStarted(true);
            setAttempt(attempt - 1);
        }
    }
    function mulligan(): void {
        if (!started) {
            setAttempt(attempt + 1);
        }
    }
    function stopQuiz(): void {
        setStarted(false);
    }
    return (
        <div>
            <Button onClick={startAttempt} disabled={started || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={mulligan} disabled={started}>
                Mulligan
            </Button>
            <Button onClick={stopQuiz} disabled={!started}>
                Stop Quiz
            </Button>
            <p>Attempts: {attempt}</p>
        </div>
    );
}
