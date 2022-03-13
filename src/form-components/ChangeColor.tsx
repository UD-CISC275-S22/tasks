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

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((colorValue: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event) => setColor(event.target.value)}
                    id={"color-" + colorValue}
                    key={colorValue}
                    label={colorValue}
                    value={colorValue}
                    style={{ backgroundColor: colorValue }}
                    checked={color === colorValue}
                />
            ))}
            <span>
                The current color is{" "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {" "}
                    {color}
                </span>
            </span>
        </div>
    );
}
