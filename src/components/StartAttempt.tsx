import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [inProgress, setProgess] = useState<boolean>(false);
    function subtractValue(): void {
        setValue(value - 1);
    }
    function mulliganValue(): void {
        setValue(value + 1);
    }
    function startQuiz(): void {
        setProgess(true);
        subtractValue();
    }
    return (
        <div>
            <div>
                <Button
                    onClick={() => startQuiz()}
                    disabled={inProgress || value === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setProgess(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
                <Button onClick={() => mulliganValue()} disabled={inProgress}>
                    Mulligan
                </Button>
                <div>Attempts left: {value}</div>
            </div>
        </div>
    );
}
