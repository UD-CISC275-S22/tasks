import React, { useRef, useState } from "react";
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
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const rollDie = (setter: React.Dispatch<React.SetStateAction<number>>) => {
        const newValue = 1 + Math.floor(Math.random() * 6);
        setter(newValue);
    };

    const rollLeftDie = () => {
        rollDie(setLeftDie);
    };

    const rollRightDie = () => {
        rollDie(setRightDie);
    };

    const isSnakeEyes = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <br />
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {isSnakeEyes && <div>Lose</div>}
            {!isSnakeEyes && leftDie === rightDie && <div>Win</div>}
        </div>
    );
}
