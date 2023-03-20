import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [Attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function inProgress(): void {
        setAttempt(Attempt - 1);
        setProgress(true);
    }
    function Mul(): void {
        setAttempt(Attempt + 1);
    }

    return (
        <div>
            Number of attempts left : <span>{Attempt}</span>
            <Button onClick={inProgress} disabled={progress || Attempt == 0}>
                Start Quiz
            </Button>{" "}
            <Button onClick={() => setProgress(false)} disabled={!progress}>
                {" "}
                Stop Quiz{" "}
            </Button>
            <Button onClick={Mul} disabled={progress}>
                {" "}
                Mulligan{" "}
            </Button>
        </div>
    );
}
