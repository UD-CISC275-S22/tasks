import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numOfAttempts, setNumOfAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => [
                    setQuizInProgress(true),
                    setNumOfAttempts(numOfAttempts - 1)
                ]}
                disabled={quizInProgress || numOfAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setQuizInProgress(false)}
                disabled={!quizInProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => setNumOfAttempts(numOfAttempts + 1)}
                disabled={quizInProgress}
            >
                Mulligan
            </Button>
            <span>{numOfAttempts}</span>
        </div>
    );
}
