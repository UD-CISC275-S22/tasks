import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "lightblue",
    "tan",
    "orange",
    "lightgreen",
    "brown",
    "gray",
    "yellow"
];

export function ChangeColor(): JSX.Element {
    const [chosen, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colors"
                    value={color}
                    onChange={updateColor}
                    checked={chosen === color}
                    label={color}
                    style={{ backgroundColor: color }}
                />
            ))}
            <div>
                The chosen color is:{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosen }}
                >
                    {chosen}
                </span>
            </div>
        </div>
    );
}
