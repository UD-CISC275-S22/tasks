//import { render } from "@testing-library/react";
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
    const [left_die, setLeftDiceValue] = useState<number>(-2);
    const [right_die, setRightDiceValue] = useState<number>(-1);
    function rollLeftDice() {
        setLeftDiceValue(d6());
    }
    function rollRightDice() {
        setRightDiceValue(d6());
    }

    return (
        <div>
            <div>Two Dice</div>;
            <Button onClick={rollLeftDice}>Roll Left</Button>;
            {<span data-testid="left-die">{left_die}</span>}
            <Button onClick={rollRightDice}>Roll Right </Button>;
            {<span data-testid="right-die">{right_die}</span>};
            {left_die === right_die && left_die !== 1 ? (
                <div>You Win</div>
            ) : left_die === right_die && left_die === 1 ? (
                <div>You Lose</div>
            ) : (
                <div>Match Ongoing</div>
            )}
        </div>
    );
}
