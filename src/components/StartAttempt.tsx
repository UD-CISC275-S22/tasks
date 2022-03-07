import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [process, setProcess] = useState<boolean>(false);
    function minus(): void {
        setAttempts(attempts - 1);
    }
    function added(): void {
        setAttempts(attempts + 1);
    }
    function start(): void {
        stop();
        minus();
    }
    function stop(): void {
        setProcess(!process);
    }

    return (
        <div>
            <p>Current Attempt: {attempts}</p>
            <div>
                <Button onClick={start} disabled={process || attempts === 0}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stop} disabled={!process}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={added} disabled={process}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
