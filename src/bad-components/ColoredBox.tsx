import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];

interface ChangeColorProps {
    colorIndex: number;
    setColorIndex: (index: number) => void;
}

interface ColorPreviewProps {
    colorIndex: number;
}

function ChangeColor({
    colorIndex,
    setColorIndex
}: ChangeColorProps): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((colorIndex + 1) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: ColorPreviewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
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
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                />
                <ColorPreview colorIndex={colorIndex} />
            </div>
        </div>
    );
}
