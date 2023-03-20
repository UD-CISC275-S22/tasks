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
    const [firstDice, setDice1] = useState<number>(2);
    const [secondDice, setDice2] = useState<number>(1);

    return (
        <div>
            <span data-testid="left-die">{firstDice}</span>
            <span data-testid="right-die">{secondDice}</span>
            <div>
                <Button onClick={() => setDice1(d6())}>Roll Left</Button>
                <Button onClick={() => setDice2(d6())}>Roll Right</Button>
            </div>
            {firstDice === secondDice && firstDice != 1 ? (
                <span>Win</span>
            ) : firstDice !== secondDice ? (
                <span></span>
            ) : (
                <span>Lose</span>
            )}
        </div>
    );
}
