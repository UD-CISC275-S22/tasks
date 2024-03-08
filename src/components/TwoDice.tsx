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
    // const rollLeftDie = () => {
    //     setLeftDie(d6());
    // };
    // const rollRightDie = () => {
    //     setRightDie(d6());
    // };
    return (
        <div>
            <Button onClick={() => setLeftDie(d6())} data-testid="left-die">
                Roll Left: {leftDie}
            </Button>
            <Button onClick={() => setRightDie(d6())} data-testid="right-die">
                Roll Right: {rightDie}
            </Button>
            {leftDie === 1 && rightDie === 1 ? <p>You Lose</p> : null}
            {leftDie === rightDie && !(leftDie === 1 && rightDie === 1) ? (
                <p>You Win</p>
            ) : null}
        </div>
    );
}
