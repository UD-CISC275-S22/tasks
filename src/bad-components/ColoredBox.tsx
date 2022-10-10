import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setColorIndex,
    colorIndex
}: {
    setColorIndex: (newIndex: number) => void;
    colorIndex: number;
}): JSX.Element {
    //const [colors, setColors] = useState<string[]>(COLORS);
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
        //this doesn't assign color in the index? COLORS[index]??
    );
}

function ColorPreview({ colorIndex }: { colorIndex: number }): JSX.Element {
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
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
