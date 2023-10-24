import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    const handleShove = () => {
        setPosition(position + 4);
    };

    return <Button onClick={handleShove}>Shove the Box</Button>;
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
            <div>
                <ShoveBoxButton position={position} setPosition={setPosition} />
                <MoveableBox position={position} />
            </div>
        </div>
    );
}
