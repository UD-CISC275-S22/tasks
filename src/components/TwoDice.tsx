import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    const isWin = leftDie === rightDie && leftDie !== 1;
    const isLose = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            {isWin && <div>You Win</div>}
            {isLose && <div>You Lose</div>}
        </div>
    );
}
