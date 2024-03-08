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
    const [selectedColor, setSelectedColor] = useState<string>("");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => setSelectedColor(color)}
                            style={{ marginRight: "5px" }}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor,
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
