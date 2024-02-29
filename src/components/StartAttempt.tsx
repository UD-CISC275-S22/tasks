import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [tries, setTries] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function reduceTries(): void {
        setTries(tries - 1);
        setProgress(true);
    }
    return (
        <div>
            <Button onClick={reduceTries} disabled={progress || tries === 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={() => setTries(tries + 1)} disabled={progress}>
                Mulligan
            </Button>
            <div>Number of Attempts {tries}</div>
        </div>
    );
}
