import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    { name: "Red", value: "#FF0D18" },
    { name: "Green", value: "#0DFF3D" },
    { name: "Blue", value: "#0D1FFF" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Purple", value: "#800080" },
    { name: "Cyan", value: "#00FFFF" },
    { name: "Orange", value: "#FFA500" },
    { name: "Pink", value: "#FFC0CB" }
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("");

    // Function to handle color change
    function updatedSelectColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <>
            <h3>Change Color</h3>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <div>
                    {colors.map((color, index) => (
                        <Form.Check
                            key={index}
                            inline
                            type="radio"
                            label={color.name}
                            id={color.name}
                            value={color.value}
                            checked={selectedColor === color.value}
                            onChange={(e) => updatedSelectColor(e)}
                            style={{
                                backgroundColor: color.value
                            }}
                        />
                    ))}
                </div>
                {/* Colored box */}
                <div>
                    You have chosen:
                    <span
                        data-testid="colored-box"
                        style={{
                            backgroundColor: selectedColor,
                            width: "30px",
                            height: "20px",
                            margin: "1px"
                        }}
                    >
                        <span>
                            <span style={{ color: "red" }}>
                                {selectedColor}
                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}
