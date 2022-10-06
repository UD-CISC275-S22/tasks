import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numOfAttempts, setnumOfAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startQuiz() {
        setnumOfAttempts(numOfAttempts - 1);
        setProgress(true);
    }
    return (
        <div>
            <div>
                <span>{numOfAttempts}</span>
            </div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={progress === true || numOfAttempts === 0}
                >
                    Start Quiz
                </Button>
                ;
                <Button
                    onClick={() => setnumOfAttempts(numOfAttempts + 1)}
                    disabled={progress === true}
                >
                    Mulligan
                </Button>
                ;
                <Button
                    onClick={() => setProgress(false)}
                    disabled={progress === false}
                >
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
