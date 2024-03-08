import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "white",
        "pink",
        "orange",
        "yellow",
        "red",
        "green",
        "maroon",
        "blue"
    ];
    const [color, setColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="changeColor">
                <Form.Label>Change Color {""}</Form.Label>
                {colors.map((col: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        key={col}
                        onChange={updateColor}
                        label={
                            <span style={{ backgroundColor: col }}>{col}</span>
                        }
                        value={col}
                        checked={color === col}
                    ></Form.Check>
                ))}
            </Form.Group>
            You have chosen{" "}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
