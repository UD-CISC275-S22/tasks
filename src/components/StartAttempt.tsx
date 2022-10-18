import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState(false);
    const [attempts, setAttempts] = useState(4);
    return (
        <>
            <div>
                <Button
                    disabled={value === true || attempts < 1}
                    onClick={() => {
                        setAttempts(attempts - 1);
                        setValue(true);
                    }}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    disabled={value === false}
                    onClick={() => setValue(false)}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    disabled={value === true}
                    onClick={() => {
                        setAttempts(attempts + 1);
                        setValue(false);
                    }}
                >
                    Mulligan
                </Button>
            </div>
            Attempts Remaining: {attempts}
        </>
    );
}
