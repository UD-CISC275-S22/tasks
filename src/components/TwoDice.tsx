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
    const [left_die, setLeftDiceValue] = useState<number>(-1);
    const [right_die, setRightDiceValue] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>();
    const [won, setWin] = useState<boolean>();

    function rollLeftDice() {
        setLeftDiceValue(d6());
        winCheck();
    }
    function rollRightDice() {
        setRightDiceValue(d6());
        winCheck();
    }

    // checks to see if the game has been won
    function winCheck() {
        if (left_die === right_die) {
            // make it so game over == true
            setGameOver(true);
            if (left_die !== 1) {
                // means won is false
                setWin(true);
            } else {
                setWin(false);
            }
            // means won is true
        }
        // means it so game over == false
    }

    // need to make it so that we do do the somparison until the game over thing is true
    return (
        <div>
            <div>Two Dice</div>;
            <Button onClick={rollLeftDice}>Roll Left</Button>;
            {<span data-testid="left-die">{left_die}</span>}
            <Button onClick={rollRightDice}>Roll Right</Button>;
            {<span data-testid="right-die">{right_die}</span>};
            {gameOver && won === true ? (
                <div>You Win!</div>
            ) : gameOver && won === false ? (
                <div>You Lose.</div>
            ) : (
                <div>Match Undecided</div>
            )}
        </div>
    );
}
