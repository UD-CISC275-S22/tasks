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
    const [leftDice, setLeftDice] = useState<number>(8);
    const [rightDice, setRightDice] = useState<number>(2);

    function rollLeft(): void {
        setLeftDice(d6);
    }
    function rollRight(): void {
        setRightDice(d6);
    }
    return (
        <div>
            <div>
                <Button onClick={rollRight}>Roll Left</Button>
                <Button onClick={rollLeft}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="right-die">{rightDice}</span>
                <span data-testid="left-die">{leftDice}</span>
            </div>
            <div>
                {leftDice === rightDice && leftDice === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span></span>
                )}
                {leftDice === rightDice && leftDice !== 1 ? (
                    <span>Win</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
