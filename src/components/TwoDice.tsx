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
    const [die1, setDie1] = useState<number>(4);
    const [die2, setDie2] = useState<number>(2);
    function rollFirstDie() {
        setDie1(d6());
    }
    function rollSecondDie() {
        setDie2(d6());
    }
    return (
        <div>
            <Button onClick={() => rollFirstDie}>Roll Right</Button>
            <span data-testid="rigth-die">Right Die Value: {die1}</span>
            <Button onClick={() => rollSecondDie()}>Roll Left</Button>
            <span data-testid="left-die">Left die value: {die2}</span>
            {die1 === die2 && die1 != 1 && <div>You Win</div>}
            {die1 === die2 && die1 === 1 && <div>You Lose</div>}
        </div>
    );
}
