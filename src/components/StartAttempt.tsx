import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [started, starter] = useState<boolean>(false);
    const [numLeft, adder] = useState<number>(4);

    const handleClick = () => {
        starter(true); // Call the starter function
        adder(numLeft - 1); // Decrement numLeft
    };

    return (
        <div>
            <div>
                <Button
                    onClick={() => handleClick()}
                    disabled={started || numLeft < 1}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => starter(false)} disabled={!started}>
                    Stop Quiz
                </Button>
                <Button onClick={() => adder(numLeft + 1)} disabled={started}>
                    Mulligan ({numLeft})
                </Button>
            </div>
        </div>
    );
}
