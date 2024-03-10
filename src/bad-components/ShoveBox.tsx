import React, { useState } from "react";
import { Button } from "react-bootstrap";

function MoveableBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    return (
        <>
            <div>
                <span>The box is at: {position}</span>
            </div>
            <Button onClick={() => setPosition(4 + position)}>
                Shove the Box
            </Button>
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
        </>
    );
}

export function ShoveBox(): JSX.Element {
    const box = MoveableBox();
    return (
        <div>
            <h3>Shove Box</h3>
            <div>
                {/* <ShoveBoxButton
                        position={box.position}
                        setPosition={box.setPosition}
                    ></ShoveBoxButton> */}
                {box}
            </div>
        </div>
    );
}
