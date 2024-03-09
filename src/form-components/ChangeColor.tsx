import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "cyan"
    ];

    const [selectedColor, setSelectedColor] = useState<string>("");

    const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    value={color}
                    checked={selectedColor === color}
                    onChange={handleColor}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                ></Form.Check>
            ))}
            <span
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor
                }}
            >
                {selectedColor}
            </span>
        </div>
    );
}
