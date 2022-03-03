import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { resourceLimits } from "worker_threads";

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
    const [leftdie, setLeftDie] = useState<number>(1);
    const [rightdie, setRightDie] = useState<number>(3);

    function result(): string {
        if (leftdie === 1 && rightdie === 1) {
            return "lose";
        } else if (leftdie === rightdie) {
            return "win";
        } else {
            return "";
        }
    }

    return (
        <div>
            Two Dice
            <div>
                <Button onClick={() => setLeftDie(d6)}>Roll Left</Button>
            </div>
            <div>
                <Button onClick={() => setRightDie(d6)}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die"> Left: {leftdie}</span>
                <span data-testid="right-die"> Right: {rightdie}</span>
            </div>
            <span> result: {result()} </span>
        </div>
    );
}
