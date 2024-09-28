import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quiz, setProggress] = useState<boolean>(false);

    const startQuiz = (): void => {
        setProggress(true);
        setAttempts(attempts-1);
    };

    const stopQuiz = (): void => {
        setProggress(false);
    };

    const getAttemps = (): void => {
        setAttempts(attempts + 1);
    };


    return (
        <div>
           <span>{attempts}</span>
            <Button onClick={startQuiz} disabled={quiz || attempts==0}>
                Start Quiz
            </Button>
            <Button onClick={getAttemps} disabled={quiz}>
                Mulligan
            </Button>
            <Button onClick={stopQuiz} disabled={!quiz}>
                Stop Quiz
            </Button>
        </div>
    );
}