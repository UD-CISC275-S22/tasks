import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setNumAttempts(numAttempts - 1);
                    setProgress(!progress);
                }}
                disabled={progress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            Number of Attempts {numAttempts}
            <Button onClick={() => setProgress(!progress)} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setNumAttempts(numAttempts + 1)}
                disabled={progress}
            >
                Mulligan
            </Button>
        </div>
    );
}
