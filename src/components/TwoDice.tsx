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
    const [dieOne, setDieOne] = useState<number>(0);
    const [dieTwo, setDieTwo] = useState<number>(1);

    function rollTwo(): void {
        setDieTwo(d6());
    }
    function rollOne(): void {
        setDieOne(d6());
    }
    return (
        <div>
            Two Dice
            <div>
                <span data-testid="left-die">{dieOne}</span>
                <span> </span>
                <span data-testid="right-die">{dieTwo}</span>
            </div>
            <Button onClick={rollOne}>Roll Left</Button>
            <Button onClick={rollTwo}>Roll Right</Button>
            <p>
                {dieOne === dieTwo && dieOne !== 1 ? (
                    <span>Win</span>
                ) : dieOne === 1 && dieTwo === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span> </span>
                )}
            </p>
        </div>
    );
}
