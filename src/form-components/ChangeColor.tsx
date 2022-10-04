import React, { useState } from "react";
import { Form } from "react-bootstrap";

type Color =
    | "red"
    | "blue"
    | "green"
    | "gainsboro"
    | "khaki"
    | "indigo"
    | "honeydew"
    | "maroon";

export function ChangeColor(): JSX.Element {
    const [currentColor, setCurrentColor] = useState<Color>("red");
    const colors: Color[] = [
        "red",
        "blue",
        "green",
        "gainsboro",
        "khaki",
        "indigo",
        "honeydew",
        "maroon"
    ];

    const updateColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentColor(event.target.value as Color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="forChangeColor">
                <Form.Label>Choose Color:</Form.Label>
                {colors.map((color) => (
                    <Form.Check
                        type="radio"
                        key={color}
                        name="colors"
                        onChange={updateColor}
                        id={`color-check-${color}`}
                        label={color}
                        value={color}
                        checked={currentColor === color}
                        inline
                    />
                ))}
            </Form.Group>
            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: currentColor }}
                >
                    {currentColor}
                </span>
            </p>
        </div>
    );
}
