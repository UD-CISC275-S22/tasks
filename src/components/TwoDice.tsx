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
    /* Each die’s value should be rendered in the View in a span tag of
     their own, with the first dice having the data-testid of left-die 
     and the second dice having the data-testid of right-die. */
    const [left_die, setDice] = useState<number>(4);
    const [right_die, setDice2] = useState<number>(2);

    return (
        <div>
            <span>
                <Button onClick={() => setDice(d6)}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => setDice2(d6)}>Roll Right</Button>
            </span>
            <div>
                <span data-testid="left-die">{left_die}</span>
                <span data-testid="right-die">{right_die}</span>.
            </div>
            <div>
                {left_die === 1 && left_die === right_die ? (
                    <span>Lose </span>
                ) : (
                    <span> </span>
                )}
                {left_die !== 1 && left_die === right_die ? (
                    <span>Win </span>
                ) : (
                    <span> </span>
                )}
            </div>
        </div>
    );
}
