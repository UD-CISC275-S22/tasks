import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(2);
    const [rightDie, setRightDie] = useState<number>(3);

    function rollLeft() {
        setLeftDie(d6());
    }

    function rollRight() {
        setRightDie(d6());
    }

    let result = "";
    if (leftDie === 1 && rightDie === 1) {
        result = "Lose";
    } else if (leftDie === rightDie) {
        result = "Win";
    }

    return (
        <div>
            <p data-testid="left-die">{leftDie}</p>
            <p data-testid="right-die">{rightDie}</p>

            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>

            {result && <p>{result}</p>}
        </div>
    );
}