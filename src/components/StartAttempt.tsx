import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    function flipProgress(): void {
        if (progress === false) {
            setAttempts(attempts - 1);
        }
        setProgress(!progress);
    }
    return (
        <div>
            <div>
                Test Active: {!progress && <div>No</div>}{" "}
                {progress && <div>Yes</div>}
            </div>
            <div>
                Number of Attempts: <span>{attempts}</span>
            </div>
            <div>
                <Button
                    onClick={flipProgress}
                    disabled={progress || attempts < 1}
                >
                    Start Quiz
                </Button>
                <Button onClick={flipProgress} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={progress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
