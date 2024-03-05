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
    const [leftDie, setLeftDie] = useState<number>(2); //may cause issue
    const [rightDie, setRightDie] = useState<number>(3);

    function rollLeft(): void {
        setLeftDie(d6());
    }

    function rollRight(): void {
        setRightDie(d6());
    }

    function checkWin(): string {
        if (leftDie === 1 && rightDie === 1) {
            //snake eyes you loose
            return "Lose";
        } else if (leftDie === rightDie) {
            //you win
            return "Win";
        } else {
            //not a win or loss keep playing
            return "";
        }
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie} </span>
                <span data-testid="right-die">{rightDie} </span>
            </div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>

            <div>{checkWin()}</div>
        </div>
    );
}
