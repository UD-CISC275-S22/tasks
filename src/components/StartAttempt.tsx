import React, { useState } from "react";
import { Button } from "react-bootstrap";

{
    /* 13 / 13 passing tests !!! */
}

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function flipProgress(): void {
        // Set visible to be the logical opposite of its previous value
        setProgress(!progress);
    }
    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        flipProgress();
                        setAttempts(attempts - 1);
                    }}
                    disabled={attempts <= 0 || progress}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => flipProgress()} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={progress}
                >
                    Mulligan
                </Button>
                to {attempts}.
            </div>
        </div>
    );
}
