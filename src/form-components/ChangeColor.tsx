import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    { name: "Red", color: "#FF0000" },
    { name: "Green", color: "#00FF00" },
    { name: "Blue", color: "#0000FF" },
    { name: "Yellow", color: "#FFFF00" },
    { name: "Orange", color: "#FFA500" },
    { name: "Purple", color: "#800080" },
    { name: "Cyan", color: "#00FFFF" },
    { name: "Magenta", color: "#FF00FF" }
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map(({ name, color }) => (
                <Form.Check
                    key={name}
                    type="radio"
                    inline
                    label={name}
                    value={color}
                    checked={selectedColor === color}
                    onChange={handleColorChange}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "50px",
                    backgroundColor: selectedColor,
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FFFFFF" // Text color to ensure visibility
                }}
            >
                {selectedColor} {/* Display the color value */}
            </div>
        </div>
    );
}
