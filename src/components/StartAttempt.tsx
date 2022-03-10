import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setprogress] = useState<boolean>(false);
    const [attempts, setattempts] = useState<number>(4);

    function changeProcess(): void {
        setprogress(!progress);
    }
    function reduceProgress(): void {
        setattempts(attempts - 1);
    }
    function clickStartQuiz(): void {
        changeProcess();
        reduceProgress();
    }
    function addProgress(): void {
        setattempts(attempts + 1);
    }

    return (
        <div>
            <span>{attempts}</span>
            <div>
                <Button
                    onClick={clickStartQuiz}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={changeProcess} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={addProgress} disabled={progress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
