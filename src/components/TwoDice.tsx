import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
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
    const [left, setLeft] = useState<number>(0);
    const [right, setRight] = useState<number>(7);
    return (
        <div className="body">
            <span className="card" data-testid="left-die">
                Left: {left}
            </span>
            <span className="card" data-testid="right-die">
                Right: {right}
            </span>

            {left === right && left > 1 && <div className="card">You Win!</div>}
            {left === right && left === 1 && (
                <div className="card">You Lose!</div>
            )}
            {left !== right && (
                <Button onClick={() => setLeft(d6())}>Roll Left</Button>
            )}
            {left !== right && (
                <Button onClick={() => setRight(d6())}>Roll Right</Button>
            )}
            {left === right && <Button disabled>Roll Left</Button>}
            {left === right && <Button disabled>Roll Right</Button>}
        </div>
    );
}
