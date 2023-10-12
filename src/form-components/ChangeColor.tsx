import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "pink",
    "purple",
    "brown"
];
const DEFAULTCOLOR = colors[0];
export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(DEFAULTCOLOR);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="chosenColor"
                    onChange={(element) => setChosenColor(element.target.value)}
                    value={color}
                    key={color}
                    label={color}
                    style={{ backgroundColor: color }}
                />
            ))}
            <div>
                <span>
                    You have chosen&nbsp;
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: chosenColor }}
                    >
                        {chosenColor}.
                    </span>
                </span>
            </div>
        </div>
    );
}
