import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [process, setProcess] = useState<boolean>(false);

    function decreaseOne(): void {
        setAttempt(attempt - 1);
        setProcess(!process);
    }

    function addOne(): void {
        setAttempt(attempt + 1);
    }

    function status(): void {
        setProcess(!process);
    }

    return (
        <div>
            <Button onClick={decreaseOne} disabled={process || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={status} disabled={!process}>
                Stop Quiz
            </Button>
            <Button onClick={addOne} disabled={process}>
                Mulligan
            </Button>
            <div>{attempt}</div>
        </div>
    );
}
