import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ShoveBoxButtonProps {
    position: number;
    setPosition: (newPosition: number) => void;
}

function ShoveBoxButton({ position, setPosition }: ShoveBoxButtonProps) {
    return (
        <Button onClick={() => setPosition(position + 4)}>Shove the Box</Button>
    );
}

interface MoveableBoxProps {
    position: number;
}

function MoveableBox({ position }: MoveableBoxProps): JSX.Element {
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
                marginLeft: `${position}px`
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}px from the left</span>
            <div>
                <ShoveBoxButton position={position} setPosition={setPosition} />
                <MoveableBox position={position} />
            </div>
        </div>
    );
}
