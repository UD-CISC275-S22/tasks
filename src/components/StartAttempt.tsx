import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    function minusAttempts(): void {
        setAttempts(attempts - 1);
    }
    function addAttempts(): void {
        setAttempts(attempts + 1);
    }
    function changeProgress(): void {
        setProgress(!inProgress);
    }
    function update(): void {
        minusAttempts();
        changeProgress();
    }
    return (
        <div>
            <Button onClick={update} disabled={!inProgress || attempts === -1}>
                Start Quiz
            </Button>
            <Button onClick={update} disabled={inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempts} disabled={!inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
