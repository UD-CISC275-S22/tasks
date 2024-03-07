import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("");

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "cyan",
        "magenta"
    ];

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            {colors.map((color, index) => (
                <Form.Check
                    key={index}
                    type="radio"
                    inline
                    label={color}
                    id={`color-${color}`}
                    checked={selectedColor === color}
                    onChange={() => handleColorChange(color)}
                    style={{
                        backgroundColor: color,
                        color: "white",
                        marginRight: "10px"
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor,
                    textAlign: "center",
                    lineHeight: "100px",
                    color: "white"
                }}
            >
                {selectedColor ? "on" : "Select a color"}
            </div>
            {selectedColor && (
                <p>
                    You have chosen{" "}
                    <span style={{ color: selectedColor }}>
                        {selectedColor}
                    </span>
                    .
                </p>
            )}
        </div>
    );
}

export default ChangeColor;
