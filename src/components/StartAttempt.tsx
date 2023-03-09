import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //Code for Start Attempt
    const [counter, setCounter] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function stopProgress(): void {
        setProgress(false);
    }
    function decreaseOne(): void {
        setCounter(counter - 1);
    }
    function addOne(): void {
        setCounter(counter + 1);
    }
    return (
        <>
            <Button
                disabled={progress || counter === 0}
                onClick={() => {
                    setProgress(true);
                    decreaseOne();
                }}
            >
                Start Quiz
            </Button>
            <div></div>
            <Button disabled={!progress} onClick={stopProgress}>
                Stop Quiz
            </Button>
            <div></div>
            <Button disabled={progress} onClick={addOne}>
                Mulligan
            </Button>
            <div>Attempt Number: {counter}</div>
            {progress && <div>In Progress</div>}
        </>
    );
}
