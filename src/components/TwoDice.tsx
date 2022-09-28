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
    const [leftDie, setLeftDie] = useState<number>(5);
    const [rightDie, setRightDie] = useState<number>(4);

    const isSnakeEyes: boolean = leftDie === 1 && rightDie === 1;
    const dieMatch: boolean = leftDie === rightDie;

    const getText = (): string | null => {
        if (isSnakeEyes) {
            return "Lose";
        } else if (dieMatch) {
            return "Win";
        } else {
            return null;
        }
    };

    return (
        <div>
            <p>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </p>
            <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
            <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
            <p>{getText()}</p>
        </div>
    );
}
