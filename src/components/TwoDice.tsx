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
    const [leftDie, rollLeftDie] = useState<number>(6);
    const [rightDie, rollRightDie] = useState<number>(5);
    function rollLeft(): void {
        rollLeftDie(d6());
    }
    function rollRight(): void {
        rollRightDie(d6());
    }
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <br></br>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {leftDie === rightDie && rightDie === 1 && <div>Lose</div>}
            {leftDie === rightDie && rightDie !== 1 && <div>Win</div>}
        </div>
    );
}
