import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempt] = useState<number>(4);
    const [inProgg, setProgg] = useState<boolean>(true);

    function startQuiz(): void {
        setAttempt(attempts - 1);
        setProgg(!inProgg);
    }
    return (
        <div>
            <div>Attempts: {attempts} </div>
            <span>
                <Button
                    onClick={() => startQuiz()}
                    disabled={!inProgg || attempts <= 0}
                >
                    Start Quiz
                </Button>
            </span>
            <div>
                <span>
                    <Button
                        onClick={() => setAttempt(attempts + 1)}
                        disabled={!inProgg}
                    >
                        Mulligan
                    </Button>
                </span>
            </div>
            <span>
                <span>
                    <Button
                        onClick={() => setProgg(!inProgg)}
                        disabled={inProgg}
                    >
                        Stop Quiz
                    </Button>
                </span>
            </span>
        </div>
    );
}
