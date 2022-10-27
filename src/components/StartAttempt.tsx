import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function changeProgress(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    return (
        <>
            <div>
                <Button
                    onClick={() => changeProgress()}
                    disabled={progress || attempts <= 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => setProgress(false)} disabled={!progress}>
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
            </div>
            <div>{attempts} Attempts Remaining</div>
        </>
    );
}
