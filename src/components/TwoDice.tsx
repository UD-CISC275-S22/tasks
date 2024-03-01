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
    const [leftDie, setLeft] = useState<number>(-1);
    const [rightDie, setRight] = useState<number>(7);

    const rollLeft = () => {
        const newNum = d6();
        setLeft(newNum);
        // result(leftDie, newNum);
    };
    const rollRight = () => {
        const newNum = d6();
        setRight(newNum);
        // result(rightDie, newNum);
    };

    // function result(leftDie: number, rightDie: number): void {
    //     //if the dice match, you win
    //     if (leftDie === rightDie) {
    //         console.log("You Win");
    //         //if the dice are both 1, you lose
    //     } else if (leftDie === 1 && rightDie === 1) {
    //         console.log("You Lose");
    //     }
    // }

    return (
        <div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <br /> <span data-testid="left-die">{leftDie}</span>
            </div>
            <div>
                <Button onClick={rollRight}>Roll Right</Button>
                <br /> <span data-testid="right-die">{rightDie}</span>
            </div>
            {leftDie === rightDie
                ? leftDie === 1 && rightDie === 1
                    ? "You Lose"
                    : "You Win"
                : null}
        </div>
    );
}
