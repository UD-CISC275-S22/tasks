import React from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.ReactElement {
    const [leftDie, setLeftDie] = React.useState<number>(1);
    const [rightDie, setRightDie] = React.useState<number>(2);

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <div>
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
            </div>
            {leftDie === rightDie && leftDie === 1 && <div>Lose</div>}
            {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
        </div>
    );
}
