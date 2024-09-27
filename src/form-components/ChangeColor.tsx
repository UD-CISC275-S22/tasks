import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("Red"); // Tracks the selected color

    // List of at least 8 unique colors
    const colors = [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Purple",
        "Orange",
        "Pink",
        "Cyan",
    ];

    return (
        <div>
            <h3>Change Color</h3>

            {/* Render radio buttons for each color */}
            {colors.map((currentColor) => (
                <div key={currentColor}>
                    <input
                        type="radio"
                        id={currentColor}
                        name="color"
                        value={currentColor}
                        checked={color === currentColor}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                    />
                    <label htmlFor={currentColor}>{currentColor}</label>
                </div>
            ))}

            {/* Display the box with the selected color */}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: color === "Yellow" ? "black" : "white", // Adjust text color for visibility
                    padding: "10px",
                    marginTop: "20px",
                    width: "200px",
                    textAlign: "center",
                }}
            >
                {color}
            </div>
        </div>
    );
}
