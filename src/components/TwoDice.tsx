import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    return (
        <div>
            <div>
                Left: <span data-testid="left-die">{leftDie}</span>
            </div>
            <div>
                Right: <span data-testid="right-die">{rightDie}</span>
            </div>

            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
            >
                Roll Left
            </Button>

            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
            >
                Roll Right
            </Button>

            {leftDie === rightDie && leftDie === 1 && <div>Lose</div>}
            {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
        </div>
    );
}
