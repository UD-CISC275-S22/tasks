import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "magenta" // Added more colors to meet the requirement
];
const DEFAULT_COLOR = COLORS[0]; // Default color is the first one in the array

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {COLORS.map((colorOption, index) => (
                    <Form.Check
                        key={index}
                        inline
                        type="radio"
                        name="color"
                        onChange={(e) => setColor(e.target.value)}
                        id={`color-${colorOption}`}
                        label={colorOption}
                        value={colorOption}
                        checked={color === colorOption}
                        style={{ width: "5%" }}
                    />
                ))}
            </Form.Group>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {color}
            </div>
        </div>
    );
}
