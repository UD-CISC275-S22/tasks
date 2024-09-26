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
    const [leftdie, setrollLeft] = useState<number>(3);
    const [rightdie, setrollRight] = useState<number>(2);

    function rollLeft(): void {
        setrollLeft(d6);
    }
    function rollRight(): void {
        setrollRight(d6);
    }

    return (
        <div>
            <div>Two Dice</div>
            <span data-testid="left-die">{leftdie}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="right-die">{rightdie}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            <div>
                {/* win */}
                <span>
                    {leftdie === rightdie && leftdie !== 1 && <span>Win</span>}
                    {leftdie === 1 && rightdie === 1 && <span>Lose</span>}
                </span>
                {/* lose */}
                <span>{}</span>
            </div>
        </div>
    );
}
