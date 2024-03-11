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
    const [leftDie, setLeftDie] = useState(2);
    const [rightDie, setRightDie] = useState(3);
    function rollLeftDie(): void {
        const newLeft = d6();
        setLeftDie(newLeft);
    }
    function rollRightDie(): void {
        const newRight = d6();
        setRightDie(newRight);
    }
    let message = "";
    if (leftDie === rightDie && rightDie !== 1) {
        message = "Win";
    } else if (leftDie === 1 && rightDie === 1) {
        message = "Lose";
    }
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollRightDie}>Roll Right</Button>
            <span>{message}</span>
        </div>
    );
}
