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
    const [leftRoll, newLeftRoll] = useState(0);
    const [rightRoll, newRightRoll] = useState(1);

    return (
        <div>
            <div>
                <Button onClick={() => newLeftRoll(d6())}>Roll Left</Button>
                <span>{leftRoll}</span>
            </div>
            <div>
                <Button onClick={() => newRightRoll(d6())}>Roll Left</Button>
                <span>{rightRoll}</span>
            </div>
        </div>
    );
}
