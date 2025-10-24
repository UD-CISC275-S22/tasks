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

export function TwoDice(): React.JSX.Element {
    const [dieLeft, setDL] = useState<number>(1);
    const [dieRight, setDR] = useState<number>(6);

    const win = dieLeft === dieRight && dieLeft !== 1;
    const lose = dieRight === 1 && dieLeft === 1;

    const changeDieLeft = () => {
        setDL(d6());
    };
    const changeDieRight = () => {
        setDR(d6());
    };
    return (
        <div>
            <div>
                <div>
                    <span data-testid="left-die"> Left: {dieLeft}</span>
                    <span data-testid="right-die"> Right: {dieRight}</span>
                </div>
                <div>
                    <Button onClick={changeDieLeft}>Roll Left</Button>
                    <Button onClick={changeDieRight}>Roll Right</Button>
                </div>
                <div>
                    {win && <div> You Win!</div>}
                    {lose && <div>You Lose!</div>}
                </div>
            </div>
        </div>
    );
}
