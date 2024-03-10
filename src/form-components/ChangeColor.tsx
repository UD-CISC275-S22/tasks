import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "gray"
];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={(e) => setChosenColor(e.target.value)}
                    id={color}
                    label={color}
                    value={color}
                    checked={color === chosenColor}
                />
            ))}
            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: `${chosenColor}` }}
                >
                    {chosenColor}
                </span>
            </p>
        </div>
    );
}
