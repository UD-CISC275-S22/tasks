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
    //create to states for each dices
    const [leftDice, setLeft] = useState<number>(1);
    const [rightDice, setRight] = useState<number>(2);
    function firstDice(): void {
        setLeft(d6());
    }
    function secondDice(): void {
        setRight(d6());
    }

    return (
        <div>
            Two Dice
            <div>
                Current left Dice: <span>{leftDice}</span>
                <div>
                    <Button data-testid="left-die" onClick={() => firstDice()}>
                        Roll left{leftDice}
                    </Button>
                </div>
                Current right Dice: <span>{rightDice}</span>
                <div>
                    <Button
                        data-testid="right-die"
                        onClick={() => secondDice()}
                    >
                        Roll Right{rightDice}
                    </Button>
                </div>
                <div>
                    {leftDice === rightDice && leftDice === 1 ? (
                        <span>You Lose!</span>
                    ) : leftDice === rightDice ? (
                        <span>You Win!</span>
                    ) : (
                        <span> try Again </span>
                    )}
                </div>
            </div>
        </div>
    );
}
/*
                    if (testID1 === testID2 && testID1 != 1)
                    {<span> You Win!</span>}
                    else if (testID1 === testID2 && testID1 === 1)
                    {<span> You Lose!</span>}
                    else {<span> Try Again </span>}
                    */
