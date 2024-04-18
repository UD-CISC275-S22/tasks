import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
interface ChangeColorProps {
    setColorIndex: (index: number | ((index: number) => number)) => void;
}

interface ColorPreviewProps {
    color: string;
}
function ChangeColor({ setColorIndex }: ChangeColorProps): JSX.Element {
    return (
        <Button
            onClick={() =>
                setColorIndex(
                    (colorIndex: number) => (colorIndex + 1) % COLORS.length
                )
            }
        >
            Next Color
        </Button>
    );
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
    const currentColor = COLORS[colorIndex];

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currentColor}</span>
            <div>
                <ChangeColor setColorIndex={setColorIndex}></ChangeColor>
                <ColorPreview color={currentColor}></ColorPreview>
            </div>
        </div>
    );
}
