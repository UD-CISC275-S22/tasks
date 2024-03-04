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
    const [firstDie, setFirstDie] = useState<number>(4);
    const [secondDie, setSecondDie] = useState<number>(6);
    const changeFirstDie = () => {
        setFirstDie(d6);
    };
    const changeSecondDie = () => {
        setSecondDie(d6);
    };
    return (
        <div>
            <span data-testid="left-die">{firstDie}</span>
            <span data-testid="right-die">{secondDie}</span>
            <div>
                <Button onClick={changeFirstDie}> Roll Left</Button>
            </div>
            <div>
                <Button onClick={changeSecondDie}> Roll Right</Button>
            </div>
            <span>
                {firstDie === secondDie && firstDie !== 1 && <div>Win</div>}
                {firstDie === secondDie && firstDie === 1 && <div>Lose</div>}
            </span>
        </div>
    );
}
