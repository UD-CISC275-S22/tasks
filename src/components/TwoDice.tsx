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
    const [diceOneState, setDiceOne] = useState<number>(1);
    const [diceTwoState, setDiceTwo] = useState<number>(2);

    function winOrLose(): string {
        let temp = "";
        if (diceOneState === diceTwoState) {
            if (diceOneState !== 1) {
                temp = "Win";
            } else {
                temp = "Lose";
            }
        } else {
            temp = "Roll Again";
        }
        return temp;
    }
    return (
        <div>
            <div>
                <Button onClick={() => setDiceOne(d6())}>Roll Left</Button>
                <span data-testid="left-die">{diceOneState}</span>
            </div>
            <div>
                <Button onClick={() => setDiceTwo(d6())}>Roll Right</Button>
                <span data-testid="right-die">{diceTwoState}</span>
            </div>
            <div>{winOrLose()}</div>
        </div>
    );
}
