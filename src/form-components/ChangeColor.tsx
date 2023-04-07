import React, { useState } from "react";
import { Form } from "react-bootstrap";

type Color = {
    label: string;
    value: string;
};

const colors: Color[] = [
    { label: "Red", value: "#ff0000" },
    { label: "Green", value: "#00ff00" },
    { label: "Blue", value: "#0000ff" },
    { label: "Yellow", value: "#ffff00" },
    { label: "Purple", value: "#800080" },
    { label: "Cyan", value: "#00ffff" },
    { label: "Orange", value: "#ffa500" },
    { label: "Pink", value: "#ffc0cb" }
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("#ff0000");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    key={color.value}
                    inline
                    label={color.label}
                    type="radio"
                    name="color"
                    value={color.value}
                    checked={selectedColor === color.value}
                    onChange={handleColorChange}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "j",
                    marginTop: "i"
                }}
            >
                <p> {selectedColor} </p>
            </div>
        </div>
    );
}
