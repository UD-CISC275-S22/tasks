import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    colorIndex: number;
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
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

interface ColorPreviewProps {
    color: string;
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
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const currentColor = COLORS[colorIndex];

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currentColor}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                />
                <ColorPreview color={currentColor} />
            </div>
        </div>
    );
}
