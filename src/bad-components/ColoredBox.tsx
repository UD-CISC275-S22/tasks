import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
//const DEFAULT_COLOR_INDEX = 0;

interface helper {
    colorIndex: number;
    setColorIndex: (x: number) => void;
}

function ChangeColor({ colorIndex, setColorIndex }: helper): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ColorPreview({ colorIndex, setColorIndex }: helper): JSX.Element {
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
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                />
                <ColorPreview
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                />
            </div>
        </div>
    );
}
