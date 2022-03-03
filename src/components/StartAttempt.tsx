import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function StartQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(!progress);
    }
    function StopQuiz(): void {
        setProgress(!progress);
    }
    function IncAttempts(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Button
                onClick={StartQuiz}
                disabled={progress === true || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={StopQuiz} disabled={progress === false}>
                Stop Quiz
            </Button>
            <Button onClick={IncAttempts} disabled={progress === true}>
                Mulligan
            </Button>
            Number of Attempts: <span>{attempts}</span>
        </div>
    );
}
