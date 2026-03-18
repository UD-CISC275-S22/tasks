import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.ReactElement {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            {COLORS.map((c: string) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="colors"
                    id={`color-${c}`}
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(e.target.value);
                    }}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
