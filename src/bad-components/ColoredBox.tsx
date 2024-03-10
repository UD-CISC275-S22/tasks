/*import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const handleClick = () => {
        setColorIndex((colorIndex + 1) % COLORS.length);
    };
    return <Button onClick={handleClick}>Next Color</Button>;
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
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}*/
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setColorIndex
}: {
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
    const handleClick = () => {
        setColorIndex((prevColorIndex) => (prevColorIndex + 1) % COLORS.length);
    };

    return <Button onClick={handleClick}>Next Color</Button>;
}

function ColorPreview({ colorIndex }: { colorIndex: number }): JSX.Element {
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
            <div>Colored Box</div>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor setColorIndex={setColorIndex}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
