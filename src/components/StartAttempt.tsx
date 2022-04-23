import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [testing, setTesting] = useState<boolean>(false);

    function startQuiz(): void {
        setTesting(testing === false ? true : false);
        setAttempt(attempt - 1);
    }

    function stopQuiz(): void {
        setTesting(testing === true ? false : true);
    }

    function mulligan(): void {
        setAttempt(attempt + 1);
    }

    return (
        <>
            <div>
                <Button
                    onClick={() => startQuiz()}
                    disabled={testing || attempt === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => stopQuiz()} disabled={!testing}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => mulligan()} disabled={testing}>
                    Mulligan
                </Button>
            </div>
            <div>{attempt}</div>
        </>
    );
}
