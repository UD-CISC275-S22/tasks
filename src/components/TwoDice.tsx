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
/**
 The TwoDice component will simulate a game where you roll two dice in an attempt to get matching values.
  However, you lose the game if your dice ever come up as a pair of ones (“snake eyes”).

You will need two states, one for each die.

Each die’s value should be rendered in the View in a span tag of their own, with the first dice having the data-testid of left-die and the second dice having the data-testid of right-die.
You will need two “Roll” buttons (labelled Roll Left and Roll Right).

Clicking a Roll button will change the value for the corresponding dice using the provided d6 function.
The initial values of the dice cannot be the same.

When the two states are equal, render a message that includes the word Lose.

When the two states are equal, render a message that includes the word Win.

If you do all these and are still not passing all tests, read the test file, it is a good practice! In much of software engineering, the tests are the product spec.

 */
export function TwoDice(): JSX.Element {
    const [rightDie, setRightDie] = useState<number>(1);
    const [leftDie, setLeftDie] = useState<number>(2);
    function rollLeft(): void {
        setLeftDie(d6);
    }
    function rollRight(): void {
        setRightDie(d6);
    }
    let result: string;

    if (leftDie === 1 && rightDie === 1) {
        result = "Lose";
    } else if (leftDie === rightDie) {
        result = "Win";
    } else {
        result = "Nope";
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={() => rollLeft()}>Roll Left</Button>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={() => rollRight()}>Roll Right</Button>
            {<div>{result}</div>}
        </div>
    );
}
