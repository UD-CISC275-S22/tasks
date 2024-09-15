import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [colors, setColors] = useState<string>("red");
    const COLORS = [
        "red",
        "blue",
        "yellow",
        "green",
        "purple",
        "orange",
        "brown",
        "pink"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColors(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="radio-colors">
                <Form.Label>Select a Color</Form.Label>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={"colors-check-" + color}
                        label={color}
                        value={color}
                        checked={colors === color}
                        key={color}
                        style={{ backgroundColor: color }}
                        //data-testid="colored-box"
                    />
                ))}
            </Form.Group>
            <div>
                You have chosen:{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colors }}
                >
                    {colors}
                </span>
            </div>
        </div>
    );
}
