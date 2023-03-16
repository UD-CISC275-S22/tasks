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
    const [d1, setD1] = useState<number>(1);
    const [d2, setD2] = useState<number>(2);
    function changeNumber1(): void {
        setD1(d6());
    }
    function changeNumber2(): void {
        setD2(d6());
    }
    return (
        <>
            <span data-testid="left-die">
                <Button onClick={changeNumber1}>Roll Left</Button> {d1}
            </span>
            <span data-testid="right-die">
                <Button onClick={changeNumber2}>Roll Right</Button> {d2}
            </span>
            <span>
                {d1 === d2 && d1 !== 1 ? (
                    <span> Win</span>
                ) : d1 === 1 && d2 === 1 ? (
                    <span> Lose</span>
                ) : (
                    <span></span>
                )}
            </span>
        </>
    );
}
