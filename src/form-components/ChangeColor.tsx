import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "green",
    "orange",
    "blue",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
    >;
    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    const [colo, setColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    key={color}
                    value={color}
                    type="radio"
                    id="pick color"
                    label={color}
                    name="color"
                    checked={color == colo}
                    onChange={updateColor}
                    style={{ backgroundColor: color }}
                ></Form.Check>
            ))}
            <div>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colo }}
                >
                    {colo}
                </span>
            </div>
        </div>
    );
}
