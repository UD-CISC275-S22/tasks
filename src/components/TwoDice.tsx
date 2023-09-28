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
    const [dieOne, rollDieOne] = useState<number>(-1);
    const [dieTwo, rollDieTwo] = useState<number>(-2);

    return (
        <>
            <span data-testid="left-die">
                <Button onClick={() => rollDieOne(d6())}>Roll Left</Button>
                <p>Die One: {" " + dieOne}</p>
            </span>
            <span data-testid="right-die">
                <Button onClick={() => rollDieTwo(d6())}>Roll Right</Button>
                <p>Die Two:{" " + dieTwo}</p>
            </span>
            {dieOne === 1 && dieTwo === 1 ? (
                <p>You Lose...</p>
            ) : dieOne === dieTwo ? (
                <p>You Win!</p>
            ) : null}
        </>
    );
}
