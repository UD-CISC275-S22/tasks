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
    const [leftRoll, setLeft] = useState<number>(1);
    const [rightRoll, setRight] = useState<number>(3);

    function rollLeft() {
        setLeft(d6());
    }

    function rollRight() {
        setRight(d6());
    }
    return (
        <div>
            <div
                style={{
                    fontSize: "x-large",
                    textAlign: "center"
                }}
            >
                Two Dice
            </div>
            <div>
                <Button onClick={rollLeft} variant={"outline-dark"}>
                    Roll Left
                </Button>
                <Button onClick={rollRight} variant={"outline-dark"}>
                    Roll Right
                </Button>
            </div>
            <div style={{ textAlign: "center" }}>
                <span data-testid="left-die">{leftRoll}</span>
                <span data-testid="right-die">{rightRoll}</span>
            </div>
            <div style={{ textAlign: "center" }}>
                {leftRoll === rightRoll
                    ? leftRoll !== 1
                        ? "Win"
                        : "Lose"
                    : ""}
            </div>
        </div>
    );
}
