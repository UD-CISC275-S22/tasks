import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
interface ChangeColor {
    onchange: () => void;
}

function ChangeColor({ onchange }: ChangeColor): JSX.Element {
    return (
        <>
            <Button onClick={onchange}>Next Color</Button>
        </>
    );
}

function ColorPreview({ color }: { color: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color % COLORS.length],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const next = () => setColorIndex(1 + (colorIndex % COLORS.length));
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor onchange={next}></ChangeColor>
                <ColorPreview color={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
