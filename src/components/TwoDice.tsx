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

    function winOrLose(left: number, right: number): JSX.Element | null {
        if (left === right) {
            if (left === 1) {
                return <div>Lose</div>;
            } else {
                return <div>Win</div>;
            }
        }
        return null;
    }

    function updateLeftDie(): void {
        const newLeft = d6();
        setLeftDie(newLeft);
        winOrLose(newLeft, rightDie);
    }

    function updateRightDie(): void {
        const newRight = d6();
        setRightDie(newRight);
        winOrLose(leftDie, newRight);
    }

    return (
        <div>
            Two Dice
            <Button onClick={updateLeftDie}>
                <span data-testid="left-die">{leftDie}</span>Roll Left
            </Button>
            <Button onClick={updateRightDie}>
                <span data-testid="right-die">{rightDie}</span>Roll Right
            </Button>
            {winOrLose(leftDie, rightDie)}
        </div>
    );
}
