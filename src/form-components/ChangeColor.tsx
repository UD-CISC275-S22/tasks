import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("red");
    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

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

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color, index) => (
                <label key={index} style={{ marginRight: "5px" }}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => handleColorChange(color)}
                    />
                    <span
                        style={{
                            backgroundColor: color,
                            padding: "1px",
                            borderRadius: "3px"
                        }}
                    >
                        {color}
                    </span>
                </label>
            ))}
            <div style={{ marginTop: "10px" }}>
                You have chosen
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor,
                        padding: "1px",
                        borderRadius: "3px"
                    }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
