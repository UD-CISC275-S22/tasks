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
    type status = "Win" | "Lose";

    const [dieOne, setDieOne] = useState<number>(1);
    const [dieTwo, setDieTwo] = useState<number>(6);
    const [statusMessage, setStatusMessage] = useState<status>("Lose");

    const winner: Record<status, status> = {
        Win: "Win",
        Lose: "Win"
    };

    const loser: Record<status, status> = {
        Lose: "Lose",
        Win: "Lose"
    };

    function checkDice(): void {
        if (dieOne != 1 && dieTwo != 1 && dieOne == dieTwo) {
            setStatusMessage(winner[statusMessage]);
        } else {
            setStatusMessage(loser[statusMessage]);
        }
    }

    function rollLeftDie(): void {
        setDieTwo(d6());
        checkDice();
    }

    function rollRightDie(): void {
        setDieOne(d6());
        checkDice();
    }

    /*
    function checkDupes(): void {
        while (dieOne == dieTwo) {
            setDieOne(d6());
            console.log("dupe");
        }
    }
    checkDupes();
    */

    return (
        <div>
            <div>
                <span>
                    <Button onClick={rollLeftDie}>Roll Left</Button>
                </span>
            </div>
            Left Die: <span data-testid="left-die">{dieTwo}</span>
            <div>
                <span>
                    <Button onClick={rollRightDie}>Roll Right</Button>
                </span>
            </div>
            Right Die: <span data-testid="right-die">{dieOne}</span>
            {dieOne == 1 && dieTwo == 1 && <div>Lose</div>}
            {dieOne == dieTwo && dieOne != 1 && <div>Win</div>}
        </div>
    );
}
