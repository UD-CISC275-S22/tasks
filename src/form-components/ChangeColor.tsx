import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [picked, setPicked] = useState<string>("red");
    const colors: string[] = [
        "pink",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "violet",
        "purple"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setPicked(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    onChange={updateColor}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={picked === color}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: picked }}
                >
                    {picked}
                </span>
            </div>
        </div>
    );
}
