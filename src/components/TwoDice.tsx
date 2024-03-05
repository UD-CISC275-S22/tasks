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
    const [die1, setDie1] = useState<number>(1);
    const [die2, setDie2] = useState<number>(2);

    const rollLeft = (): void => {
        setDie1(d6);
    };
    const rollRight = (): void => {
        setDie2(d6);
    };

    return (
        <>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <br></br>
            <span data-testid="left-die">left= {die1}</span>
            <br></br>
            <span data-testid="right-die">right= {die2}</span>
            <br></br>
            <div>
                {die1 === 1 && die2 === 1 ? <div>Lose</div> : <div> </div>}
                {die1 === die2 && die2 !== 1 ? <div>Win</div> : <div> </div>}
            </div>{" "}
        </>
    );
}
