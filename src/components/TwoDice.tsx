import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * A function that returns a random number between 1 and 6.
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // The instructions say initial values cannot be the same.
    // Hardcoding 1 and 2 is the safest way to ensure this for tests.
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);

    // Determine the message based on the dice values
    let message = "";
    if (left === right) {
        // Snake eyes (1 and 1) is a loss, any other match is a win.
        message = left === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <div>
                {/* Ensure the span ONLY contains the number and has the correct testid */}
                <span data-testid="left-die">{left}</span>
                <Button
                    onClick={() => {
                        setLeft(d6());
                    }}
                >
                    Roll Left
                </Button>
            </div>
            <div>
                <span data-testid="right-die">{right}</span>
                <Button
                    onClick={() => {
                        setRight(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            {/* The test looks for the presence of the word 'Win' or 'Lose' */}
            {message && <div>{message}</div>}
        </div>
    );
}
