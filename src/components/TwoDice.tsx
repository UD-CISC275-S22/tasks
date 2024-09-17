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
    const [dice1, setDice] = useState<number>(3);
    const [dice2, setDice1] = useState<number>(5);

    return (
        <div>
            <span data-testid="left-die">{dice1}</span>
            <div>
                <Button onClick={() => setDice(d6)}>Roll Left</Button>
            </div>
            <span data-testid="right-die">{dice2}</span>
            <div>
                <Button onClick={() => setDice1(d6)}>Roll Right</Button>
            </div>
            <div>
                {dice1 === 1 && dice2 === 1 ? (
                    <span>Lose!!!</span>
                ) : dice1 === dice2 ? (
                    <span>Win!</span>
                ) : (
                    <span>Again!!</span>
                )}
            </div>
        </div>
    );
}
