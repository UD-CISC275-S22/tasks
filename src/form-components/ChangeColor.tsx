import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <div
                    key={color}
                    style={{ display: "inline-block", margin: "0 10px" }}
                >
                    <label>
                        <input
                            type="radio"
                            value={color}
                            checked={selectedColor === color}
                            onChange={handleColorChange}
                            style={{ marginRight: "5px" }}
                        />
                        {color}
                    </label>
                </div>
            ))}

            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: selectedColor,
                    color: "white",
                    textAlign: "center",
                    width: "200px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
