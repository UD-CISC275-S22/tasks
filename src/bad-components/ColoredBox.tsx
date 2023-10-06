import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor(props: {
    colorIndex: number;
    onClick: () => void;
}): JSX.Element {
    return <Button onClick={props.onClick}>Next Color</Button>;
}

function ColorPreview(props: { colorIndex: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[props.colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const changeColor = () => {
        setColorIndex((colorIndex + 1) % COLORS.length);
    };

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    onClick={changeColor}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
