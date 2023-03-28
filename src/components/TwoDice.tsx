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
    const [leftDie, nowleftDie] = useState(d6());
    const [rightDie, nowrightDie] = useState(d6());

    const rollLeftDie = () => {
        nowleftDie(d6());
    };

    const rollRightDie = () => {
        nowrightDie(d6());
    };

    const winorlose = () => {
        if (leftDie === rightDie) {
            return <p>{leftDie === 1 ? "Lose" : "Win"}!</p>;
        }
        return null;
    };

    const areDiceEqual = leftDie === rightDie;

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>{winorlose()}</div>
            <div>
                <Button onClick={rollLeftDie} disabled={areDiceEqual}>
                    Roll Left
                </Button>
                <Button onClick={rollRightDie} disabled={areDiceEqual}>
                    Roll Right
                </Button>
            </div>
        </div>
    );
}
