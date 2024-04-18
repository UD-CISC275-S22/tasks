import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    // State to handle the currently selected color
    const [color, setColor] = useState("Red");

    // List of colors to choose from
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Black",
        "White"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((colorName) => (
                <label key={colorName} style={{ margin: "0 10px" }}>
                    <input
                        type="radio"
                        name="color"
                        value={colorName}
                        checked={color === colorName}
                        onChange={() => setColor(colorName)}
                    />
                    {colorName}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: color === "Black" ? "White" : "Black",
                    padding: "10px",
                    marginTop: "20px"
                }}
            >
                {color}
            </div>
        </div>
    );
}
