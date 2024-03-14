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
    const [leftdie, setLeftdie] = useState<number>(1);
    const [rightdie, setRightdie] = useState<number>(6);
    return (
        <div>
            <div>
                <span data-testid="left-die">{leftdie}</span>
                <Button onClick={() => setLeftdie(d6)}>Roll Left</Button>
            </div>
            <div>
                <span data-testid="right-die">{rightdie}</span>
                <Button onClick={() => setRightdie(d6)}>Roll Right</Button>
            </div>
            <div>
                {rightdie === 1 && leftdie === 1 ? (
                    <span>Lose</span>
                ) : leftdie === rightdie ? (
                    <span>Win</span>
                ) : (
                    <span>Keep going!</span>
                )}
            </div>
        </div>
    );
}
