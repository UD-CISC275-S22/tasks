import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "yellow",
    "orange",
    "green",
    "purple",
    "pink",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color, color: "white" }}
                >
                    {color}
                </span>
            </div>
            {COLORS.map((col: string) => (
                <Form.Check
                    key={col}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setColor(event.target.value)
                    }
                    id={"color-is-" + col}
                    label={
                        <span style={{ backgroundColor: col, color: "white" }}>
                            {col}
                        </span>
                    }
                    value={col}
                    checked={color === col}
                />
            ))}
        </div>
    );
}
