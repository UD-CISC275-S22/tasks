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
    const [left, setLeft] = useState<number>(6);
    const [right, setRight] = useState<number>(1);
    return (
        <>
            <div>
                <span data-testid="left-die">
                    <Button onClick={() => setLeft(d6())}>Roll Left</Button>
                    {left}
                </span>
                <span data-testid="right-die">
                    <Button onClick={() => setRight(d6())}>Roll Right</Button>
                    {right}
                </span>
            </div>
            <div>
                {left === right
                    ? left === 1
                        ? "You Lose"
                        : "You Win"
                    : "Keep Rolling"}
            </div>
        </>
    );
}
