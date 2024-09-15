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
    const [leftDie, setLeft] = useState<number>(2);
    const [rightDie, setRight] = useState<number>(5);

    function leftRoll(): void {
        setLeft(d6);
    }
    function rightRoll(): void {
        setRight(d6);
    }
    return (
        <div>
            <div>Two Dice</div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={leftRoll}>Roll Left</Button>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rightRoll}>Roll Right</Button>
            {leftDie == rightDie && leftDie != 1 && <span>You Win!</span>}
            {leftDie == 1 && rightDie == 1 && <span>You Lose.</span>}
        </div>
    );
    return <div>Two Dice</div>;
}
