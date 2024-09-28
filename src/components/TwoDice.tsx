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

export function TwoDice(): React.JSX.Element {
    const [left_die, setLDie] = useState<number>(1);
    const [right_die, setRDie] = useState<number>(2);

    const rollL = (): void => {
        setLDie(d6());
    };

    const rollR = (): void => {
        setRDie(d6());
    };

    return (
        <div>
            <span data-testid="left-die">{left_die}</span>

            <span data-testid="right-die">{right_die}</span>
            <div> </div>
            <Button onClick={rollL}>Roll Left</Button>
            <Button onClick={rollR}>Roll Right</Button>
            <div>
                {" "}
                {left_die == right_die && left_die != 1 && right_die != 1 ?
                    <span>Win</span>
                :   null}
            </div>
            <div>
                {" "}
                {left_die == 1 && right_die == 1 ?
                    <span>Lose</span>
                :   null}
            </div>
        </div>
    );
}
