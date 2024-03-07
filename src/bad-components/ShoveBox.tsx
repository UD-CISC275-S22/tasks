import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ShoveBoxButtonProps {
    position: number;
    setPosition: (newPosition: number) => void;
}

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}): JSX.Element {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

//return (
//<Button>
//onClick={handleClick}
//Shove the Box
//</Button>
//);

function MoveableBox({ position }: { position: number }): JSX.Element {
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
    //const [boxes, setBoxes] = useState<Array<number>>(
    //Array.from({ length: 5 }, (_, index) => index * 10)
    //);
    const [position, setPosition] = useState<number>(10);
    const box = MoveableBox({ position });

    //const handleBoxPositionChange = (index: number, newPosition: number) => {
    //setBoxes((prevBoxes) => {
    //const newBoxes = [...prevBoxes];
    //newBoxes[index] = newPosition;
    //return newBoxes;
    //});
    //};

    /*const moveableBoxes = boxes.map((position, index) => (
        <MoveableBox
            key={index}
            position={position}
            setPosition={(newPosition) =>
                handleBoxPositionChange(index, newPosition)
            }
        />
    ));
    */

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
