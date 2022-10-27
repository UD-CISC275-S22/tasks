import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function start(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    function stop(): void {
        setProgress(false);
    }
    return (
        <div>
            <Button
                id="startedQuiz"
                onClick={start}
                disabled={progress || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button id="stoppedQuiz" onClick={stop} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button
                id="mulligan"
                onClick={() => setAttempts(attempts + 1)}
                disabled={progress}
            >
                Mulligan
            </Button>
            {attempts} Attemps Left.
        </div>
    );
    return <div>Start Attempt</div>;
}
