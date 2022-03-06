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
    const [left_die, setleftdie] = useState<number>(0);
    const [right_die, setrightdie] = useState<number>(1);

    function changeLeftDiceNum(): void {
        const newNumber = d6();
        setleftdie(newNumber);
    }
    function changeRightDiceNum(): void {
        const newNumber = d6();
        setrightdie(newNumber);
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{left_die}</span>
                <span data-testid="right-die">{right_die}</span>
            </div>
            <div>
                <Button onClick={changeLeftDiceNum}>Roll Left</Button>
                <Button onClick={changeRightDiceNum}>Roll Right</Button>
            </div>
            <div>
                {left_die === right_die && left_die === 1 ? (
                    <span>Lose</span>
                ) : left_die === right_die ? (
                    <span>Win</span>
                ) : (
                    <span> </span>
                )}
            </div>
        </div>
    );
}
