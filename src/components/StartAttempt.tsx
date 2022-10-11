import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [counter, setCounter] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    const startButton = (): void => {
        setCounter(counter - 1), setProgress(true);
    };
    return (
        <div>
            <span>
                <Button onClick={() => startButton()}>Start Quiz</Button>
            </span>
            <span>
                <Button onClick={() => setProgress(false)}>Stop Quiz</Button>
            </span>
            <span>
                <Button onClick={() => setCounter(counter + 1)}>
                    Mulligan
                </Button>
            </span>
            {progress && <div>In Progress</div>}
            <div>
                Attempts Left: <span> {counter} </span>
            </div>
        </div>
    );
}
