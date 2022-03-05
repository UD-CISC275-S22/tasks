import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Box {
    movingBox: () => void;
}

function ShoveBoxButton({ movingBox }: Box) {
    return <Button onClick={movingBox}>Shove the Box</Button>;
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
    const changeBoxPosition = () => setPosition(4 + position);
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton movingBox={changeBoxPosition}></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
