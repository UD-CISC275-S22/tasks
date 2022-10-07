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
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    return (
        <div>
            <div>
                Left Dice: <span data-testid="left-die">{leftDie}</span>
                Right Dice: <span data-testid="right-die">{rightDie}</span>
                <br></br>
                <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
                <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
            </div>
            <div>
                {leftDie === rightDie && leftDie !== 1 && <div>You Win</div>}
                {leftDie === rightDie && leftDie === 1 && <div>You Lose</div>}
            </div>
        </div>
    );
}
