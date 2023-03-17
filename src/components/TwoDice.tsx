//eslint - disable - next - line;
import React, { useState } from "react";
//eslint - disable - next - line;
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
    const [leftValue, leftState] = useState<number>(1);
    const [rightValue, rightState] = useState<number>(2);
    return (
        <div>
            <span>
                <Button onClick={() => leftState(d6())}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => rightState(d6())}>Roll Right</Button>
            </span>

            <div>
                <span data-testid="left-die">{leftValue} </span>
                <span data-testid="right-die">{rightValue}</span>
            </div>

            {leftValue + rightValue == 2 && <div>Lose</div>}
            {leftValue == rightValue && leftValue + rightValue != 2 && (
                <div>Win</div>
            )}
        </div>
    );
}
