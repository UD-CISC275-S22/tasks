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
    const [value1, leftDie] = useState<number>(1);
    const [value2, rightDie] = useState<number>(5);

    return (
        <>
            <span data-testid="left-die">
                left-die: {value1}
                <Button onClick={() => leftDie(d6)}>Roll Left</Button>
            </span>
            <span data-testid="right-die">
                <Button onClick={() => rightDie(d6)}> Roll Right</Button>
                right-die: {value2}
                {value1 === value2 && value1 === 1 && <div>Lose</div>}
                {value1 === value2 && value1 !== 1 && <div>Win</div>}
            </span>
        </>
    );
}
