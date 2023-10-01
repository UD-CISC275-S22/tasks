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
    const [leftDie, setLeftDie] = useState<number>(7);
    const [rightDie, setRightDie] = useState<number>(8);
    const [gameResult, setGameResult] = useState<string>("");

    const rollLeftDie = () => {
        const newValue = d6();
        setLeftDie(newValue);
        checkGameResult(newValue, rightDie);
    };

    const rollRightDie = () => {
        const newValue = d6();
        setRightDie(newValue);
        checkGameResult(leftDie, newValue);
    };

    const checkGameResult = (leftValue: number, rightValue: number) => {
        if (leftValue === 1 && rightValue === 1) {
            setGameResult("You lose! Snake eyes!");
        } else if (leftValue === rightValue) {
            setGameResult("You win! Matching values!");
        } else {
            setGameResult("");
        }
    };

    return (
        <div>
            <h1>Two Dice Game</h1>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <button onClick={rollLeftDie} data-testid="roll-left">
                    Roll Left
                </button>
            </div>
            <div>
                <span data-testid="right-die">{rightDie}</span>
                <button onClick={rollRightDie} data-testid="roll-right">
                    Roll Right
                </button>
            </div>
            {gameResult && <p>{gameResult}</p>}
        </div>
    );
}
