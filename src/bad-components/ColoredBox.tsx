import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface colors {
    advance: () => void;
}
interface curcolors {
    color: string;
}

function ChangeColor({ advance }: colors): JSX.Element {
    return <Button onClick={advance}>Next Color</Button>;
}

function ColorPreview({ color }: curcolors): JSX.Element {
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
    const COLORS = ["red", "blue", "green"];
    const DEFAULT_COLOR_INDEX = 0;
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const advance = () => setColorIndex((1 + colorIndex) % COLORS.length);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>

            <div>
                <ChangeColor advance={advance}></ChangeColor>
                <ColorPreview color={COLORS[colorIndex]}></ColorPreview>
            </div>
        </div>
    );
}
