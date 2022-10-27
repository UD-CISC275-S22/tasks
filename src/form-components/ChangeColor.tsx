import React, { useState } from "react";
import { Form } from "react-bootstrap";

const listOfColors = [
    "purple",
    "blue",
    "green",
    "orange",
    "red",
    "yellow",
    "violet",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [onColor, setColor] = useState<string>("red");
    return (
        <div>
            <h5>Change Color</h5>
            {listOfColors.map((colorValue: string) => (
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
                    checked={onColor === colorValue}
                />
            ))}
            <div>Color: </div>
            <span>
                <span
                    style={{ backgroundColor: onColor }}
                    data-testid="colored-box"
                >
                    {" "}
                    {onColor}
                </span>
            </span>
        </div>
    );
}
