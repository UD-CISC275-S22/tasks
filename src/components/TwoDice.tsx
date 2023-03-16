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
    /* Each die’s value should be rendered in the View in a span tag of
     their own, with the first dice having the data-testid of left-die 
     and the second dice having the data-testid of right-die. */
    let [left_die, setDice] = useState<number>(d6);
    const [right_die, setDice2] = useState<number>(d6);
    const [progress, setProgress] = useState<boolean>(true);

    return (
        <>
            <div>
                <Button
                    onClick={() => {
                        setDice(d6);
                    }}
                >
                    Roll Left
                </Button>
                <div>
                    <span data-testid="left-die">{left_die}</span>
                </div>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setDice2(d6);
                    }}
                >
                    Roll Right
                </Button>
            </div>
            <div>
                <span data-testid="right-die">24</span>.
            </div>
            <div>
                {left_die === right_die && progress ? (
                    <div>WIN!! </div>
                ) : (
                    <span>!progress</span>
                )}
            </div>
        </>
    );
}
