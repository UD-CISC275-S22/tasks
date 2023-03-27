import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => setPosition(4 + position)}
            variant={"outline-dark"}
        >
            Shove the Box
        </Button>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    const box = MoveableBox();

    function MoveableBox(): JSX.Element {
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

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "x-large" }}>Shove Box</div>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
