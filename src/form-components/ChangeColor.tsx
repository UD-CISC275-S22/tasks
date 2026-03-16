import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "pink",
        "brown",
    ];
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSelectedColor(e.target.value);
                    }}
                    id={`color-check-${color}`}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor, color: "white" }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
