import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface box {
    box: () => void;
}

function ShoveBoxButton({ box }: box): JSX.Element {
    return <Button onClick={box}>Shove the Box</Button>;
}

function MoveableBox({ position }: { position: number }): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    const box = MoveableBox({ position });
    const move = () => setPosition(4 + position);
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton box={move}></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
