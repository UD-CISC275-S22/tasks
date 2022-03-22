import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //two states for the thing
    const [attempts, amountofAttempts] = useState<number>(4);
    const [progress, InitialProgress] = useState<boolean>(false);
    const substractOne = (): void => {
        amountofAttempts(attempts - 1);
        InitialProgress(!progress);
    };
    const switchProgress = (): void => {
        InitialProgress(!progress);
    };
    const addOne = (): void => {
        amountofAttempts(attempts + 1);
    };

    return (
        <div>
            <div>
                <span>{attempts}</span>
            </div>
            <Button
                onClick={substractOne}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={switchProgress} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={addOne} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
