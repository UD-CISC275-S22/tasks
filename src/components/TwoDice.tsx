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
    const [num1, setNum1] = useState<number>(2);
    const [num2, setNum2] = useState<number>(5);

    function leftRoll(): void {
        setNum1(d6());
    }
    function rightRoll(): void {
        setNum2(d6());
    }

    return (
        <div>
            <div>
                <Button onClick={leftRoll}> Roll Left</Button>
                <span data-testid="left-die">{num1}</span>
            </div>
            <div>
                <Button onClick={rightRoll}> Roll Right</Button>
                <span data-testid="right-die">{num2}</span>
            </div>
            <div>
                {num1 === num2 ? (
                    num1 !== 1 && num2 !== 1 ? (
                        <span>Win</span>
                    ) : (
                        <span>Lose</span>
                    )
                ) : (
                    <span>Neither</span>
                )}
            </div>
        </div>
    );
}
