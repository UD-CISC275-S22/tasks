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
    const [leftDie, changeDie1] = useState<number>(0);
    const [rightDie, changeDie2] = useState<number>(1);

    return (
        <div>
            <div>
                <span datatest-id="left-die">{leftDie}</span>
            </div>
            <div>
                <span datatest-id="right-die">{rightDie}</span>
            </div>
            <div>
                <Button onClick={() => changeDie1(d6)}>Roll Left</Button>
                <Button onClick={() => changeDie2(d6)}>Roll Right</Button>
                {leftDie == 1 && rightDie == 1 && <div>Lose</div>}
                {leftDie == rightDie && leftDie != 1 && <div>Win</div>}
            </div>
        </div>
    );
}
