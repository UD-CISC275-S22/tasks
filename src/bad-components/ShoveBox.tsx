import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);
    function ShoveBoxButton({
        position,
        setPosition,
    }: {
        position: number;
        setPosition: (newPosition: number) => void;
    }) {
        setPosition(4 + position);
        return;
    }

    return (
        <div>
            <h3>Shove Box</h3>
            <Button
                onClick={() => {
                    ShoveBoxButton({ position, setPosition });
                }}
            >
                Shove the Box
            </Button>
            {/* <span>The box is at: {box.position}</span>
            <div>
                <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                {box}
            </div> */}
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px",
                }}
            ></div>
        </div>
    );
}
