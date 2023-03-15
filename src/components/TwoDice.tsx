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
    //return <div>Two Dice</div>;
    const [right, setRight] = useState<number>(1);
    const [left, setLeft] = useState<number>(0);

    function leftCheck(): void {
        setLeft(d6());
    }

    function rightCheck(): void {
        setRight(d6());
    }

    return (
        <div>
            <span data-testid="left-die"> {left}</span>
            <span data-testid="right-die"> {right}</span>
            <div>
                <Button onClick={leftCheck}>Roll Left</Button>
                <Button onClick={rightCheck}>Roll Right</Button>
                <span>
                    {left !== right ? " " : left === 1 ? "Lose" : "Win"}
                </span>
            </div>
        </div>
    );
}
