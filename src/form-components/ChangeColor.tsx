import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "cyan"
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`color-${color}`}
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => setSelectedColor(color)}
                        />
                        <label htmlFor={`color-${color}`}>{color}</label>
                    </div>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor,
                    margin: "10px 0",
                    textAlign: "center",
                    lineHeight: "100px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
