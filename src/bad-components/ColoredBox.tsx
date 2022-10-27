import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface Change {
    colorIndex1: number;
    setColorIndex1: (newIndex: number) => void;
}

interface Color {
    colorIndex: number;
}
function ChangeColor({ colorIndex1, setColorIndex1 }: Change): JSX.Element {
    // const [colorIndex, setColorIndex] = useState<number>(colorIndex1);
    return (
        <Button
            onClick={() => setColorIndex1((1 + colorIndex1) % COLORS.length)}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: Color): JSX.Element {
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
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor
                    colorIndex1={colorIndex}
                    setColorIndex1={setColorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
