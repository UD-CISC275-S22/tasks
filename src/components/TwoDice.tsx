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
    const [die2, setDie2] = useState<number>(6);

    return (
        <>
            <span data-testid="left-die">
                <Button onClick={() => setDie1(d6())}> Roll Left </Button>
                {die1}
            </span>{" "}
            <span data-testid="right-die">
                <Button onClick={() => setDie2(d6())}> Roll Right </Button>
                {die2}
            </span>
            <br></br>
            {die1 === die2 && die1 === 1 && <div> Lose </div>}
            {die1 === die2 && die1 !== 1 && <div> Win </div>}
        </>
    );
}
