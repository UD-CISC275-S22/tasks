import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    setPosition
}: {
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => setPosition((prevPosition) => prevPosition + 50)}
        >
            Shove the Box
        </Button>
    );
}

function MoveableBox({ position }: { position: number }) {
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
            <span>The box is at: {position}px away</span>
            <div>
                <ShoveBoxButton setPosition={setPosition}></ShoveBoxButton>
                <MoveableBox position={position}></MoveableBox>
            </div>
        </div>
    );
}
