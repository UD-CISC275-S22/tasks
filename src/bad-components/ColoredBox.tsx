import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

// write an interface here that will hold the things I need for the functions
interface handleColorSwap {
    setColorIndex: (colorIndex: number) => void;
    newColorIndex: number;
}

function ChangeColor({
    setColorIndex,
    newColorIndex
}: handleColorSwap): JSX.Element {
    return (
        <Button
            onClick={() => setColorIndex((1 + newColorIndex) % COLORS.length)}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ newColorIndex }: handleColorSwap): JSX.Element {
    // I need have an index here that will iterate through the colors
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[newColorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    // I need to make 2 new interfaces like in the Peer components example
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor
                    newColorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    newColorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
