import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempts] = useState<number>(4);
    const [quizProgress, setProgress] = useState<boolean>(false);

    function changeAttempts(): void {
        setAttempts(attempt + 1);
    }
    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempt - 1);
    }
    return (
        <div>
            <div>
                <span>{attempt}</span>
            </div>
            <div>
                <Button onClick={changeAttempts} disabled={quizProgress}>
                    Mulligan
                </Button>
            </div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={quizProgress || attempt === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={!quizProgress}
                >
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
