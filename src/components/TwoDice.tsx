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
    const [idLeft, setidLeft] = useState<number>(1);
    const [idRight, setidRight] = useState<number>(6);

    function isWin(): string {
        if (idLeft === 1 && idRight === 1) {
            return "Lose";
        } else if (idLeft !== 1 && idRight === idLeft) {
            return "Win";
        } else {
            return "";
        }
    }

    return (
        <div>
            <Button onClick={() => setidLeft(d6)}>Roll Left</Button>
            <Button onClick={() => setidRight(d6)}>Roll Right</Button>
            <span data-testid="left-die">Left Dice: {idLeft} </span>
            <span data-testid="right-die">Right Dice: {idRight} </span>
            <span>You {isWin()}</span>
        </div>
    );
}
