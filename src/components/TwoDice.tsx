import React, { useState } from "react";

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);
    return (
        <div>
            <div>
                <span data-testid="left-die">{left}</span>
                <span data-testid="right-die">{right}</span>
            </div>
            <button onClick={() => setLeft(Math.floor(Math.random() * 6) + 1)}>
                Roll Left
            </button>
            <button onClick={() => setRight(Math.floor(Math.random() * 6) + 1)}>
                Roll Right
            </button>
            {left === right && left === 1 && <div>Lose</div>}
            {left === right && left !== 1 && <div>Win</div>}
        </div>
    );
}
