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
    const [leftVal, rollLeft] = useState<number>(1);
    const [rightVal, rollRight] = useState<number>(2);
    return (
        <div>
            <h3>Two Dice</h3>
            <Button onClick={() => rollLeft(d6())}>Roll Left</Button>
            <Button onClick={() => rollRight(d6())}>Roll Right</Button>
            <span
                style={{ border: "solid", padding: "10px", margin: "2px" }}
                data-testid="left-die"
            >
                {leftVal}
            </span>
            <span
                style={{ border: "solid", padding: "10px", margin: "2px" }}
                data-testid="right-die"
            >
                {rightVal}
            </span>
            <p>
                {leftVal == 1 && rightVal == 1 && "Lose"}
                {leftVal == rightVal && leftVal != 1 && rightVal != 1 && "Win"}
            </p>
        </div>
    );
}
