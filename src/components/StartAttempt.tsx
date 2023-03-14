import React, { useState } from "react";
import { Button } from "react-bootstrap";

{
    /* 6 / 13 passing tests */
}

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function flipProgress(): void {
        // Set visible to be the logical opposite of its previous value
        setProgress(!progress);
    }
    return (
        <>
            <div>
                <Button>Start Quiz</Button>
                <Button onClick={() => setProgress(true)} disabled={!progress}>
                    Start
                </Button>
                {/* if attempts is less than 4 start cannot be clicked */}
                <Button onClick={() => setAttempts(attempts - 1)}></Button>
            </div>
            <div>
                <Button>Stop Quiz</Button>
                <Button onClick={() => setProgress(true)} disabled={progress}>
                    Stop Quiz
                </Button>
            </div>
            <span>
                <Button onClick={() => setAttempts(attempts + 1)}>
                    Mulligan
                </Button>
                to {attempts}.
            </span>
        </>
    );
}
