import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ShoveBoxButtonProps {
    setPosition: (
        newPosition: number | ((prevPosition: number) => number)
    ) => void;
}

const ShoveBoxButton: React.FC<ShoveBoxButtonProps> = ({ setPosition }) => {
    return (
        <Button
            onClick={() => setPosition((prevPosition) => prevPosition + 50)}
        >
            Shove the Box
        </Button>
    );
};

interface MoveableBoxProps {
    position: number;
}

const MoveableBox: React.FC<MoveableBoxProps> = ({ position }) => {
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
};

export const ShoveBox: React.FC = () => {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}px away</span>
            <div>
                <ShoveBoxButton setPosition={setPosition} />
                <MoveableBox position={position} />
            </div>
        </div>
    );
};
