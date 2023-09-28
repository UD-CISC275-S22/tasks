import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <div>
                <span>{attempts}</span>
                <Button
                    onClick={() => {
                        setProgress(true);
                        setAttempts(attempts - 1);
                    }}
                    disabled={progress === true || attempts === 0}
                >
                    Start Quiz
                </Button>
                <div>
                    <Button
                        onClick={() => setProgress(false)}
                        disabled={progress === false}
                    >
                        Stop Quiz
                    </Button>
                    <Button
                        onClick={() => setAttempts(attempts + 1)}
                        disabled={progress === true}
                    >
                        Mulligan
                    </Button>
                </div>
            </div>
        </div>
    );
}
