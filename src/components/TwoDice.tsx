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
    const [leftDie, setleftDie] = useState<number>(1);
    const [rightDie, setrightDie] = useState<number>(2);

    const win = leftDie === 1 ? "Lose" : "Win";
    return (
        <div>
            Left Die: <span>{leftDie}</span>
            Right Die: <span>{rightDie}</span>
            <div>
                <Button onClick={() => setleftDie(d6())}>Roll Left</Button>
                <Button onClick={() => setrightDie(d6())}>Roll Right</Button>
                <span data-testid={"left-die"}>{leftDie}</span>
                <span data-testid={"right-die"}>{rightDie}</span>
                <div>{leftDie === rightDie ? win : ""}</div>
            </div>
        </div>
    );
}
