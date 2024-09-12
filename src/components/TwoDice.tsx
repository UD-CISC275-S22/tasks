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
    const [dye1, setDye1] = useState<number>(3);
    const [dye2, setDye2] = useState<number>(6);

    return (
        <div>
            <span data-testid="left-die">{dye1}</span>
            <Button onClick={() => setDye1(d6())}>Roll Left</Button>
            <Button onClick={() => setDye2(d6())}>Roll Right</Button>
            <span data-testid="right-die">{dye2}</span>
            {dye1 === dye2 && dye1 !== 1 ? <span>You Win</span> : ""}
            {dye1 === dye2 && dye1 === 1 ? <span>You Lose</span> : ""}
        </div>
    );
}
