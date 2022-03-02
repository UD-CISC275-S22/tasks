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
export function result(left: number, right: number): string {
    if (left === right) {
        if (left === 1) {
            return "Lose";
        } else {
            return "Win";
        }
    }
    return "Not Equal";
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(4);
    const [right, setRight] = useState<number>(3);

    return (
        <div>
            <div>
                <Button onClick={() => setLeft(d6())}>Roll Left</Button>
                rolled <span data-testid="left-die">{left}</span>
                <Button onClick={() => setRight(d6())}>Roll Right</Button>
                rolled <span data-testid="right-die">{right}</span>
            </div>
            <div>{result(left, right)}</div>
        </div>
    );
}
