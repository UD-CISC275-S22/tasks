import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

function OutputColor({ backColor }: { backColor: string }): JSX.Element {
    return (
        <div>
            You have chosen{" "}
            <span
                data-testid="colored-box"
                style={{ backgroundColor: backColor }}
            >
                {backColor}
            </span>
        </div>
    );
}

function ListColors({
    backColor,
    setBackColor
}: {
    backColor: string;
    setBackColor: (color: string) => void;
}): JSX.Element {
    return (
        <div>
            {colors.map(
                (color: string): JSX.Element => (
                    <Form.Check
                        type="radio"
                        name="color"
                        key={color}
                        inline
                        onChange={(e) => setBackColor(e.target.value)}
                        id={color}
                        label={color}
                        checked={backColor === color}
                        style={{ backgroundColor: color }}
                        value={color}
                    ></Form.Check>
                )
            )}
        </div>
    );
}

export function ChangeColor(): JSX.Element {
    const [backColor, setBackColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <ListColors
                backColor={backColor}
                setBackColor={setBackColor}
            ></ListColors>
            <OutputColor backColor={backColor}></OutputColor>
        </div>
    );
}
