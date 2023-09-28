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
    const [die1Result, setDie1Result] = useState<number>(1);
    const [die2Result, setDie2Result] = useState<number>(2);

    const rollDie1 = () => {
        setDie1Result(d6());
    };

    const rollDie2 = () => {
        setDie2Result(d6());
    };
    const isWin =
        die1Result === die2Result && die1Result !== 1 && die2Result !== 1;
    const isLose = die1Result === 1 && die2Result === 1;

    return (
        <div>
            <h2>Two Dice</h2>
            <button onClick={rollDie1} data-testid="roll-left">
                Roll Left
            </button>
            <button onClick={rollDie2} data-testid="roll-right">
                Roll Right
            </button>
            <p>
                Die 1: <span data-testid="left-die">{die1Result}</span>
            </p>
            <p>
                Die 2: <span data-testid="right-die">{die2Result}</span>
            </p>
            {isWin && <p> You Win!</p>}
            {isLose && <p>You Lose!</p>}
        </div>
    );
}
