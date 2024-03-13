import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "yellow",
        "orange",
        "green",
        "purple",
        "white",
        "black"
    ];

    function colorChanger(event: React.ChangeEvent<HTMLInputElement>) {
        if (colors.includes(event.target.value)) {
            setSelectedColor(event.target.value);
        }
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((colorItem) => (
                <Form.Check
                    style={{ backgroundColor: colorItem }}
                    inline
                    type="radio"
                    name="colors"
                    key={colorItem}
                    onChange={colorChanger}
                    label={colorItem}
                    value={colorItem}
                    checked={colorItem === selectedColor}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: selectedColor }}
                    data-testid="colored-box"
                >
                    {" "}
                    {selectedColor}{" "}
                </span>
            </div>
        </div>
    );
}
