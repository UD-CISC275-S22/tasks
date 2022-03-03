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
    const [diceOne, setDiceOne] = useState<number>(1);
    const [diceTwo, setDiceTwo] = useState<number>(2);

    const handleRoll = (die: number) => {
        if (die == 1) {
            setDiceOne(d6());
        } else {
            setDiceTwo(d6());
        }
    };

    // useEffect(() => {
    //     updateGameState();
    // }, [diceOne, diceTwo]);

    return (
        <div>
            <p>
                <span data-testid="left-die">{diceOne} </span>
                <span data-testid="right-die">{diceTwo}</span>
            </p>

            <div>
                <Button onClick={() => handleRoll(1)}>Roll Left</Button>
                <Button onClick={() => handleRoll(2)}>Roll Right</Button>
            </div>
            {diceOne === diceTwo && diceOne === 1 && <p>Lose</p>}
            {diceOne === diceTwo && diceOne !== 1 && <p>Win</p>}
        </div>
    );
}
