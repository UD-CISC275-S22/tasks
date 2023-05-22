import React, { useState } from "react";
import { Button } from "react-bootstrap";

const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorProp {
    nextColor: (newColorBox: number) => void;
    colorIndex: number;
}

function ChangeColor({ colorIndex, nextColor }: colorProp): JSX.Element {
    return (
        <Button onClick={() => nextColor((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: colorProp): JSX.Element {
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
                    nextColor={setColorIndex}
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    nextColor={setColorIndex}
                    colorIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
