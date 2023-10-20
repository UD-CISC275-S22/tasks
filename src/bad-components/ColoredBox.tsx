import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
interface colorprops {
    colorIndex: number;
    setColorIndex: (n: number) => void;
    setCurrentColor: (n: string) => void;
}

function ChangeColor({
    colorIndex,
    setColorIndex,
    setCurrentColor
}: colorprops): JSX.Element {
    function nextColorIndex() {
        setColorIndex((colorIndex + 1) % COLORS.length);
        setCurrentColor(COLORS[(colorIndex + 1) % COLORS.length]);
    }
    return <Button onClick={() => nextColorIndex()}>Next Color</Button>;
}

function ColorPreview({ color }: { color: string }): JSX.Element {
    console.log(color);
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
    const [currentColor, setCurrentColor] = useState<string>(
        COLORS[DEFAULT_COLOR_INDEX]
    );
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currentColor}</span>
            <div>
                <ChangeColor
                    setCurrentColor={setCurrentColor}
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview color={currentColor} />
            </div>
        </div>
    );
}
