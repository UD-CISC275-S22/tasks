import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
// export function d6(): number {
//     return 1 + Math.floor(Math.random() * 6);
// }

// const [left_die, setLeftDiceValue] = useState<number>(0);
// const [right_die, setRightDiceValue] = useState<number>(0);

// function rollLeftDice() {
//     setLeftDiceValue(d6());
//     left_die;
// }
// function rollRightDice() {
//     setRightDiceValue(d6());
//     right_die;
/* // }
            <Button onClick={rollLeftDice}>Roll Left</Button>;
            {<span>{left_die}</span>}
            <Button onClick={rollRightDice}>Roll Right</Button>;
            {<span>{right_die}</span>}; */

export function TwoDice(): JSX.Element {
    return (
        <div>
            <div>Two Dice</div>;
        </div>
    );
}
