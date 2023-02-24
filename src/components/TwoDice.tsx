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
    //Code for Two Dice
    const [dieOne, setDieOne] = useState<number>(1);
    const [dieTwo, setDieTwo] = useState<number>(6);

    function rollLeft(): void {
        setDieOne(d6());
        if (dieOne === dieTwo) {
            console.log("YOU WIN!");
        }
    }
    function rollRight(): void {
        setDieTwo(d6());
    }
    // function isEqual(): void {
    //     if (dieOne === dieTwo) {
    //         console.log("YOU WIN!");
    //     } else {
    //         console.log("YOU LOSE!");
    //     }
    // }
    return (
        <>
            <Button onClick={rollLeft}>Roll Left</Button>
            <div></div>
            <Button onClick={rollRight}>Roll Right </Button>
            <div>
                Left Die: <span data-testid="dieOne">{dieOne}</span>
            </div>
            <div>
                Right Die: <span data-testid="dieTwo">{dieTwo}</span>
            </div>
        </>
    );
}
