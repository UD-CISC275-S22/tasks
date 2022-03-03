import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [counter, setCounter] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function minusOne(): void {
        setCounter(counter - 1);
    }
    function addOne(): void {
        setCounter(counter + 1);
    }
    function stuff(): void {
        minusOne();
        setProgress(true);
    }
    return (
        <div>
            <div>
                Current light: <span>{counter}</span>
            </div>
            <div>{progress ? <span>cool</span> : <span>not cool</span>}</div>
            <div>
                <Button onClick={stuff} disabled={progress || counter === 0}>
                    Start Quiz
                </Button>
                <Button onClick={addOne} disabled={progress}>
                    Mulligan
                </Button>
            </div>
            <div>
                <Button onClick={() => setProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
