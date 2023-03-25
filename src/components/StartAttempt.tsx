import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    // tracks the status of the start, stop, and mulligan buttons
    //functionality for start button
    function startButton() {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    //functionality for stop button
    function stopButton() {
        setProgress(false);
    }
    //funtionality for mulligan button
    function mulliganButton() {
        setAttempts(attempts + 1);
    }
    //check attempts
    function zeroAttemptsLeft() {
        if (attempts > 0) {
            return inProgress;
        } else {
            return true;
        }
    }

    return (
        <span>
            <Button onClick={() => startButton()} disabled={zeroAttemptsLeft()}>
                Start Quiz
            </Button>
            <Button onClick={() => stopButton()} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={() => mulliganButton()} disabled={inProgress}>
                Mulligan
            </Button>
            <div>Attempts: {attempts}</div>
            <div>In-Progress: {inProgress.toString().toUpperCase()}</div>
        </span>
    );
}
