import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colors {
    setColorIndex: (index: number) => void;
    colorIndex: number;
}

function ChangeColor({ setColorIndex, colorIndex }: colors): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: { colorIndex: number }): JSX.Element {
    return (
        <span>
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
        </span>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <span>
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
        </span>
    );
}
