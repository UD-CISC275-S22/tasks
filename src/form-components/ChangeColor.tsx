import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "green",
    "blue",
    "purple",
    "cyan",
    "pink",
    "yellow",
    "orange"
];
const DEFAULT_COLOR = COLORS[0];
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((colorOption: string) => (
                <Form.Check
                    key={colorOption}
                    inline
                    type="radio"
                    label={
                        <span style={{ backgroundColor: colorOption }}>
                            {colorOption}
                        </span>
                    }
                    name={colorOption}
                    value={colorOption}
                    onChange={updateColor}
                    checked={color === colorOption}
                />
            ))}
            <div>
                You have chosen{" "}
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
