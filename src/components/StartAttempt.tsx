import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //start attempt component
    const [attempts, setAttempts] = useState<number>(4);
    const [quizStatus, setQuizStatus] = useState<boolean>(false);

    function startGame(): void {
        setAttempts(attempts - 1);
        setQuizStatus(true);
    }
    function stopGame(): void {
        setQuizStatus(false);
    }
    return (
        <div>
            <Button
                id="startedQuiz"
                onClick={startGame}
                disabled={quizStatus || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button id="stoppedQuiz" onClick={stopGame} disabled={!quizStatus}>
                Stop Quiz
            </Button>
            <Button
                id="mulligan"
                onClick={() => setAttempts(attempts + 1)}
                disabled={quizStatus}
            >
                Mulligan
            </Button>
            {attempts} Attemps Left.
        </div>
    );
}
