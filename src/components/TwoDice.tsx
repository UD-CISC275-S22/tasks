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
    const [leftDie, setLeftDie] = useState(d6());
    const [rightDie, setRightDie] = useState(d6());

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    const isWin = leftDie === rightDie;

    return (
        <div>
            {/* Left die */}
            <span data-testid="left-die">{leftDie}</span>
            {/* Right die */}
            <span data-testid="right-die">{rightDie}</span>
            <br />
            {/* Roll Left button */}
            <Button onClick={rollLeft}>Roll Left</Button>
            {/* Roll Right button */}
            <Button onClick={rollRight}>Roll Right</Button>
            {/* Render message based on the result */}
            {isWin ? <p>You Win!</p> : null}
            {!isWin && leftDie === 1 && rightDie === 1 ? (
                <p>You Lose!</p>
            ) : null}
        </div>
    );
}
