import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

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
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    const updateColor = (e: ChangeEvent) => {
        setColor(e.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id={"response-" + c}
                    label={c}
                    key={"response-" + c}
                    value={c}
                    checked={color === c}
                    style={{ backgroundColor: c }}
                />
            ))}
            You have chosen{" "}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
        </div>
    );
}
