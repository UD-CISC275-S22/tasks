import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS: string[] = [
        "blue",
        "orange",
        "black",
        "green",
        "cyan",
        "magenta",
        "yellow",
        "white"
    ];
    const [color, setColor] = useState<string>("white");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((currColor: string) => (
                    <Form.Check
                        inline
                        id="color-options-radio-buttons"
                        key={currColor}
                        label={currColor}
                        value={currColor}
                        name="colors"
                        type="radio"
                        checked={currColor === color}
                        onChange={updateColor}
                        style={{ backgroundColor: currColor }}
                    ></Form.Check>
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}.
                </span>
            </div>
        </div>
    );
}
