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
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(2);

    const handleRollLeft = () => {
        const rolledValue = d6();
        setLeftDie(rolledValue);
    };

    const handleRollRight = () => {
        const rolledValue = d6();
        setRightDie(rolledValue);
    };

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={handleRollLeft}>Roll Left</Button>
            <br />
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={handleRollRight}>Roll Right</Button>
            {leftDie === rightDie && leftDie !== 1 ? (
                <div>You win!</div>
            ) : leftDie === rightDie && leftDie === 1 ? (
                <div>You lose!</div>
            ) : null}
        </div>
    );
}
