import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [status, setStatus] = useState<boolean>(false);

    return (
        <div>
            <div>
                <Button
                    disabled={status || attempts === 0}
                    onClick={() => {
                        setStatus(true);
                        setAttempts(attempts - 1);
                    }}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => setStatus(false)} disabled={!status}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(1 + attempts)}
                    disabled={status}
                >
                    Mulligan
                </Button>
                <div>{attempts}</div>
            </div>
        </div>
    );
}
