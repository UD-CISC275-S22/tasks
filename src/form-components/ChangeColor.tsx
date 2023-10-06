import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "brown"
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color) => (
                    <Form.Check
                        inline
                        type="radio"
                        key={color}
                        id={`radio-${color}`}
                        label={color}
                        checked={selectedColor === color}
                        onChange={() => handleColorChange(color)}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "50px",
                    backgroundColor: selectedColor,
                    marginTop: "10px"
                }}
            >
                on {selectedColor}
            </div>
        </div>
    );
}
