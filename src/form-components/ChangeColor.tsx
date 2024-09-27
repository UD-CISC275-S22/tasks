import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white"
    ];

    const [color, setColor] = useState<string>("orange");

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((colorB) => (
                <Form.Check
                    inline
                    key={colorB}
                    type="radio"
                    name="color"
                    onChange={(x) => setColor(x.target.value)}
                    id={color}
                    label={
                        <span style={{ backgroundColor: colorB }}>
                            {colorB}
                        </span>
                    }
                    value={colorB}
                    checked={color === colorB}
                ></Form.Check>
            ))}
            <div>
                You chose{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                !
            </div>
        </div>
    );
}
