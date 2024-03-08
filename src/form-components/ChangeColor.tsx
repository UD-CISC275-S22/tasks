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
                    <label key={index} style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => setSelectedColor(color)}
                            style={{ marginRight: "5px" }}
                        />
                        <span
                            style={{
                                backgroundColor: color,
                                padding: "5px",
                                borderRadius: "5px"
                            }}
                        >
                            {color}
                        </span>
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "10px"
                }}
            >
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: selectedColor
                    }}
                ></div>
                <div style={{ marginTop: "10px" }}>
                    You have chosen:{" "}
                    <span style={{ backgroundColor: selectedColor }}>
                        {selectedColor}
                    </span>
                </div>
            </div>
        </div>
    );
}
