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
    const [dice1, setDice1] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(2);

    function change1(): void {
        // dice1 = d6();
        setDice1(dice1);
    }

    function change2(): void {
        setDice2(d6());
    }

    // function RollLeft(): void{
    //     setDice1
    // }
    return (
        <div>
            <span data-testid="left-die">{dice1}</span>
            <span data-testid="right-die">{dice2}</span>
            <Button onClick={d6}>Roll Left</Button>
            <Button onClick={d6}>Roll Right</Button>
            {}
        </div>
    );
}
