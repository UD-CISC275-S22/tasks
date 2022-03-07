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
    const [leftdie, setLeft] = useState<number>(1);
    const [rightdie, setRight] = useState<number>(2);
    function rollLeft(): void {
        setLeft(d6());
    }
    function rollRight(): void {
        setRight(d6());
    }
    return (
        <div>
            Two Dice
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">{leftdie}</span>
            </div>
            <div>
                <span data-testid="right-die">{rightdie}</span>
            </div>
            <div>
                {leftdie === rightdie && leftdie !== 1 && <span>You Win!</span>}
                {leftdie === 1 && rightdie === 1 && <span>You Lose!</span>}
            </div>
        </div>
    );
}
