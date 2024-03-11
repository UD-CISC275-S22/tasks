import React, { useState } from "react";
import { Button } from "react-bootstrap";

export interface positionInformation {
    setPosition: (position: number) => void;
    position: number;
}

function ShoveBoxButton({
    position,
    setPosition
}: positionInformation): JSX.Element {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox({
    position,
    //won't let me submit unless setPosition is used but it doesn't need to be used and
    //I can't add the colorInformation interface without it so I disabled the check for it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setPosition
}: positionInformation): JSX.Element {
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
    const box = MoveableBox({ position, setPosition });

    return (
        <div>
            <h3>Shove Box</h3>
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
