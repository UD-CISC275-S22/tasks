import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizProgress, setQuizProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setQuizProgress(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setQuizProgress(false);
    }

    return (
        <div>
            <Button
                id="start quiz"
                onClick={startQuiz}
                disabled={quizProgress || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button id="stop quiz" onClick={stopQuiz} disabled={!quizProgress}>
                Stop Quiz
            </Button>
            <Button
                id="mulligan"
                onClick={() => setAttempts(attempts + 1)}
                disabled={quizProgress}
            >
                Mulligan
            </Button>
            {attempts} Attempts Left.
        </div>
    );
}
