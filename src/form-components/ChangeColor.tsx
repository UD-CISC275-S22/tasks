import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                    onChange={(e) => {
                        setSelectedColor(e.target.value);
                    }}
                    name="colorOptions"
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {selectedColor} box
            </div>
        </div>
    );
}
