import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];

// Define a type for the ChangeColor and ColorPreview props
interface ChangeColorProps {
    setColorIndex: () => void;
}

interface ColorPreviewProps {
    color: string;
}

function ChangeColor({ setColorIndex }: ChangeColorProps): JSX.Element {
    return <Button onClick={setColorIndex}>Next Color</Button>;
}

function ColorPreview({ color }: ColorPreviewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);

    const nextColorIndex = () =>
        setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor setColorIndex={nextColorIndex} />
                <ColorPreview color={COLORS[colorIndex]} />
            </div>
        </div>
    );
}
