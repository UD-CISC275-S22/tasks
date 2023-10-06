import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface newPosition {
    position: number;
    setPosition: (changePosition: number) => void;
}

function ShoveBoxButton({ position, setPosition }: newPosition) {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox({ position }: newPosition): JSX.Element {
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

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <MoveableBox
                    position={position}
                    setPosition={setPosition}
                ></MoveableBox>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
            </div>
        </div>
    );
}
