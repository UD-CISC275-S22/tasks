import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [started, setStart] = useState<boolean>(false);

    function start(): void {
        setStart(true);
        setAttempts(attempts - 1);
    }
    function end(): void {
        setStart(false);
    }
    function incAttempts(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <button onClick={start} disabled={started || attempts === 0}>
                Start Quiz
            </button>
            <button onClick={end} disabled={!started}>
                Stop Quiz
            </button>
            <button onClick={incAttempts} disabled={started}>
                Mulligan
            </button>
            {attempts}
        </div>
    );
}
