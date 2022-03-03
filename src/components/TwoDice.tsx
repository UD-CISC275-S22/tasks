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
    function RollLeft(): void {
        setDice1(d6);
    }
    function RollRight(): void {
        setDice2(d6);
    }
    const [dice1, setDice1] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(2);

    return (
        <div>
            <Button onClick={RollLeft}>Roll Left</Button>
            <span data-testid="left-die">{dice1}</span>
            <Button onClick={RollRight}>Roll Right</Button>
            <span data-testid="right-die">{dice2}</span>
            {dice1 === dice2 && dice1 !== 1 && <div>Win</div>}
            {dice1 === dice2 && dice1 === 1 && <div>Lose</div>}
        </div>
    );
}
