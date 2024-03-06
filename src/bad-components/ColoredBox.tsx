import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

// interface SetColorProps {
//     colorIndex: string;
//     setColorIndex: (newColor: string) => void;
// }

function ChangeColor(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button onClick={() => setColorIndex(1 + (colorIndex % COLORS.length))}>
            Next Color
        </Button>
        // <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
        //     Next Color
        // </Button>
    );
}

function ColorPreview(): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);
    //const changeColor = () => setColorIndex(1 + (colorIndex % COLORS.length));
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor
                //setColorIndex={setColorIndex}
                //colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview
                //setColorIndex={setColorIndex}
                //colorIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
