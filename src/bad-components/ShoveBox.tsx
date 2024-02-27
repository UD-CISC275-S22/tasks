import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface boxProps {
    setPosition: (newPosition: number) => void;
    position: number;
}

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    const newPosition: number = position + 4;
    return (
        <Button onClick={() => setPosition(newPosition)}>Shove the Box</Button>
    );
}

function MoveableBox(props: boxProps): JSX.Element {
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
                marginLeft: props.position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    //const box = MoveableBox(position, setPosition);
    return (
        <div>
            <h3>Shove Box</h3>
            {
                <>
                    <span>The box is at: {position}</span>
                    <div>
                        <ShoveBoxButton
                            position={position}
                            setPosition={setPosition}
                        ></ShoveBoxButton>
                        <MoveableBox
                            position={position}
                            setPosition={setPosition}
                        ></MoveableBox>
                    </div>
                </>
            }
        </div>
    );
}
