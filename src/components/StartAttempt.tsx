import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [started, setStarted] = useState(false);

    function startQuiz() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setStarted(true);
        }
    }

    function stopQuiz() {
        setStarted(false);
    }

    function mulligan() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <p>Attempts: {attempts}</p>

            <Button
                onClick={startQuiz}
                disabled={started || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={stopQuiz}
                disabled={!started}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={mulligan}
                disabled={started}
            >
                Mulligan
            </Button>
        </div>
    );
}