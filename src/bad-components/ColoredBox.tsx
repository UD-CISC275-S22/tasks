import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
interface i {
    setindex: () => void;
    index: number;
}

function ChangeColor({ setindex }: i): JSX.Element {
    //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return <Button onClick={() => setindex()}>Next Color</Button>;
}

function ColorPreview({ index }: i): JSX.Element {
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
    function changeColor(): void {
        setColorIndex((1 + colorIndex) % COLORS.length);
    }
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    index={colorIndex}
                    setindex={changeColor}
                ></ChangeColor>
                <ColorPreview
                    index={colorIndex}
                    setindex={changeColor}
                ></ColorPreview>
            </div>
        </div>
    );
}
