import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
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
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => handleColorChange(color)}
                        style={{ marginRight: "5px" }}
                    />
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    width: "100px",
                    height: "50px",
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
