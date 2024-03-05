import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    onChange
}: {
    onChange: (index: number) => void;
}): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const handleClick = () => {
        const newIndex = (colorIndex + 1) % COLORS.length;
        setColorIndex(newIndex);
        onChange(newIndex);
    };
    return <Button onClick={handleClick}>Next Color</Button>;
}

function ColorPreview({ color }: { color: string }): JSX.Element {
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
    const [currentColorIndex, setCurrentColorIndex] =
        useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor onChange={setCurrentColorIndex}></ChangeColor>
                <ColorPreview color={COLORS[currentColorIndex]}></ColorPreview>
            </div>
        </div>
    );
}
