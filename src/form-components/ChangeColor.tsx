import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("red");

    const colors = [
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
        { label: "Yellow", value: "yellow" },
        { label: "Pink", value: "pink" },
        { label: "Orange", value: "orange" },
        { label: "Purple", value: "purple" },
        { label: "Brown", value: "brown" }
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {colors.map((color) => (
                    <Form.Check
                        key={color.value}
                        inline
                        type="radio"
                        name="color"
                        value={color.value}
                        checked={selectedColor === color.value}
                        onChange={handleChange}
                        label={color.label}
                    />
                ))}
            </Form.Group>
            <div
                data-testid="colored-box"
                style={{
                    color: selectedColor,
                    backgroundColor: selectedColor
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
