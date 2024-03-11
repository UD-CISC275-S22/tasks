import React, { useState } from "react";
import { Form } from "react-bootstrap";
const colors = [
    { name: "red", value: "red" },
    { name: "navy", value: "navy" },
    { name: "green", value: "green" },
    { name: "maroon", value: "maroon" },
    { name: "beige", value: "beige" },
    { name: "salmon", value: "salmon" },
    { name: "cyan", value: "cyan" },
    { name: "magenta", value: "magenta" }
];

export function ChangeColor(): JSX.Element {
    const [selectedcolor, setColor] = useState<string>(colors[0].value);
    const handleColorChange = (color: string) => {
        setColor(color);
    };
    return (
        <div>
            <div>Change Color</div>
            <div>
                {colors.map((color, index) => (
                    <Form.Check
                        key={index}
                        type="radio"
                        id={`color-${index}`}
                        inline
                        label={color.name}
                        value={color.value}
                        checked={selectedcolor === color.value}
                        onChange={() => handleColorChange(color.value)}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedcolor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {selectedcolor.charAt(0) + selectedcolor.slice(1)}
            </div>
        </div>
    );
}
