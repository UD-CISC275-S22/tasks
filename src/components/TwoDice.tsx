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
    const [die1, setDie1] = useState<number>(1);
    const [die2, setDie2] = useState<number>(2);

    function rollDieOne(): void {
        setDie1(d6());
    }

    function rollDieTwo(): void {
        setDie2(d6());
    }
    //two buttons. one for each die
    //Each die’s value should be rendered in the View in a span tag of their own,
    //with the first dice having the data-testid of left-die and the second dice having the data-testid of right-die.
    return (
        <div>
            Two Dice
            <br />
            <Button onClick={rollDieOne}>Roll Left</Button>
            <Button onClick={rollDieTwo}>Roll Right</Button>
            <br />
            <span data-testid="left-die">{die1}</span>
            <span data-testid="right-die">{die2}</span>
            {die1 === die2 && die1 !== 1 && <p> You Win!</p>}
            {die1 === die2 && die1 === 1 && <p> You Lose!</p>}
        </div>
    );
}
