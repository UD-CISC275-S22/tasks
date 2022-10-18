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
    const [diceOne, setDiceOne] = useState<number>(1);
    const [diceTwo, setDiceTwo] = useState<number>(2);

    function WinOrLose(): JSX.Element {
        if (diceOne === diceTwo) {
            if (diceOne === 1) {
                return <span>Lose</span>;
            } else {
                return <span>Win</span>;
            }
        } else {
            return <span>Keep Rolling!</span>;
        }
    }

    return (
        <div>
            <Button onClick={() => setDiceOne(d6)}>Roll Left</Button>
            <Button onClick={() => setDiceTwo(d6)}>Roll Right</Button>
            <br></br>
            Left Dice: <span data-testid="left-die">{diceOne}</span>, Right{" "}
            Dice: <span data-testid="right-die">{diceTwo}</span>
            <br></br>
            {WinOrLose()}
        </div>
    );
}
