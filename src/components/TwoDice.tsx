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
    const [diceLeft, setDiceLeft] = useState<number>(1);
    const [diceRight, setDiceRight] = useState<number>(6);
    function rollLeft(): void {
        setDiceLeft(d6());
    }
    function rollRight(): void {
        setDiceRight(d6());
    }
    return (
        <div>
            <div>
                Left Die: <span data-testid="left-die">{diceLeft}</span> | Right
                <span data-testid="right-die">{diceRight}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>
                {diceRight === 1 && diceLeft === 1 && <div>Lose</div>}
                {diceRight === diceLeft && diceRight !== 1 && <div>Win</div>}
            </div>
        </div>
    );
}
