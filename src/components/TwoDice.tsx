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

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(2);
    const [rightDie, setRightDie] = useState<number>(4);
    //const [result, setResult] = useState<string>("");

    /*const initializeDice = () => {
        let left = d6();
        let right = d6();
        while (left === right) {
            right = d6();
        }
        setLeftDie(left);
        setRightDie(right);
    };*/

    /*useEffect(() => {
        initializeDice();
    }, []);*/

    // const checkWinLose = (left: number, right: number) => {
    //     if (left === right) {
    //         setResult(left === 1 ? "Lose!" : "Win");
    //     } else {
    //         setResult("N/A");
    //     }
    // };
    const handleRollLeft = () => {
        // const newLeft = d6();
        setLeftDie(d6());
        //checkWinLose(newLeft, rightDie);
    };

    const handleRollRight = () => {
        const newRight = d6();
        setRightDie(newRight);
        //checkWinLose(leftDie, newRight);
    };

    return (
        <div>
            <div>
                <Button onClick={handleRollLeft}>Roll Left</Button>
                <Button onClick={handleRollRight}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <br></br>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            {leftDie === rightDie && leftDie === 1 ?
                <span>Lose!</span>
            : leftDie === rightDie && leftDie !== 1 ?
                <span>Win</span>
            :   <span>N/A</span>}

            {/* {result && <p>{result}</p>} */}
        </div>
    );
}
