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
    //Two Dice States
    const [dieOne, setDieOne] = useState<number>(1);
    const [dieTwo, setDieTwo] = useState<number>(6);

    const rollLeft = (): void => {
        setDieOne(d6());
    };
    const rollRight = (): void => {
        setDieTwo(d6());
    };
    return (
        <div>
            <span>
                <Button onClick={() => rollLeft()}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => rollRight()}>Roll Right</Button>
            </span>
            <div></div>
            Left Die: <span data-testid="dieOne">{dieOne}</span>
            <div></div>
            Right Die: <span data-testid="dieTwo">{dieTwo}</span>
        </div>
    );
}
