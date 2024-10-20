import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttemps] = useState<number>(4);
    const [inProgess, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttemps(attempts - 1);
        setProgress(true);
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setAttemps(attempts + 1);
    }

    return (
        <div>
            <p>Attemps Remaining: {attempts}</p>

            <Button onClick={startQuiz} disabled={inProgess || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgess}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgess}>
                Mulligan
            </Button>
        </div>
    );
}
