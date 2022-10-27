import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];

    function switchColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="colorsForm">
                <Form.Label>Select Color</Form.Label>
                {COLORS.map((colors: string) => (
                    <Form.Check
                        inline
                        key={colors}
                        label={colors}
                        value={colors}
                        type="radio"
                        name="colors"
                        onChange={switchColor}
                        checked={colors === color}
                        style={{ backgroundColor: colors }}
                    />
                ))}
            </Form.Group>
            <div>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
