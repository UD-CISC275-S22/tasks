import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "black",
    "yellow",
    "purple",
    "orange",
    "pink"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [currentColor, setCurrentColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentColor(event.target.value);
    }

    return (
        <div>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    label={color}
                    style={{ backgroundColor: color }}
                    value={color}
                    checked={currentColor === color}
                    onChange={updateColor}
                ></Form.Check>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: currentColor
                }}
            >
                You have chosen {currentColor}.
            </div>
        </div>
    );
}
