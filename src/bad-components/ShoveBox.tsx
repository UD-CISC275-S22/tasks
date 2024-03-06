import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    setPosition
}: {
    setPosition: (updateFn: (prevPosition: number) => number) => void;
}): JSX.Element {
    return (
        <Button
            onClick={() => setPosition((prevPosition) => prevPosition + 50)}
        >
            Shove the Box
        </Button>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    return (
        <div>
            <h3>Shove Box</h3>
            <div style={{ margin: "10px 0" }}>
                <ShoveBoxButton setPosition={setPosition} />
            </div>
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    marginLeft: `${position}px`
                }}
            />
        </div>
    );
}
