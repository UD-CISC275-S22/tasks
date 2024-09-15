import React, { useState } from "react";

import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [choseColor, setChoseColor] = useState<string>("red");
    const updateColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChoseColor(event.target.value);
    };
    const Color = [
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
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="forChangeColor">
                <Form.Label>Choose Color:</Form.Label>
                {Color.map((color: string) => (
                    <Form.Check
                        type="radio"
                        key={color}
                        name="colors"
                        onChange={updateColor}
                        label={color}
                        value={color}
                        checked={choseColor === color}
                        style={{ backgroundColor: color }}
                        inline
                    />
                ))}
            </Form.Group>
            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: choseColor }}
                >
                    {choseColor}
                </span>
            </p>
        </div>
    );
}
