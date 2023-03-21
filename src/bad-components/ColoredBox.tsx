import React, { useState } from "react";
import { Button } from "react-bootstrap";
{
    /* 2/3 passing tests */
}

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface Coloring {
    colorIndex: number;
    setColorIndex: (index: number) => void;
}

//const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

function ChangeColor({ setColorIndex, colorIndex }: Coloring): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: Coloring): JSX.Element {
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
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
