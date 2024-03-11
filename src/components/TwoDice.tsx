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
    const [lRoll, newLRoll] = useState(0);
    const [rRoll, newRRoll] = useState(1);

    return (
        <div>
            <span data-testid="left-die">{lRoll}</span>

            <Button onClick={() => newLRoll(d6())}>Roll Left</Button>
            <Button onClick={() => newRRoll(d6())}>Roll Right</Button>
            <span data-testid="right-die">{rRoll}</span>

            {lRoll === rRoll && lRoll !== 1 && <div>Win</div>}

            {lRoll === rRoll && lRoll === 1 && <div>Lose</div>}
        </div>
    );
}
