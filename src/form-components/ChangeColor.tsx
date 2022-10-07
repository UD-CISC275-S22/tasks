import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "yellow",
        "green",
        "orange",
        "purple",
        "black",
        "white"
    ];
    const [color, setcolor] = useState<string>("red");
    return (
        <div>
            {colors.map((c: string) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="color"
                    onChange={(e) => setcolor(e.target.value)}
                    id={c}
                    label={<span style={{ backgroundColor: c }}>{c}</span>}
                    value={c}
                    checked={color === c}
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
                .
            </div>
        </div>
    );
}
