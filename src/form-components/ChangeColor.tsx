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
    "black"
];

export function ChangeColor(): JSX.Element {
    const [selection, newColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>You Have Chosen:{"  "}</div>
            <span
                data-testid="colored-box"
                style={{ backgroundColor: selection }}
            >
                <span>{selection}</span>
            </span>
            <div>
                <span>
                    {COLORS.map((color: string) => (
                        <Form.Check
                            key={color}
                            inline
                            type="radio"
                            name="colors"
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => newColor(event.target.value)}
                            id={"colors-choice-" + color}
                            label={color}
                            value={color}
                            checked={selection == color}
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </span>
            </div>
        </div>
    );
}
