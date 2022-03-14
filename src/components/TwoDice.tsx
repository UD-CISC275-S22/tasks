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
    //simulates a game where you roll two dice in attempt to get matching values
    //IF your dice ever come up as a  pair of 1's, you lose

    //two states, one for each die
    //each dice's value: span tag of their own
    //first dice has the data-testid of left-die
    //second dice has the data-testid of the right die

    //2 roll buttons - roll left and roll right
    //clicking a roll button will change the value for the corresponding dice, using the d6 function

    //initial values of the dice can't be the same
    //when the two states are equal, render a message "lose"
    //When the two states are equal, render a message that includes the word "win"

    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    return (
        <div>
            <div>
                <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
                Left Value: <span data-testid="left-die">{leftDie}</span>
                <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
                Right Value: <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                {leftDie === rightDie && leftDie !== 1 && <div>You Win</div>}
                {leftDie === rightDie && leftDie === 1 && <div>You Lose</div>}
            </div>
        </div>
    );
}
