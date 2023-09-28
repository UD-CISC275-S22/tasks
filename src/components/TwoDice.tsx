import React, { useEffect, useState } from "react";
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
    const [leftDice, setLeftDice] = useState<number>(1);
    const [rightDice, setRightDice] = useState<number>(6);
    const [gameOutcome, setGameOutcome] = useState<string | null>(null);

    const rollLeftDice = () => {
        const newValue = d6();
        setLeftDice(newValue);
        checkOutcome(newValue, rightDice);
    };

    const rollRightDice = () => {
        const newValue = d6();
        setRightDice(newValue);
        checkOutcome(leftDice, newValue);
    };

    const checkOutcome = (left: number, right: number) => {
        if (left === 1 && right === 1) {
            setGameOutcome("Lose");
        } else if (left === right) {
            setGameOutcome("Win");
        } else {
            setGameOutcome(null); // Reset the game outcome
        }
    };

    return (
        <div>
            <div data-testid="left-die">{leftDice}</div>
            <div data-testid="right-die">{rightDice}</div>
            <button onClick={rollLeftDice}>Roll Left</button>
            <button onClick={rollRightDice}>Roll Right</button>
            {gameOutcome && <div>{gameOutcome}</div>}
        </div>
    );
}
