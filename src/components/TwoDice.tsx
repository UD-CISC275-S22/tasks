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
    const [die1, setDie1] = useState<number>(6);
    const [die2, setDie2] = useState<number>(6);

    function rollDie1(): void {
        setDie1(d6());
    }
    function rollDie2(): void {
        setDie2(d6());
    }
    let result = "";
    if (die1 === die2) {
        if (die1 != 1) {
            result = "YOU WIN!";
        } else {
            result = "YOU LOSE.";
        }
    }
    return (
        <span>
            <div>
                <Button onClick={() => rollDie1()}>Roll Left</Button>
                <Button onClick={() => rollDie2()}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">left: {die1}</span>
                <span data-testid="right-die">right: {die2}</span>
            </div>
            <div>{result}</div>
        </span>
    );
}
