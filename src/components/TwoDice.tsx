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
    const [diceR, setDiceR] = useState<number>(1);
    const [diceL, setDiceL] = useState<number>(2);
    
    return (
        <div>
            <Button onClick={() => setDiceL(d6())}>Roll Left</Button>
            <Button onClick={() => setDiceR(d6())}>Roll Right</Button>
            {/* <span>Right Die: {diceR}</span>
            <span>Left Die: {diceL}</span> */}

            <p data-testid='left-die'>Left Die: {diceL}</p>
            <p data-testid='right-die'>Right Die: {diceR}</p>
            <p>{diceR === 1 && diceL === 1 && "You Lose!"}</p>
            <p>{diceR !== 1 && diceR === diceL && "You Win!"}</p>
        </div>
    );
}
