import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <>
            <div>
                <Button>Start Quiz</Button>
                <Button onClick={() => setProgress(true)} disabled={!progress}>
                    Start
                </Button>
                <Button onClick={() => setAttempts(attempts - 1)}></Button>
            </div>
            <div>
                <Button>Stop Quiz</Button>
                <Button onClick={() => setProgress(false)} disabled={progress}>
                    Stop
                </Button>
            </div>
            <div>
                <Button>Mulligan</Button>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={!progress}
                >
                    Stop
                </Button>
            </div>
        </>
    );
}
