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
    const [Lnum, Ldice] = useState<number>(2);
    const [Rnum, Rdice] = useState<number>(4);
    const lose = "You Lose";
    const win = "You Win";

    return (
        <div>
            <div>
                <span data-testid="left-die">{Lnum}</span>
                <span data-testid="right-die">{Rnum}</span>
            </div>
            <div>
                <Button onClick={() => Ldice(d6())}>Roll Left</Button>
                <Button onClick={() => Rdice(d6())}>Roll Right</Button>
            </div>
            {Lnum === 1 && Rnum === 1 ? (
                <div>{lose}</div>
            ) : Lnum === Rnum ? (
                <div>{win}</div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
