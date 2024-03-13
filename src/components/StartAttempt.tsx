import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inprogress, setProgress] = useState<boolean>(false);

    function startquiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }

    function stopquiz(): void {
        setProgress(false);
    }

    function onemoreattempt(): void {
        setAttempts(attempts + 1);
    }
    function zeroattempts(): boolean {
        return inprogress || attempts === 0;
    }

    return (
        <div>
            <div>
                Number of attempts = <span>{attempts}</span>
            </div>
            <div>
                <Button onClick={startquiz} disabled={zeroattempts()}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopquiz} disabled={!inprogress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={onemoreattempt} disabled={inprogress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
