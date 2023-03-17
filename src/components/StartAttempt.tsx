//eslint - disable - next - line;
import React, { useState } from "react";
//eslint - disable - next - line;
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, addAttempt] = useState<number>(4);
    const [progress, setState] = useState<boolean>(true);
    return (
        <span>
            <Button
                onClick={() => {
                    setState(false), addAttempt(attempts - 1);
                }}
                disabled={!progress || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setState(true)} disabled={progress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => addAttempt(1 + attempts)}
                disabled={!progress}
            >
                Mulligan
            </Button>
            to {attempts}
        </span>
    );
}
