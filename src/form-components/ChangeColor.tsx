import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white"
    ];
    const [color, setcolor] = useState<string>("red");
    return (
        <div>
            {colors.map((color2: string) => (
                <Form.Check
                    inline
                    key={color2}
                    type="radio"
                    name="color"
                    onChange={(e) => setcolor(e.target.value)}
                    id={color}
                    label={
                        <span style={{ backgroundColor: color2 }}>
                            {color2}
                        </span>
                    }
                    value={color2}
                    checked={color === color2}
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
