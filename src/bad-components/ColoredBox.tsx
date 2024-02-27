import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface changeColorProps {
    alterColor: () => void;
    colorIndex: number;
}

function ChangeColor({
    alterColor,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    colorIndex
}: changeColorProps): JSX.Element {
    //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    //const newIndex: number = (1 + colorIndex) % COLORS.length;
    return <Button onClick={alterColor}>Next Color</Button>;
}

interface colorPreviewProps {
    colorIndex: number;
}

function ColorPreview({ colorIndex }: colorPreviewProps): JSX.Element {
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
    const alterColor = () => {
        const newIndex = (1 + colorIndex) % COLORS.length;
        //console.log("New color index:", newIndex);
        setColorIndex(newIndex);
    };
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    alterColor={alterColor}
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
