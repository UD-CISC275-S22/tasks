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
    const [left_dice, set_leftdice] = useState<number>(1);
    const [right_dice, set_rightdice] = useState<number>(3);

    return (
        <div>
            Two Dice:
            <span data-testid="left-die">{left_dice}</span>
            <span data-testid="right-die">{right_dice}</span>
            <Button onClick={() => set_leftdice(d6())}>Roll Left</Button>
            <Button onClick={() => set_rightdice(d6())}>Roll Right</Button>
            <div>
                {left_dice === 1 && right_dice === 1 ? (
                    <div>Lose</div>
                ) : left_dice === right_dice ? (
                    <div>Win</div>
                ) : (
                    <div>Roll Again</div>
                )}
            </div>
        </div>
    );
}
