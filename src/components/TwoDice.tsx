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
    const [die, setDie] = useState<number>(1);
    const [die1, setDie1] = useState<number>(6);
    function helper(): string {
        if (die == die1) {
            if (die1 == 1) {
                return "lose";
            } else {
                return "win";
            }
        } else {
            return "Keep rolling";
        }
    }
    return (
        <div>
            <div>
                <h3>Roll Dice</h3>
                <Button onClick={() => setDie(d6())}>Roll Left</Button>
            </div>
            <div>
                <Button onClick={() => setDie1(d6())}>Roll Right</Button>
            </div>
            <div>{helper()}</div>
            <span data-testid="left-die">Roll Left: {die}</span>
            <span data-testid="right-die"> Roll Right: {die1}</span>
        </div>
    );
}
