import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({ change }: { change: () => void }): JSX.Element {
    return <Button onClick={change}>Next Color</Button>;
}

function ColorPreview({ index }: { index: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[index],
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
                    change={() =>
                        setColorIndex((colorIndex + 1) % COLORS.length)
                    }
                ></ChangeColor>
                <ColorPreview index={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
