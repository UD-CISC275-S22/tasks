import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    const changeAttempts = () => {
        setAttempts(attempts + 1);
    };
    const startQuiz = () => {
        if (attempts > 0) {
            setProgress(true);
            setAttempts(attempts - 1);
        }
    };
    const stopQuiz = () => {
        setProgress(false);
    };
    return (
        <div>
            <div>
                Current attempts: <span>{attempts}</span>
                <Button onClick={changeAttempts} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts <= 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={stopQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
