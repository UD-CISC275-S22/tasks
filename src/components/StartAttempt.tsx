import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function Start(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }
    return (
        <span>
            <Button
                onClick={() => Start()}
                disabled={inProgress || attempts <= 0}
            >
                {" "}
                Start Quiz{" "}
            </Button>{" "}
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                {" "}
                Stop Quiz{" "}
            </Button>{" "}
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress}
            >
                {" "}
                Mulligan{" "}
            </Button>
            <br></br>
            attempts: {attempts}
        </span>
    );
}
