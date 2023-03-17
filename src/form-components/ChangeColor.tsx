import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("");
    const colors = [
        "Maroon",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Violet"
    ];
    const coloredBoxStyle = {
        backgroundColor: selectedColor,
        color: "black",
        padding: "1rem"
    };
    function changeSelectedColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h2>Change COlor!</h2>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        inline
                        name={color}
                        key={color}
                        label={color}
                        type="radio"
                        value={color}
                        checked={selectedColor === color}
                        onChange={changeSelectedColor}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </Form>
            <Form>
                <div data-testid="colored-box" style={coloredBoxStyle}>
                    You have chosen {selectedColor}
                </div>
            </Form>
        </div>
    );
}
