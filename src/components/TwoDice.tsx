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
    const [leftDie, setDie1] = useState<number>(1);
    const [rightDie, setDie2] = useState<number>(6);
    return (
        <div>
            <div data-testid="left-die">{leftDie}</div>
            <div data-testid="right-die">{rightDie}</div>
            <span>
                <Button onClick={() => setDie1(d6)}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => setDie2(d6)}>Roll Right</Button>
            </span>
            <div>
                {leftDie !== 1 && rightDie !== 1 && leftDie === rightDie ? (
                    <span>Win</span>
                ) : leftDie === 1 && rightDie === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
