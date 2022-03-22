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
    const [value, rollDice1] = useState<number>(4);
    const [value2, rollDice2] = useState<number>(1);

    const rollDiceLeft = (): void => {
        rollDice1(d6());
    };
    const rollDiceRight = (): void => {
        rollDice2(d6());
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{value}</span>
            </div>
            <div>
                <span data-testid="right-die">{value2}</span>
            </div>
            <Button onClick={rollDiceLeft}>Roll Left</Button>
            <Button onClick={rollDiceRight}>Roll Right</Button>
            <div>
                {value === value2 && value != 1 ? (
                    <span>Win</span>
                ) : value === value2 && value === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
