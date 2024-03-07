import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const rollLeftDieHandler = (): void => {
        setLeftDie(d6());
    };

    const rollRightDieHandler = (): void => {
        setRightDie(d6());
    };

    let result;

    if (leftDie === 1 && rightDie === 1) {
        result = "Lose";
    } else if (leftDie === rightDie) {
        result = "Win";
    } else {
        result = "None";
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollLeftDieHandler}>Roll Left</Button>
            <Button onClick={rollRightDieHandler}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
            <p>{result}</p>
        </div>
    );
}
