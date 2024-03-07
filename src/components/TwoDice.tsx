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
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);
    const [msg] = useState<string | null>(null);

    function roll(b: boolean) {
        b ? setLeft(d6()) : setRight(d6());
    }

    function getMsg(): string | null {
        if (left == 1 && right == 1) {
            return "Lose";
        } else {
            if (left == right) {
                return "Win";
            } else {
                return null;
            }
        }
    }

    return (
        <div>
            <span data-testid="left-die">Left: {left} </span>
            <span data-testid="right-die">Right: {right} </span>
            <div>
                <Button onClick={() => roll(true)}>Roll Left</Button>
                <Button onClick={() => roll(false)}>Roll Right</Button>
            </div>
            <div>{msg}</div>
            {getMsg()}
        </div>
    );
}
