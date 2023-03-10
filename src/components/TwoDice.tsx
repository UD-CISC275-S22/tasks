/* eslint-disable indent */
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
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    const [leftRollCount, setLeftRollCount] = useState<number>(0);
    const [rightRollCount, setRightRollCount] = useState<number>(0);

    function rollLeft(): void {
        setLeftDie(d6());
        setLeftRollCount(leftRollCount + 1);
    }
    function rollRight(): void {
        setRightDie(d6());
        setRightRollCount(rightRollCount + 1);
    }

    const isSnakeEyes = (): boolean => {
        return leftDie === 1 && rightDie === 1;
    };

    function lost(): string {
        return leftRollCount > 1 || rightRollCount > 1 ? "You Lose!" : "";
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{"Left die: " + leftDie}</span>
                <span data-testid="right-die">
                    {"\tRight die: " + rightDie}
                </span>
            </div>
            <span>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </span>
            <span>
                {leftDie === rightDie &&
                !isSnakeEyes() &&
                leftRollCount >= 1 &&
                rightRollCount >= 1 ? (
                    <div>You Win!</div>
                ) : (
                    <div>{lost()}</div>
                )}
            </span>
        </div>
    );
}
