import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function changeProgress(): void {
        if (inProgress) {
            setInProgress(false);
        } else {
            setInProgress(true);
            setNumAttempts(numAttempts - 1);
        }
    }

    return (
        <div>
            <div>
                Number of Attempts Remaining: <span>{numAttempts}</span>
            </div>
            <div>
                <Button
                    onClick={changeProgress}
                    disabled={inProgress || numAttempts === 0}
                >
                    Start Quiz 
                </Button>
                <Button onClick={changeProgress} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
            <br></br>
            <div>
                <Button
                    onClick={() => setNumAttempts(numAttempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
